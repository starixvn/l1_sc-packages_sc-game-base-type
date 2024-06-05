export default class GameDefinition {
    constructor(
        {
            id,
            name,
            durations,
            choices,
            choicesMapper,
            hedgeBetGroups,
            numberOfRoundHistory,
            historyPageSize,
            provablyFair,
        }: GameSettings,
        generateResult: Function,
        settle: Function,
        generateRawResultForHash: Function
    );
    id: number;
    name: string;
    configName: string;
    durations: Duration;
    choices: any[];
    choicesMapper: Object;
    numberOfRoundHistory: number;
    historyPageSize: number;
    generateResult: Function;
    settle: Function;
    generateRawResultForHash: Function;
    hedgeBetGroups: string[][];
    provablyFair: boolean;
}

type Duration = {
    wholeRound: number;
    placingBets: number;
    lockingBet: number;
};

export type TableGameSettings = GameSettings & {
    botSettings?: BotSettings;
};

export type GameSettings = {
    id: number;
    name: string;
    durations: Duration;
    choices: any[];
    choicesMapper: Object;
    hedgeBetGroups: string[][];
    numberOfRoundHistory?: number;
    historyPageSize?: number;
    provablyFair?: boolean;
};

export type BotSettings = {
    ratio: {
        [key: string]: number;
    };
    [key: string]: string[] | { [key: string]: number };
};
