import { fileURLToPath } from "url";
import path from "path";
import { findUp, pathExists } from "find-up";
import { cpSync, readFile } from "fs";

export async function createStelliaEvent(event) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const templateDirectoryPath = await findUp("event.ts", { cwd: path.join(__dirname, "../templates/other") })
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
    const fileContent = await readFile(templateDirectoryPath, (error, data) => {
        
    });
    console.log(fileContent)
    // cpSync(templateDirectoryPath, projectRootDirectory);

    console.log("Event successfully created! 🚀");
}
