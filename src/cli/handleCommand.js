#!/usr/bin/env node

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { createStelliaApp } from "./create-stellia-app.js";

yargs(hideBin(process.argv))
    .command("create-app", "Initialize a new Stellia project", () => {
    }, (argv) => {
        createStelliaApp();
    })
    .help()
    .version("1.0.0")
    .argv;
