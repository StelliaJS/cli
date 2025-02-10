import { type ContextMenuStructure, ephemeralFollowUpResponse, StelliaClient } from "@stelliajs/framework";
import { ApplicationCommandType, type MessageContextMenuCommandInteraction } from "discord.js";

export default {
    data: {
        name: "exampleMessageContextMenu",
        type: ApplicationCommandType.Message,
    },
    async execute(client: StelliaClient<true>, interaction: MessageContextMenuCommandInteraction<"cached">) {
        await ephemeralFollowUpResponse(interaction, "Message context menu interaction");
    }
} as ContextMenuStructure;