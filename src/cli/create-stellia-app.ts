import { cpSync } from "fs";
import path from "path";
import { CreateAppModel } from "@models/CreateAppModel.js";
import { Command } from "commander";

const createStelliaApp = async (options: CreateAppModel) => {
    const srcPath = path.dirname(path.resolve(process.argv[1]));
    const templatesDirectoryPath = path.join(srcPath, "..", "templates");
    const projectRootDirectory = process.cwd()
    if (options.withEnvironment) {
        const botDirectoryPath = path.join(templatesDirectoryPath, "bot-with-environments");
        cpSync(botDirectoryPath, projectRootDirectory, { recursive: true });
    } else {
        const botDirectoryPath = path.join(templatesDirectoryPath, "bot-without-environments");
        cpSync(botDirectoryPath, projectRootDirectory, { recursive: true });
    }

    console.log("Project successfully created! 🚀");
}

const program = new Command();
program
    .command("create-app")
    .description("Initialize a new Stellia project")
    .option("--with-environment", "Include environment setup", false)
    .action(async (options: CreateAppModel) => {
        console.log(options)
        await createStelliaApp(options);
    });
program
    .version("0.0.2")
    .parse(process.argv);
