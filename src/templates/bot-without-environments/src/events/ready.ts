import { type StelliaClient, type EventStructure } from "@stelliajs/framework";
import { Events } from "discord.js";

export default {
    data: {
        name: Events.ClientReady,
        once: true
    },
    async execute(client: StelliaClient<true>) {
        console.log(`Logged in as ${client.user.tag}`);
        await client.initializeCommands();
    }
} as EventStructure;