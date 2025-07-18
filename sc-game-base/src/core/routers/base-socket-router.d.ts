export default class BaseSocketRouter {
  /**
   * @param {Object} dependencies
   * @param {GameDefinition} dependencies.definition
   * @param {GameData} dependencies.gameData
   * @param {UserSignInConsumer} dependencies.userSignInConsumer
   * @param {InGameConsumer} dependencies.inGameConsumer
   * @param {PlaceBetConsumer} dependencies.placeBetConsumer
   * @param {UserDisconnectConsumer} dependencies.userDisconnectConsumer
   * @param {UserSignInPublisher} dependencies.userSignInPublisher
   * @param {HistoryQuery} dependencies.historyQuery
   * @param {logger} dependencies.logService
   * @param {PlayGamePermissionValidator} dependencies.playGamePermissionValidator
   */
  constructor({
    definition,
    gameData,
    userSignInConsumer,
    inGameConsumer,
    placeBetConsumer,
    userDisconnectConsumer,
    userSignInPublisher,
    historyQuery,
    logService,
    playGamePermissionValidator,
    roundQuery,
    gameResultServiceConsumer,
  }: {
    definition: GameDefinition;
    gameData: GameData;
    userSignInConsumer: UserSignInConsumer;
    inGameConsumer: InGameConsumer;
    placeBetConsumer: PlaceBetConsumer;
    userDisconnectConsumer: UserDisconnectConsumer;
    userSignInPublisher: UserSignInPublisher;
    historyQuery: HistoryQuery;
    logService: logger;
    playGamePermissionValidator: PlayGamePermissionValidator;
    roundQuery: RoundQuery;
    gameResultServiceConsumer: GameResultServiceConsumer;
  });
  forbiddenCode: number;
  waringCodes: number[];
  definition: GameDefinition;
  gameData: GameData;
  userSignInConsumer: UserSignInConsumer;
  inGameConsumer: InGameConsumer;
  placeBetConsumer: PlaceBetConsumer;
  userDisconnectConsumer: UserDisconnectConsumer;
  userSignInPublisher: UserSignInPublisher;
  historyQuery: HistoryQuery;
  logService: logger;
  playGamePermissionValidator: PlayGamePermissionValidator;
  roundQuery: RoundQuery;
  gameResultServiceConsumer: GameResultServiceConsumer;
  /**
   * @param {Socket} socketClient
   */
  init(socketClient: Socket): void;
  socketClient: Socket<
    import("socket.io/dist/typed-events").DefaultEventsMap,
    import("socket.io/dist/typed-events").DefaultEventsMap,
    import("socket.io/dist/typed-events").DefaultEventsMap,
    any
  >;
  handlePlaceBet(payload: any): void;
  handleSignIn(payload: any): Promise<void>;
  handleInGame(): Promise<void>;
  handleGetHistory(payload: any): Promise<void>;
  handleDisconnect(): void;
  handleGetRoundPF(payload: any): Promise<void>;
  handleBetDetails(payload: any): Promise<void>;
  verify(payload?: any): boolean;
  handleError(payload: any, e: any): void;
}
import {
  GameResultServiceConsumer,
  UserSignInConsumer,
} from "./../event-consumers";
import { InGameConsumer } from "./../event-consumers";
import { PlaceBetConsumer } from "./../event-consumers";
import { UserDisconnectConsumer } from "./../event-consumers";
import { UserSignInPublisher } from "./../event-publishers";
import { HistoryQuery, RoundQuery } from "./../query-apis";
import { PlayGamePermissionValidator } from "../validators";
import { Socket } from "socket.io";
