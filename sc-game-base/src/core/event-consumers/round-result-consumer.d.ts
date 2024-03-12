export default class RoundResultConsumer {
    /**
     * @param {GameDefinition} definition
     * @param {GameData} gameData
     * @param {RoundResultPublisher} roundResultPublisher
     * @param {mongoose.Model} resultsRepository
     * @param {ProvablyFairConsumer} dependencies.provablyFairConsumer
     */
    constructor(
        gameData: GameData,
        definition: GameDefinition,
        roundResultPublisher: RoundResultPublisher,
        resultsRepository: any,
        provablyFairConsumer: ProvablyFairConsumer
    );
    gameData: GameData;
    definition: GameDefinition;
    roundResultPublisher: RoundResultPublisher;
    resultsRepository: any;
    provablyFairConsumer: ProvablyFairConsumer;
    generateServerSeedAndPublishHash(): Promise<void>;
    generateResult(): Promise<void>;
    generateResultFromAdmin(): boolean;
    generateAndUpdatePfWithFinalSeeds(): Promise<void>;
    createResultRecord(serverSeed: string, serverSeedHash: string): Promise<void>;
    generateFinalSeeds(): ProvablyFair;
    getResultFilter(): any;
    generateServerSeed(): any;
}

import GameDefinition from "./../game-definition";
import GameData from "./../game-data";
import { RoundResultPublisher } from "./../event-publishers";
import { ProvablyFair } from "./../game-data";
import ProvablyFairConsumer from "./provably-fair-consumer";
