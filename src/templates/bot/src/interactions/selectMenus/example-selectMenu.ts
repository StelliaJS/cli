import { type AnySelectMenuInteraction } from "discord.js";
import { ephemeralFollowUpResponse, type SelectMenuStructure, type StelliaClient } from "@stelliajs/framework";

export default {
    data: {
        name: "selectMenuExample",
        once: false,
    },
    async execute(client: StelliaClient<true>, interaction: AnySelectMenuInteraction<"cached">) {
        const value = interaction.values[0];
        await ephemeralFollowUpResponse(interaction, `SelectMenu value: ${value}`);
    }
} as SelectMenuStructure;