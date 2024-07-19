import { ActionRowBuilder, type ButtonInteraction, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import { ButtonStructure, type StelliaClient } from "@stelliajs/framework";

export default {
    data: {
        name: "modalExample",
        once: false,
    },
    async execute(client: StelliaClient<true>, interaction: ButtonInteraction<"cached">) {
        const modal = new ModalBuilder()
            .setCustomId("example-form")
            .setTitle("Form");

        const favoriteColorInput = new TextInputBuilder()
            .setCustomId("field")
            .setLabel("What is your favorite color?")
            .setStyle(TextInputStyle.Short);
        const firstActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(favoriteColorInput);
        modal.addComponents(firstActionRow);

        await interaction.showModal(modal);
    },
} as ButtonStructure;