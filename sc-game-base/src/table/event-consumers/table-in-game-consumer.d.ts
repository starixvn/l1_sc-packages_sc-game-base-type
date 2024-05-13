export default class TableInGameConsumer extends InGameConsumer {
    buildPayload(realPlayer: any): Promise<any>;
    buildPlayersPayload(realPlayer: any): any;
    gameData: TableGameData;
}
import InGameConsumer from "../../../src/core/event-consumers/in-game-consumer";
import TableGameData from "../table-game-data";
