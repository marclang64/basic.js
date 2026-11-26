import type { CommandResult } from "../types/command";
import { commandType } from "../app/constants";
import { dom } from "../ui/dom";

export async function HELP(): Promise<CommandResult> {
  const chr = (code: number) => String.fromCharCode(code);

  const heading = (text: string) => `${chr(31)}${chr(312)} ${text} ${chr(319)}`;

  dom.clearOutput();

  const output = [
    heading("RETRO LOVE BASIC - HELP"),
    "",
    heading("COMMANDS"),
    "PRINT  - DISPLAY TEXT OR VALUES",
    "LET    - ASSIGN A VARIABLE",
    "INPUT  - REQUEST USER INPUT",
    "IF     - CONDITIONAL EXECUTION",
    "GOTO   - JUMP TO A PROGRAM LINE",
    "LIST   - SHOW STORED PROGRAM",
    "RUN    - EXECUTE STORED PROGRAM",
    "NEW    - CLEAR STORED PROGRAM AND VARIABLES",
    "CLR    - CLEAR STORED VARIABLES",
    "REM    - ADD COMMENT",
    "LOAD   - LOAD A BASIC PROGRAM",
    "EXIT   - RETURN TO STARTUP SCREEN",
    "HELP   - DISPLAY THIS HELP",
    "",
    heading("PROGRAMMING"),
    "USE LINE NUMBERS TO STORE COMMANDS.",
    "ENTER COMMANDS WITHOUT LINE NUMBERS",
    "TO EXECUTE THEM IMMEDIATELY.",
    "PRESS CTRL+C TO INTERRUPT A PROGRAM.",
    "",
    heading("PETSCII"),
    "CHR$(147) - CLEAR SCREEN",
    "",
    heading("TEXT COLORS"),
    "CHR$(5)   - WHITE",
    "CHR$(28)  - RED",
    "CHR$(30)  - GREEN",
    "CHR$(31)  - BLUE",
    "CHR$(129) - ORANGE",
    "CHR$(144) - BLACK",
    "CHR$(149) - BROWN",
    "CHR$(150) - LIGHT RED",
    "CHR$(151) - DARK GRAY",
    "CHR$(152) - MEDIUM GRAY",
    "CHR$(153) - LIGHT GREEN",
    "CHR$(154) - LIGHT BLUE",
    "CHR$(155) - LIGHT GRAY",
    "CHR$(156) - PURPLE",
    "CHR$(158) - YELLOW",
    "CHR$(159) - CYAN",
    "",
    heading("BACKGROUND COLORS"),
    "CHR$(301) - WHITE",
    "CHR$(302) - RED",
    "CHR$(303) - GREEN",
    "CHR$(304) - BLUE",
    "CHR$(305) - ORANGE",
    "CHR$(306) - BLACK",
    "CHR$(307) - BROWN",
    "CHR$(308) - LIGHT RED",
    "CHR$(309) - DARK GRAY",
    "CHR$(310) - MEDIUM GRAY",
    "CHR$(311) - LIGHT GREEN",
    "CHR$(312) - LIGHT BLUE",
    "CHR$(313) - LIGHT GRAY",
    "CHR$(314) - PURPLE",
    "CHR$(315) - YELLOW",
    "CHR$(316) - CYAN",
    "",
    heading("BASIC.JS EXTENSIONS"),
    "CHR$(256) - OPEN CENTERED CONTAINER",
    "CHR$(257) - CLOSE CONTAINER",
    "CHR$(317) - RESET BACKGROUND",
    "CHR$(318) - RESET TEXT COLOR",
    "CHR$(319) - RESET BOTH COLORS",
    "OPENLINK - OPEN A URL OR EMAIL LINK",
    "",
  ].join("\n");

  dom.outputLine(output);

  return { type: commandType.DEFAULT, value: null };
}
