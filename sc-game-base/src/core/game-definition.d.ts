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
        }: {
            id?: number;
            name?: string;
            durations?: {};
            choices?: any[];
            choicesMapper?: {};
            hedgeBetGroups?: any[];
            numberOfRoundHistory?: number;
            historyPageSize?: number;
        },
        generateResult: any,
        settle: any,
        generateRawResultForHash: any
    );
    id: number;
    name: string;
    configName: string;
    durations: Duration;
    choices: any[];
    choicesMapper: {};
    numberOfRoundHistory: number;
    historyPageSize: number;
    generateResult: any;
    settle: any;
    generateRawResultForHash: any;
    hedgeBetGroups: any[];
}

class Duration {
    wholeRound: number;
    placingBets: number;
    lockingBet: number;
    showingResult: number;
}
