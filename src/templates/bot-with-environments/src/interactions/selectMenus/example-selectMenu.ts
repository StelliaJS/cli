import { type AnySelectMenuInteraction } from "discord.js";
import { ephemeralFollowUpResponse, type SelectMenuStructure, type StelliaClient } from "@stelliajs/framework";
import { type CustomEnvironment } from "@environments/environment.model.js";

export default {
    data: {
        name: "selectMenuExample",
        once: false,
    },
    async execute(client: StelliaClient<true>, environment: CustomEnvironment, interaction: AnySelectMenuInteraction<"cached">) {
        const value = interaction.values[0];
        await ephemeralFollowUpResponse(interaction, `SelectMenu value: ${value}`);
    }
} as SelectMenuStructure;