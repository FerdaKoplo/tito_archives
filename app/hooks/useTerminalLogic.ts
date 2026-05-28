import { useCallback, useState } from "react";
import { useTerminalStore } from "../stores/TerminalStore";
import { LineType } from "../interfaces/Terminal";
import { COMMAND_NOT_FOUND, TERMINAL_DB } from "../consts/TerminalDB";

const useTerminalLogic = () => {
  const { addHistoryLines, clearHistory } = useTerminalStore();
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const processCommand = useCallback(
    (commandRaw: string) => {
      const command = commandRaw.trim().toUpperCase();
      if (!command) return;

      if (command === "CLEAR") {
        clearHistory();
        return;
      }

      addHistoryLines([
        {
          id: Date.now().toString(),
          text: `> ${command}`,
          type: LineType.COMMAND,
        },
      ]);

      setIsTyping(true);

      const response = TERMINAL_DB[command] || COMMAND_NOT_FOUND;

      setTimeout(() => {
        const outputLines = response.output.map((text, idx) => ({
          id: `${Date.now()}-${idx}`,
          text,
          type: response.type,
        }));

        addHistoryLines(outputLines);
      }, 300);
    },
    [addHistoryLines, clearHistory],
  );

  return { isTyping, setIsTyping, processCommand };
};

export default useTerminalLogic;
