import { type EnvironmentConfiguration } from "@stelliajs/framework";

export interface CustomEnvironment extends EnvironmentConfiguration {
    hello: string;
}