export default class RoundResultConsumer {
    /**
     * @param {GameDefinition} definition
     * @param {GameData} gameData
     * @param {RoundResultPublisher} roundResultPublisher
     * @param {mongoose.Model} resultsRepository
     */
    constructor(gameData: any, definition: any, roundResultPublisher: any, resultsRepository: any);
    gameData: GameData;
    definition: GameDefinition;
    roundResultPublisher: RoundResultPublisher;
    resultsRepository: any;
    generateResultAndPublishHash(lastResultRecord: any): Promise<void>;
    generateResult(): any;
    buildResultHash(): {
        roundId: any;
        hashValue: any;
        rawValue: string;
    };
    createResultRecord(): Promise<void>;
    getNewDate(): Date;
}

import GameDefinition from "./../game-definition";
import GameData from "./../game-data";
import { RoundResultPublisher } from "./../event-publishers";
