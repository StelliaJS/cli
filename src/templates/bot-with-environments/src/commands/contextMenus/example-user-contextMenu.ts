import { type ContextMenuStructure, ephemeralFollowUpResponse, type StelliaClient } from "@stelliajs/framework";
import { ApplicationCommandType, type UserContextMenuCommandInteraction } from "discord.js";
import { type CustomGuildConfiguration } from "@environments/environment.model.js";

export default {
    data: {
        name: "exampleUserContextMenu",
        type: ApplicationCommandType.User,
    },
    async execute(client: StelliaClient<true>, guildConfiguration: CustomGuildConfiguration, interaction: UserContextMenuCommandInteraction<"cached">) {
        await ephemeralFollowUpResponse(interaction, "User context menu interaction");
    }
} satisfies ContextMenuStructure;