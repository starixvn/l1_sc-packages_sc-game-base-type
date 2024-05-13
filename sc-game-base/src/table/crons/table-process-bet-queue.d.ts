export default class TableProcessBetQueue extends ProcessBetQueue {
    updateGameDataChips(bet: any, rate: number): void;
    gameData: TableGameData;
}
import ProcessBetQueue from "./../../core/crons/process-bet-queue";
import TableGameData from "../table-game-data";
