import { findUp } from "find-up";
import { cpSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

export async function createStelliaApp() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const templateDirectory = path.join(__dirname, "../templates/bot");
    const packageJsonPath = await findUp('package.json');
    if (!packageJsonPath) {
        console.error("Error: Could not find package.json");
        process.exit(1);
    }
    const projectRootDirectory = path.dirname(packageJsonPath);
    cpSync(templateDirectory, projectRootDirectory, { recursive: true });

    console.log("Project successfully created! 🚀");
}
