import { findUp, pathExists } from "find-up";
import { cpSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

export async function createStelliaApp() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const templateDirectoryPath = await findUp(async (directory) => {
        const completePath = path.join(directory, "bot");
        const isValidPath = await pathExists(completePath);
        if (isValidPath) {
            return completePath;
        }
        return false;
    }, { type: "directory", cwd: path.join(__dirname, "../templates") });
    if (!templateDirectoryPath) {
        console.error("Error: Could not find template directory");
        process.exit(1);
    }

    const packageJsonPath = await findUp("package.json");
    if (!packageJsonPath) {
        console.error("Error: Could not find package.json");
        process.exit(1);
    }
    const projectRootDirectory = path.dirname(packageJsonPath);

    cpSync(templateDirectoryPath, projectRootDirectory, { recursive: true });

    console.log("Project successfully created! 🚀");
}
