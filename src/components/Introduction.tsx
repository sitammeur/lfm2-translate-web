import cn from "../utils/classnames.ts";

export default function Introduction({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={cn("space-y-4 text-left w-full", className)}>
      <div
        className="animate-fade-in-up"
        style={{ animationDelay: "0.1s", opacity: 0 }}
      >
        <h3 className="font-semibold text-base mb-1">About LFM2 350M EN-JP</h3>
        <p className="text-sm text-secondary-foreground">
          LFM2-350M-ENJP-MT is a 350M parameter machine translation model from{" "}
          <a
            href="https://www.liquid.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-2 transition-all hover:underline-offset-4"
          >
            Liquid AI
          </a>
          , specialized for bidirectional English ↔ Japanese translation with
          high quality and low resource requirements.{" "}
          <a
            href="https://huggingface.co/LiquidAI/LFM2-350M-ENJP-MT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-2 transition-all hover:underline-offset-4"
          >
            Learn more
          </a>
        </p>
      </div>

      <div
        className="animate-fade-in-up"
        style={{ animationDelay: "0.2s", opacity: 0 }}
      >
        <h3 className="font-semibold text-base mb-1">
          Completely private & offline-capable
        </h3>
        <p className="text-sm text-secondary-foreground">
          Everything runs entirely in your browser with 🤗 Transformers.js and
          ONNX Runtime Web — no data is ever sent to a server. Once loaded, it
          works offline.
        </p>
      </div>

      <div
        className="animate-fade-in-up"
        style={{ animationDelay: "0.3s", opacity: 0 }}
      >
        <h3 className="font-semibold text-base mb-1">
          Experimental — WebGPU required
        </h3>
        <p className="text-sm text-secondary-foreground">
          This is experimental and requires a browser with WebGPU support. The
          Q4F16 quantized model is ~316 MB — much lighter than traditional
          translation models.
        </p>
      </div>
    </div>
  );
}
