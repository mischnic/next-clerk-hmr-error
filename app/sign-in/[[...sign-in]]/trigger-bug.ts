"use server";
import fs from "node:fs";

export async function triggerBug() {
  const newLines = [];
  // iterate over the lines of fp
  for (const line of fs.readFileSync(".env.development.local", "utf-8").split("\n")) {
    if (line.includes("NEXT_PUBLIC_CLERK_SIGN_IN_URL")) {
      if (line.startsWith("#")) {
        newLines.push(line.slice(1));
      } else {
        newLines.push("#" + line);
      }
    } else {
      newLines.push(line);
    }
  }

  fs.writeFileSync(".env.development.local", newLines.join("\n"));

  return null;
}
