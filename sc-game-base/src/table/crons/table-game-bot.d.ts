export default class TableGameBot extends BaseBot {
  /**
   * @param {TableGameDefinition} definition
   * @param {TableGameData} gameData
   * @param {BaseEventPublisher} publisher
   * @param {GameManagementApiClientFactory} gameManagementApiClientFactory
   * @param {mongoose.Model} tempBetsRepository
   */
  constructor(
    definition: TableGameDefinition,
    gameData: TableGameData,
    publisher: BaseEventPublisher,
    gameManagementApiClientFactory: GameManagementApiClientFactory,
    tempBetsRepository: mongoose.Model
  );
  publisher: BaseEventPublisher;
  tempBetsRepository: mongoose.Model;
  inOutValues: {
    in: number;
    out: number;
  };
  removeBotAtTheTable: boolean;
  removeBotAtTheTableRoundFrequency: number;
  minBotsAtTheTable: number;
  botsInRoom: {};
  removeBots(botIds: string[]): Promise<void>;
  removeBotsIfRatioChanged(totalRemoved: number): Promise<void>;
  shouldAddBot(random: number): boolean;
  shouldRemoveBot(random: number): boolean;
  getBotsToBet(): any[];
  getTicketsPerRound(): any;
  joinRoom(): Promise<void>;
  getNumberOfBotsToJoin(): any;
  botJoinRoom(bot: any): void;
  addToPlayersAndPublish(bot: any): void;
  resetInRoomTrackings(): Promise<void>;
  leaveRoom(): Promise<void>;
  getRemovalBotIds(totalRemoval: number): any;
  placeBets(botsToBet: any): Promise<void>;
  calculateBet(bot: any): Promise<any>;
  convertAmountToChip(amount: number): any;
  updateBalanceAndPublishBetPayload(
    botId: string,
    choice: string,
    amount: number,
    balance: number
  ): void;
  updateTotalBetsAndChips(choice: string, amount: number): void;
  updateBotInRoomData(
    bot: any,
    choice: string,
    amount: number,
    balance: number
  ): void;
  insertOrUpdateBet(
    bot: any,
    choice: string,
    amount: number,
    currentBet: any
  ): Promise<any>;
  generatePlaceBetPayload(
    playerId: string,
    choice: string,
    amount: number,
    balance: number
  ): any;
  isDuringBetTime(): boolean;
  generateClientSeed(): string;
}
import GameManagementApiClientFactory from "../../core/game-management-api";
import BaseBot from "./../../core/crons/base-bot";
import { BaseEventPublisher } from "./../../core/event-publishers";
import TableGameData from "./../table-game-data";
import TableGameDefinition from "./../table-game-definition";
