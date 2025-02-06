import { type ContextMenuStructure, ephemeralFollowUpResponse, StelliaClient } from "@stelliajs/framework";
import { ApplicationCommandType, type MessageContextMenuCommandInteraction } from "discord.js";
import { type CustomEnvironment } from "@environments/environment.model.js";

export default {
    data: {
        name: "exampleMessageContextMenu",
        type: ApplicationCommandType.Message,
    },
    async execute(client: StelliaClient<true>, environment: CustomEnvironment, interaction: MessageContextMenuCommandInteraction<"cached">) {
        console.log(true)
        await ephemeralFollowUpResponse(interaction, "Message context menu interaction");
    }
} as ContextMenuStructure;