export default class TableGameDefinition extends GameDefinition {
    constructor(
        gameSettings: TableGameSettings,
        generateResult: Function,
        settle: Function,
        generateRawResultForHash: Function
    );
}
import GameDefinition, { TableGameSettings } from "./../core/game-definition";

