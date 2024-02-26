export default class ProvablyFairConsumer {
    constructor(gameData: GameData, maxCombinedClientSeeds: number);
    MaxCombinedClientSeeds: number;
    ClientSeedRange: {
        min: number;
        max: number;
    };
    bets: any[];
    gameData: GameData;
    addClientSeed({ name, clientSeed }: { name: string; clientSeed: string }): void;
    setServerSeed(serverSeed: string): void;
    setServerSeedHash(serverSeedHash: string): void;
    reset(): void;
    addBets(...bets: any[]): void;
    updateClientSeedFromBets(): void;
    updateClientSeeds(clientSeeds: string): void;
}

import GameData from "./../game-data";
