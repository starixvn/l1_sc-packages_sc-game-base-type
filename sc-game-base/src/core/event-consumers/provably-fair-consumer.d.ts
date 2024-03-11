export default class ProvablyFairConsumer {
    /**
     * @param {GameDefinition} definition
     * @param {GameData} gameData
     * @param {mongoose.Model} betsRepository
     * @param {mongoose.Model} tempBetsRepository
     */
    constructor(gameData: GameData, betsRepository: mongoose.Model, tempBetsRepository: mongoose.Model);
    ClientSeedRange: {
        min: number;
        max: number;
    };
    bets: any[];
    gameData: GameData;
    betsRepository: mongoose.Model;
    tempBetsRepository: mongoose.Model;
    addClientSeed({ name, clientSeed }: { name: string; clientSeed: string }): void;
    setServerSeed(serverSeed: string): void;
    setServerSeedHash(serverSeedHash: string): void;
    reset(): void;
    updateClientSeedFromDatabase(): Promise<void>;
    updateClientSeeds(clientSeeds: string): void;
    sortByTime(bets: any): any[];
    getAllBets(roundId: any): Promise<any>;
}

import GameData from "./../game-data";
