import {
    type ContextMenuStructure,
    ephemeralFollowUpResponse,
    StelliaClient
} from "@stelliajs/framework";
import { ApplicationCommandType, type MessageContextMenuCommandInteraction } from "discord.js";
import { type CustomGuildConfiguration } from "@environments/environment.model.js";

export default {
    data: {
        name: "exampleMessageContextMenu",
        type: ApplicationCommandType.Message
    },
    async execute(client: StelliaClient<true>, guildConfiguration: CustomGuildConfiguration, interaction: MessageContextMenuCommandInteraction<"cached">) {
        await ephemeralFollowUpResponse(interaction, "Message context menu interaction");
    }
} satisfies ContextMenuStructure;