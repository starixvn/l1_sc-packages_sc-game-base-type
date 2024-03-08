export default class GameData {
    constructor(remainingTime: any);
    remainingTime: any;
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
    umMessages: any;
    exchangeRates: any;
    currencyGroupGames: any[];
    currencies: any[];
    currencyGroups: any[];
    partnerGameSiteExclusions: any[];
    resultHash: any;
    winningPlayers: any;
    lastResultRecord?: any;
}

class GameConfigs {
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
}

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
