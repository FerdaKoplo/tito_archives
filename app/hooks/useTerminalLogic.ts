import { useCallback, useState } from "react";
import { useTerminalStore } from "../stores/TerminalStore";
import { LineType } from "../interfaces/Terminal";
import { COMMAND_NOT_FOUND, TERMINAL_DB } from "../consts/TerminalDB";
import { useRouter } from "next/navigation";

const useTerminalLogic = () => {
  const { addHistoryLines, clearHistory, addCommandToHistory } =
    useTerminalStore();
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const router = useRouter();

  const processCommand = useCallback(
    (commandRaw: string) => {
      const fullCommand = commandRaw.trim();
      if (!fullCommand) return;

      addHistoryLines([
        {
          id: Date.now().toString(),
          text: `> ${fullCommand.toUpperCase()}`,
          type: LineType.COMMAND,
        },
      ]);

      setIsTyping(true);

      const parts = fullCommand.split(" ").filter(Boolean);
      const baseCmd = parts[0].toUpperCase();
      const args = parts.slice(1);

      if (baseCmd !== "CLEAR") {
        addCommandToHistory(fullCommand);
      }

      setTimeout(() => {
        let outputLines: { text: string; type: LineType }[] = [];

        switch (baseCmd) {
          case "CLEAR":
            clearHistory();
            setIsTyping(false);
            return;

          case "LS":
            outputLines = [
              { text: "AVAILABLE REGIONAL ARCHIVES:", type: LineType.SYSTEM },
              { text: "DIR: CROATIA (cro)", type: LineType.DATA },
              { text: "DIR: SLOVENIA (slo)", type: LineType.DATA },
              { text: "DIR: SERBIA (srb)", type: LineType.DATA },
              {
                text: "USAGE: OPEN [REGION_ID]-HIST-01",
                type: LineType.SYSTEM,
              },
            ];
            break;

          case "OPEN":
            if (args.length === 0) {
              outputLines = [
                { text: "ERROR: MISSING TARGET ID.", type: LineType.ERROR },
                { text: "USAGE: OPEN [DOCUMENT_ID]", type: LineType.SYSTEM },
              ];
            } else {
              const targetId = args[0].toLowerCase();
              outputLines = [
                {
                  text: `LOCATING ARCHIVE [${targetId.toUpperCase()}]...`,
                  type: LineType.SYSTEM,
                },
                {
                  text: "ACCESS GRANTED. REROUTING DATALINK...",
                  type: LineType.SUCCESS,
                },
              ];

              setTimeout(() => {
                router.push(`/archives?region=${targetId}`);
              }, 1500);
            }
            break;

          default:
            const staticResponse =
              TERMINAL_DB[fullCommand.toUpperCase()] || COMMAND_NOT_FOUND;

            outputLines = staticResponse.output.map((text: string) => ({
              text,
              type: staticResponse.type,
            }));
            break;
        }

        const formattedLines = outputLines.map((line, index) => ({
          id: `${Date.now()}-${index}`,
          text: line.text,
          type: line.type,
        }));

        addHistoryLines(formattedLines);
      }, 400);
    },
    [addHistoryLines, clearHistory, router],
  );

  return { isTyping, setIsTyping, processCommand };
};

export default useTerminalLogic;
