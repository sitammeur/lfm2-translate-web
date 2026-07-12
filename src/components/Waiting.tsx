import { useEffect, useState } from "react";
import cn from "../utils/classnames.ts";
import { ExternalLink } from "lucide-react";

const ALL_TITLES = [
  "Why LFM2?",
  "LFM2 はなぜ？",
];

export default function Waiting({ className = "" }: { className?: string }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTitleIndex((i) => (i + 1) % ALL_TITLES.length);
        setVisible(true);
      }, 400);
    }, 1700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("space-y-4 text-left w-full", className)}>
      <div
        className="animate-fade-in-up"
        style={{ animationDelay: "0.1s", opacity: 0 }}
      >
        <h3
          className="font-semibold text-base mb-1 transition-opacity duration-400"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {ALL_TITLES[titleIndex]}
        </h3>
        <p className="text-sm text-secondary-foreground">
          LFM2-350M-ENJP-MT is a Liquid Foundation Model from Liquid AI,
          fine-tuned specifically for English ↔ Japanese machine translation. It
          delivers high-quality bidirectional translations with only 350M
          parameters, making it compact enough to run entirely in the browser
          via WebGPU.
        </p>
      </div>

      <div
        className="animate-fade-in-up"
        style={{ animationDelay: "0.2s", opacity: 0 }}
      >
        <p className="text-sm text-secondary-foreground">
          While you're waiting,{" "}
          <a
            href="https://www.liquid.ai/blog/liquid-foundation-models-v2-our-second-series-of-generative-ai-models"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-2 gap-1 inline-flex items-center transition-all hover:underline-offset-4"
          >
            learn more about LFM2 <ExternalLink size={14} />
          </a>
          .
        </p>
      </div>
    </div>
  );
}
