import { type CommandStructure, ephemeralFollowUpResponse, type StelliaClient } from "@stelliajs/framework";
import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    type ChatInputCommandInteraction,
    SlashCommandBuilder,
    StringSelectMenuBuilder
} from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("example-command")
        .setDescription("Try out the components")
        .addStringOption((option) =>
            option
                .setName("autocomplete")
                .setDescription("Auto complete option")
                .setAutocomplete(true),
        ),
    async execute(client: StelliaClient, interaction: ChatInputCommandInteraction<"cached">) {
        const autocomplete = interaction.options.getString("autocomplete");
        if (autocomplete) {
            return ephemeralFollowUpResponse(interaction, `Autocomplete : ${autocomplete}`);
        }

        const rowSelectMenu = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("selectMenuExample")
                .setPlaceholder("No value selected")
                .addOptions([
                    {
                        label: "First choice",
                        description: "First choice description",
                        value: "choice_1",
                    },
                    {
                        label: "Second choice",
                        description: "Second choice description",
                        value: "choice_2",
                    },
                ]),
        );
        const rowButtons = new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setCustomId("buttonExample")
                .setLabel("Example Button")
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId("modalExample")
                .setLabel("Example Modal")
                .setStyle(ButtonStyle.Danger),
        );

        return ephemeralFollowUpResponse(interaction, { content: "Example components", components: [rowSelectMenu, rowButtons] });
    }
} as CommandStructure;