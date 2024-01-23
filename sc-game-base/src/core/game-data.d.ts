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

export class GameConfigs {
    bot_maxbet: number;
    bot_minbet: number;
    botenabled: boolean;
    choices_maxbet: { [choice: string]: number };
    delayStartTime: number;
    enableFreeBet: boolean;
    enabled: boolean;
    hour_maxbot: number[];
    maxbet: number;
    maxbot: number;
    minbet: number;
    odds: { [name: string]: number };
    randomMode: number;
}
