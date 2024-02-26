export default class RoundResultConsumer {
    /**
     * @param {GameDefinition} definition
     * @param {GameData} gameData
     * @param {RoundResultPublisher} roundResultPublisher
     * @param {mongoose.Model} resultsRepository
     */
    constructor(gameData: GameData, definition: GameDefinition, roundResultPublisher: RoundResultPublisher, resultsRepository: any);
    gameData: GameData;
    definition: GameDefinition;
    roundResultPublisher: RoundResultPublisher;
    resultsRepository: any;
    generateServerSeedAndPublishHash(): Promise<void>;
    generateResult(): any;
    createResultRecord(serverSeed: string, serverSeedHash: string): Promise<void>;
    getNewDate(): Date;
    generateFinalSeeds(pf: ProvablyFair): ProvablyFair;
}

import GameDefinition from "./../game-definition";
import GameData from "./../game-data";
import { RoundResultPublisher } from "./../event-publishers";
import { ProvablyFair } from "./../game-data";
