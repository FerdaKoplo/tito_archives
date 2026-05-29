import { memo } from "react";

interface BootLineProps {
  text: string;
  isActive: boolean;
}

const BootLine = memo(({ text, isActive }: BootLineProps) => {
  return (
    <div
      className={`flex items-start transition-colors duration-200 ${
        isActive ? "text-[#C8102E] animate-pulse" : "text-white"
      }`}
    >
      <span className="mr-4 opacity-50">{">"}</span>
      <span className="uppercase tracking-wide">{text}</span>
    </div>
  );
});

BootLine.displayName = "BootLine";

export default BootLine;
