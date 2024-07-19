import { type ButtonInteraction } from "discord.js";
import { type ButtonStructure, ephemeralFollowUpResponse, type StelliaClient } from "@stelliajs/framework";

export default {
    data: {
        name: "buttonExample",
        once: false,
    },
    async execute(client: StelliaClient<true>, interaction: ButtonInteraction<"cached">) {
        await ephemeralFollowUpResponse(interaction, "Button clicked");
    }
} as ButtonStructure;