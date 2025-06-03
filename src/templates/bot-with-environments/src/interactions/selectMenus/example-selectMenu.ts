import { type AnySelectMenuInteraction } from "discord.js";
import { ephemeralFollowUpResponse, type SelectMenuStructure, type StelliaClient } from "@stelliajs/framework";
import { type CustomGuildConfiguration } from "@environments/environment.model.js";

export default {
    data: {
        name: "selectMenuExample",
        once: false,
    },
    async execute(client: StelliaClient<true>, guildConfiguration: CustomGuildConfiguration, interaction: AnySelectMenuInteraction<"cached">) {
        const value = interaction.values[0];
        await ephemeralFollowUpResponse(interaction, `SelectMenu value: ${value}`);
    }
} satisfies SelectMenuStructure;