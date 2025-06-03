import { type StelliaClient, type EventStructure, type GuildsConfiguration, logger } from "@stelliajs/framework";
import { Events } from "discord.js";

export default {
    data: {
        name: Events.ClientReady,
        once: true
    },
    async execute(client: StelliaClient<true>, guildsConfiguration: GuildsConfiguration) {
        logger.info(`Client ready and logged in as ${client.user.tag}`);
        await client.initializeCommands();
    }
} satisfies EventStructure;