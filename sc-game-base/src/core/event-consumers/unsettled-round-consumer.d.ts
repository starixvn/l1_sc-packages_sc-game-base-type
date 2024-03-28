export default class UnsettledRoundConsumer {
  constructor({
    gameData,
    definition,
    betsRepository,
    betLogsRepository,
    tempBetsRepository,
    settleGameRoundConsumer,
    roundResultConsumer,
    provablyFairConsumer,
    gameManagementApiClientFactory,
  }: {
    gameData: GameData;
    definition: GameDefinition;
    betsRepository: any;
    betLogsRepository: any;
    tempBetsRepository: any;
    settleGameRoundConsumer: SettleGameRoundConsumer;
    roundResultConsumer: RoundResultConsumer;
    provablyFairConsumer: ProvablyFairConsumer;
    gameManagementApiClientFactory: GameManagementApiClientFactory;
  });
  gameData: GameData;
  definition: GameDefinition;
  betsRepository: any;
  betLogsRepository: any;
  tempBetsRepository: any;
  settleGameRoundConsumer: SettleGameRoundConsumer;
  roundResultConsumer: RoundResultConsumer;
  provablyFairConsumer: ProvablyFairConsumer;
  gameManagementApiClient: import("sc-game-management-client").gameManagementClient;
  proceed(): Promise<void>;
  loadGameConfigs(): Promise<void>;
  proceedUnsettledBets(unsettledBets: any): Promise<void>;
  generateResult(unsettledBets: any): Promise<void>;
  getUnsettledBets(): Promise<any>;
}

import GameData from "./../game-data";
import GameDefinition from "./../game-definition";
import SettleGameRoundConsumer from "./settle-game-round-consumer";
import RoundResultConsumer from "./round-result-consumer";
import ProvablyFairConsumer from "./provably-fair-consumer";
import GameManagementApiClientFactory from "../game-management-api";
