import { HistoryLine, LineType } from "@/app/interfaces/Terminal";
import React, { FC, useMemo } from "react";
import TypewriterText from "./TypewriterText";

interface TerminalLineProps {
  line: HistoryLine;
  shouldAnimate: boolean;
  onComplete?: () => void;
}

const TerminalLine: React.FC<TerminalLineProps> = ({
  onComplete,
  line,
  shouldAnimate,
}) => {
  const textColor = useMemo(() => {
    switch (line.type) {
      case LineType.COMMAND:
        return "text-white";
      case LineType.ERROR:
        return "text-[#C8102E]";
      case LineType.SYSTEM:
        return "text-gray-400";
      case LineType.SUCCESS:
        return "text-green-500";
      default:
        return "text-white";
    }
  }, [line.type]);

  return (
    <div className={`${textColor} tracking-wide`}>
      <TypewriterText
        text={line.text}
        instant={!shouldAnimate}
        onComplete={onComplete}
      />
    </div>
  );
};

export default React.memo(
  TerminalLine,
  (prev, next) =>
    prev.line.id === next.line.id && prev.shouldAnimate === next.shouldAnimate,
);
