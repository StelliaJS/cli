import { type CustomGuildsConfiguration } from "@environments/environment.model.js";

export const environment = {
    general: {
        prefix: "!",
    },
    guilds: {
        "1034237685168091278": {
            voiceChannelId: "erez",
            locale: "en",
        }
    }
} satisfies CustomGuildsConfiguration;