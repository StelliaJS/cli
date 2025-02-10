import { type ApplicationCommandOptionChoiceData, type AutocompleteInteraction } from "discord.js";
import { type AutoCompleteStructure, type StelliaClient } from "@stelliajs/framework";

export default {
    data: {
        name: "example-command",
        once: false,
    },
    async execute(client: StelliaClient<true>, interaction: AutocompleteInteraction<"cached">) {
        const commandsOptions: ApplicationCommandOptionChoiceData[] = [
            { name: "Test_1", value: "Test_1" },
            { name: "Test_2", value: "Test_2" },
            { name: "Test_3", value: "Test_3" }
        ];

        await interaction.respond(commandsOptions);
    }
} as AutoCompleteStructure;