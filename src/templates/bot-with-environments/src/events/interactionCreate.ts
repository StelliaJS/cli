import { type StelliaClient, type EventStructure } from "@stelliajs/framework";
import { Events, type Interaction } from "discord.js";

export default {
    data: {
        name: Events.InteractionCreate,
        once: false
    },
    async execute(client: StelliaClient<true>, interaction: Interaction) {
        if (interaction.inCachedGuild()) {
            await client.handleInteraction(interaction);
        }
    }
} as EventStructure;
