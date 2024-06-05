import {
    Currencies,
    CurrencyGroupGames,
    CurrencyGroups,
    ExchangeRates,
    OperatorConfig,
} from "sc-game-management-client";

export default class GameData {
    constructor(remainingTime: number);
    remainingTime: number;
    totalBets: any;
    roundId: number;
    pf: ProvablyFair;
    result: any;
    delayStartTime: number;
    disabled: boolean;
    gameConfigs: GameConfigs;
    realPlayers: any;
    ingame: { [name: string]: any };
    admins: any;
    settlementResultFromAdmin: any;
    umMessages: Notification;
    exchangeRates: ExchangeRates;
    currencyGroupGames: CurrencyGroupGames[];
    currencies: Currencies[];
    currencyGroups: CurrencyGroups[];
    partnerGameSiteExclusions: OperatorConfig[];
    resultHash: ResultHash;
    winningPlayers: Record<string, WinningStatus>;
    lastResultRecord?: any;
}

type GameConfigs = {
    bot_maxbet: number;
    bot_minbet: number;
    botenabled: boolean;
    choices_maxbet: Record<string, number>;
    delayStartTime: number;
    enableFreeBet: boolean;
    enabled: boolean;
    hour_maxbot: number[];
    maxbet: number;
    maxbot: number;
    minbet: number;
    odds: Record<string, number>;
    randomMode: number;
    name: string;
    disabledround: number;
    slotsConfig: Record<string, any>;
    siteExclusions: string[];
    smartBotEnabled: boolean;
    smartBotGroupRatio: number;
    exchangeReload: boolean;
    cascadingSlotsConfig: Record<string, any>;
    slotRNGConfig: Record<string, any>;
    gameId: number;
    displayName: string;
    type: number;
    boostedChoices: string[];
    originalOdds: Record<string, number>;
    margin: Record<string, number>[];
    maxWinPerRound: number;
};

export type ProvablyFair = {
    serverSeed: string;
    serverSeedHash: string;
    clientSeeds: ClientSeed[];
    mergeClientSeed: string;
    mergeSeed: string;
    finalHash: string;
};

export type ClientSeed = {
    name: string;
    clientSeed: string;
};

export type ProvablyFairConfig = {
    limitClientSeeds: boolean;
    maxCombinedClientSeeds: number;
};

export type Notification = {
    time: Date;
    message: string;
    displayKind: number;
    gameName: string;
    messages: object;
};

export type ResultHash = {
    rawValue?: string;
    extraInfos?: any;
    hashValue?: string;
};

export type WinningStatus = {
    rate: number;
    win: boolean;
    bet: number;
    winningByChoices: Record<string, number>;
};