import { type ButtonInteraction, codeBlock } from "discord.js";
import { type ButtonStructure, ephemeralFollowUpResponse, type StelliaClient } from "@stelliajs/framework";
import { type CustomGuildConfiguration } from "@environments/environment.model.js";

export default {
    data: {
        name: "buttonEnvironment",
        once: false,
    },
    async execute(client: StelliaClient<true>, guildConfiguration: CustomGuildConfiguration, interaction: ButtonInteraction<"cached">) {
        await ephemeralFollowUpResponse(interaction, `The current environment is: ${codeBlock(JSON.stringify(guildConfiguration))}`);
    }
} satisfies ButtonStructure;