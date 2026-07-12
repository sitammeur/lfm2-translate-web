import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { LANGUAGES, type LanguageCode } from "../constants";

interface LanguageSelectorProps {
  value: LanguageCode;
  onChange: (language: LanguageCode) => void;
}

export default function LanguageSelector({
  value,
  onChange,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getLanguageDisplay = (code: LanguageCode) => {
    return LANGUAGES.find((lang) => lang.code === code)?.name || code;
  };

  const handleSelect = (language: LanguageCode) => {
    onChange(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary hover:bg-muted rounded-md transition-colors"
      >
        <span>{getLanguageDisplay(value)}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-md shadow-lg z-50">
          <div className="py-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors ${
                  value === lang.code ? "bg-primary-50 text-primary-800 font-medium" : ""
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
