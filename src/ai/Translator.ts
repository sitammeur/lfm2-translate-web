import { pipeline, DataType } from "@huggingface/transformers";

class Translator {
  private static instance: Translator | null = null;
  private pipeline: any = null;
  private static modelId: string = "onnx-community/LFM2-350M-ENJP-MT-ONNX";
  private static dtype: DataType = "q4f16";
  // model_q4f16.onnx (176 kB) + model_q4f16.onnx_data (312 MB) + tokenizer + config files (~3.5 MB)
  public static size: number = 316_000_000;

  private constructor() {}

  public static getInstance(): Translator {
    if (!Translator.instance) {
      Translator.instance = new Translator();
    }
    return Translator.instance;
  }

  public async init(onProgress?: (progress: number) => void) {
    if (this.pipeline) return;

    const loaded = new Map<string, number>();
    let newProgress = 0;

    this.pipeline = await pipeline("text-generation", Translator.modelId, {
      progress_callback: (e) => {
        if (e.status === "progress") {
          loaded.set(e.file, e.loaded);
          const allLoaded = Array.from(loaded.values()).reduce(
            (acc: number, curr: number) => acc + curr,
            0
          );
          const percentLoaded =
            Math.round((100 / Translator.size) * allLoaded * 100) / 100;
          if (newProgress !== percentLoaded) {
            newProgress = percentLoaded;
            onProgress(newProgress);
          }
        }
      },
      device: "webgpu",
      dtype: Translator.dtype,
    });
  }

  public async translate(
    text: string,
    _sourceLang: string,
    targetLang: string
  ): Promise<string> {
    if (!this.pipeline) {
      throw new Error("Translator not initialized. Call init() first.");
    }

    const systemPrompt =
      targetLang === "ja" ? "Translate to Japanese." : "Translate to English.";

    const messages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: text },
    ];

    const output = await this.pipeline(messages, {
      max_new_tokens: 1024,
      do_sample: false,
      temperature: 0,
    });

    return output[0].generated_text.pop().content;
  }
}

export default Translator;
