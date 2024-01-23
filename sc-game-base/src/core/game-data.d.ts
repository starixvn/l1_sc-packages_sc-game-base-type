export default class GameData {
    constructor(remainingTime: any);
    remainingTime: any;
    totalBets: {};
    roundId: number;
    delayStartTime: number;
    disabled: boolean;
    gameConfigs: GameConfigs;
    realPlayers: {};
    ingame: { [name: string]: any };
    admins: {};
    settlementResultFromAdmin: {};
    umMessages: {};
    exchangeRates: {};
    currencyGroupGames: any[];
    currencies: any[];
    currencyGroups: any[];
    partnerGameSiteExclusions: any[];
    resultHash: {};
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
}
