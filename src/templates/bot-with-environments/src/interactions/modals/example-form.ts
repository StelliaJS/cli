import { type ModalSubmitInteraction } from "discord.js";
import { ephemeralFollowUpResponse, type ModalStructure, type StelliaClient } from "@stelliajs/framework";
import { type CustomGuildConfiguration } from "@environments/environment.model.js";

export default {
    data: {
        name: "example-form",
        once: false,
    },
    async execute(client: StelliaClient<true>, guildConfiguration: CustomGuildConfiguration, interaction: ModalSubmitInteraction<"cached">) {
        const field = interaction.fields.getField("field");
        await ephemeralFollowUpResponse(interaction, `Field value: ${field.value}`);
    }
} satisfies ModalStructure;