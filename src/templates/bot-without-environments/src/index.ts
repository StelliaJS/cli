import { StelliaClient } from "@stelliajs/framework";
import { GatewayIntentBits } from "discord-api-types/v10";
import { Partials } from "discord.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const client = new StelliaClient({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ],
    partials: [Partials.Message, Partials.GuildMember]
}, {
    managers: {
        autoCompletes: {
            directoryPath: "./interactions/autoCompletes"
        },
        buttons: {
            directoryPath: "./interactions/buttons"
        },
        commands: {
            directoryPath: "./commands/slash"
        },
        contextMenus: {
            directoryPath: "./commands/contextMenus"
        },
        events: {
            directoryPath: "./events"
        },
        modals: {
            directoryPath: "./interactions/modals"
        },
        selectMenus: {
            directoryPath: "./interactions/selectMenus"
        }
    },
    environment: {
        isEnvironmentsEnabled: false
    }
});

await client.connect(process.env.TOKEN);