/* https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged */
import path from "path";

// These three commands are effectively the same as running:
// yarn format:force && yarn validate

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = (filenames) => `prettier --write ${filenames.join(" ")}`;
const buildTsCheckCommand = () => `tsc --noEmit -p tsconfig.json`;

const exports = {
  "*.{js,jsx,ts,tsx}": [buildTsCheckCommand, buildEslintCommand, buildPrettierCommand],
};
export default exports;
