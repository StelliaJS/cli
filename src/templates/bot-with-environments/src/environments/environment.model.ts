import {
    type BaseGeneralConfiguration,
    type BaseGuildConfiguration,
    type GuildConfiguration,
    type GuildsConfiguration
} from "@stelliajs/framework";
import { type Snowflake } from "discord.js";

interface CustomGeneralConfiguration extends BaseGeneralConfiguration {
    prefix: string;
}
interface CustomSpecificGuildConfiguration extends BaseGuildConfiguration {
    voiceChannelId: Snowflake;
}
export interface CustomGuildConfiguration extends GuildConfiguration {
    general: CustomGeneralConfiguration;
    guild: CustomSpecificGuildConfiguration;
}
export interface CustomGuildsConfiguration extends GuildsConfiguration {
    general: CustomGeneralConfiguration;
    guilds: {
        [guildId: string]: CustomSpecificGuildConfiguration;
    };
}