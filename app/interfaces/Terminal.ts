export enum LineType {
  SYSTEM = "SYSTEM",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  COMMAND = "COMMAND",
}

export interface HistoryLine {
  id: string;
  text: string;
  type: LineType;
}

export interface TerminalResponse {
  output: string[];
  type: LineType;
}
