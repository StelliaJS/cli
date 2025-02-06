import { type ButtonInteraction } from "discord.js";
import { type ButtonStructure, ephemeralFollowUpResponse, type StelliaClient } from "@stelliajs/framework";
import { type CustomEnvironment } from "@environments/environment.model.js";

export default {
    data: {
        name: "buttonEnvironment",
        once: false,
    },
    async execute(client: StelliaClient<true>, environment: CustomEnvironment, interaction: ButtonInteraction<"cached">) {
        await ephemeralFollowUpResponse(interaction, `The current environment is: ${JSON.stringify(environment)}`);
    }
} as ButtonStructure;