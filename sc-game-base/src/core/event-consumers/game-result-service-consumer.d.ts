export default class GameResultServiceConsumer {
  /**
   * @param {GameDefinition} definition
   * @param {Object} appConfigs
   */
  constructor({
    definition,
    appConfigs,
  }: {
    definition: GameDefinition;
    appConfigs: object;
  });
  definition: GameDefinition;
  appConfigs: object;
  getUrl({
    playerId,
    operatorId,
    siteId,
    roundId,
    mode,
    timeZoneOffset,
    language,
  }: {
    playerId: string;
    operatorId: string;
    siteId: string;
    roundId: number;
    mode: any;
    timeZoneOffset: string;
    language: string;
  }): Promise<string>;
}
import GameDefinition from "./../game-definition";
