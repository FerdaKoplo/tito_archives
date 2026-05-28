import { LineType, TerminalResponse } from "../interfaces/Terminal";

export const TERMINAL_DB: Record<string, TerminalResponse> = {
  HELP: {
    type: LineType.SYSTEM,
    output: [
      "AVAILABLE COMMANDS:",
      "  DIR           - List available directories",
      "  READ [file]   - Decrypt and read target file",
      "  WHOAMI        - Display current user credentials",
      "  CLEAR         - Flush terminal history",
    ],
  },
  DIR: {
    type: LineType.SUCCESS,
    output: [
      "INDEXING ROOT DIRECTORY...",
      "--------------------------",
      "[DIR]  SYS_LOGS",
      "[DIR]  PERSONNEL",
      "[FILE] LOG_04.TXT",
      "[FILE] DIRECTIVE_99.TXT",
    ],
  },
  "READ LOG_04.TXT": {
    type: LineType.SUCCESS,
    output: [
      "DECRYPTING LOG_04.TXT...",
      "AUTHOR: Director V. [REDACTED]",
      "DATE: 14 NOV 1989",
      "The situation in the outer republics is deteriorating.",
      "End of log.",
    ],
  },
};

export const COMMAND_NOT_FOUND: TerminalResponse = {
  type: LineType.ERROR,
  output: ["ERR 404: COMMAND NOT RECOGNIZED. TYPE 'HELP' FOR COMMANDS."],
};
