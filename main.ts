// The Battery's Last Text to Its Charger.
// One line, at most 200 characters: the phone battery's final message
// to the charger it waited for all day.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The joke's turn: the battery is not just dying, it is jealous —
// it gave everything at 7am, the charger never came home, and its
// last words are a breakup text that rats out the other phone,
// then dismisses them both before it goes dark.
const LINE =
  "I waited all day, gave you 100% at 7am, and you're still not home. I'm at 1% now. Tell the Wi-Fi I loved her — and tell your other phone I know about her. She can have you. I'm done.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const outPath = join(outDir, "entry.txt");

if ([...LINE].length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line of at most 200 characters");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
