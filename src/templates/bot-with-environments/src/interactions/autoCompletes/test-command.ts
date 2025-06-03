import { type ApplicationCommandOptionChoiceData, type AutocompleteInteraction } from "discord.js";
import { type AutoCompleteStructure, type StelliaClient } from "@stelliajs/framework";
import { type CustomGuildConfiguration } from "@environments/environment.model.js";

export default {
    data: {
        name: "example-command",
        once: false,
    },
    async execute(client: StelliaClient<true>, guildConfiguration: CustomGuildConfiguration, interaction: AutocompleteInteraction<"cached">) {
        const commandsOptions: ApplicationCommandOptionChoiceData[] = [
            { name: "Test_1", value: "Test_1" },
            { name: "Test_2", value: "Test_2" },
            { name: "Test_3", value: "Test_3" }
        ];

        await interaction.respond(commandsOptions);
    }
} satisfies AutoCompleteStructure;