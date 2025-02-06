#!/usr/bin/env node

import { Events } from "discord.js";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { createStelliaApp } from "./create-stellia-app.js";
import { createStelliaEvent } from "./create-stellia-event.js";

yargs(hideBin(process.argv))
    .command("create-app", "Initialize a new Stellia project", () => {
    }, (argv) => {
        createStelliaApp();
    })
    .help()
    .version("1.0.0")
    .argv;

yargs(hideBin(process.argv))
    .command("event <event>", "Create a new event in your Stellia project", (yargs) => {
        yargs.positional("event", {
            describe: "Type of the event to create",
            choices: Object.values(Events),
            demandOption: true
        });
    }, (argv) => {
        createStelliaEvent(argv.event);
    })
    .help()
    .version("1.0.0")
    .argv;