import { type StelliaClient, type EventStructure } from "@stelliajs/framework";
import { Events, type Interaction } from "discord.js";
import { type CustomEnvironment } from "@environments/environment.model.js";

export default {
    data: {
        name: Events.InteractionCreate,
        once: false
    },
    async execute(client: StelliaClient<true>, environment: CustomEnvironment, interaction: Interaction) {
        if (interaction.inCachedGuild()) {
            await client.handleInteraction(interaction);
        }
    }
} satisfies EventStructure;
