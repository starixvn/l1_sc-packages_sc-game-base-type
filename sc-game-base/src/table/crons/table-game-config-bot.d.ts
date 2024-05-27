export default class TableGameConfigBot extends TableGameBot {
    /**
     * @param {TableGameDefinition} definition
     * @param {TableGameData} gameData
     * @param {BaseEventPublisher} publisher
     * @param {GameManagementApiClientFactory} mongoose
     * @param {mongoose.Model} tempBetsRepository
     */
    constructor(
        definition: TableGameDefinition,
        gameData: TableGameData,
        publisher: BaseEventPublisher,
        gameManagementApiClientFactory: GameManagementApiClientFactory,
        tempBetsRepository: mongoose.Model
    );
    hedgeBetGroups: string[][];
    betOptions: string[];
    smallTicketRatio: number;
    smallTickets: number;
    allBets: Record<string, number>;
    botChips: number[];
    botSettings: BotSettings;
    getBetChoicesRatios(): {
        group: string[];
        underBetRatio: boolean;
    }[];
    getAllBetAmountOnChoices(choices: string[]): number;
}
import { BaseEventPublisher } from "../../core/event-publishers";
import { BotSettings } from "../../core/game-definition";
import GameManagementApiClientFactory from "../../core/game-management-api";
import TableGameData from "../table-game-data";
import TableGameDefinition from "../table-game-definition";
import TableGameBot from "./table-game-bot";

