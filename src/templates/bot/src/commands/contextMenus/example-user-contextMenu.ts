import { type ContextMenuStructure, ephemeralFollowUpResponse, type StelliaClient } from "@stelliajs/framework";
import { ApplicationCommandType, type UserContextMenuCommandInteraction } from "discord.js";

export default {
    data: {
        name: "exampleUserContextMenu",
        type: ApplicationCommandType.User,
    },
    async execute(client: StelliaClient<true>, interaction: UserContextMenuCommandInteraction<"cached">) {
        await ephemeralFollowUpResponse(interaction, "User context menu interaction");
    }
} as ContextMenuStructure;