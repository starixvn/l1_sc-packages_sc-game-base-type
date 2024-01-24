import GameData from "../game-data";
import GameDefinition from "../game-definition";

export default class RoundIdConsumer {
    /**
     *
     * @param {Object} dependencies
     * @param {GameDefinition} dependencies.definition
     * @param {GameData} dependencies.gameData
     * @param {mongoose.Model} dependencies.roundsRepository
     * @param {GameManagementApiClientFactory} dependencies.gameManagementApiClientFactory
     */
    constructor(gameData: any, definition: any, roundsRepository: any, gameManagementApiClientFactory: any);
    gameData: GameData;
    definition: GameDefinition;
    roundsRepository: any;
    gameManagementApiClient: any;
    initRoundId(): Promise<void>;
    getLastArchiveRound(): Promise<any>;
}
