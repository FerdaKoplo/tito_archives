import React, { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  instant: boolean;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  instant,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState<string>(
    instant ? text : "",
  );

  useEffect(() => {
    if (instant) {
      onComplete?.();
      return;
    }

    let currentIndex = 0;
    const delay = 15; // ms per character

    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex >= text.length) {
        clearInterval(intervalId);
        onComplete?.();
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, instant, onComplete]);

  return <span>{displayedText}</span>;
};

export default React.memo(TypewriterText);
