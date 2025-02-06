import { type ModalSubmitInteraction } from "discord.js";
import { ephemeralFollowUpResponse, type ModalStructure, type StelliaClient } from "@stelliajs/framework";
import { type CustomEnvironment } from "@environments/environment.model.js";

export default {
    data: {
        name: "example-form",
        once: false,
    },
    async execute(client: StelliaClient<true>, environment: CustomEnvironment, interaction: ModalSubmitInteraction<"cached">) {
        const field = interaction.fields.getField("field");
        await ephemeralFollowUpResponse(interaction, `Field value: ${field.value}`);
    }
} as ModalStructure;