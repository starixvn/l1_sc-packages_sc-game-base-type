export default class ProvablyFairConsumer {
    /**
     * @param {GameDefinition} definition
     * @param {GameData} gameData
     * @param {mongoose.Model} betsRepository
     * @param {mongoose.Model} tempBetsRepository
     */
    constructor(
        gameData: GameData,
        betsRepository: mongoose.Model,
        tempBetsRepository: mongoose.Model,
        maxCombinedClientSeeds: number
    );
    ClientSeedRange: {
        min: number;
        max: number;
    };
    bets: any[];
    gameData: GameData;
    betsRepository: mongoose.Model;
    tempBetsRepository: mongoose.Model;
    setServerSeed(serverSeed: string): void;
    setServerSeedHash(serverSeedHash: string): void;
    setClientSeeds(clientSeeds: any): void;
    setClientSeedsFromBets(bets: any[]): void;
    reset(): void;
    updateClientSeedsFromBets(): Promise<void>;
    sortByTime(bets: any): any[];
    getBetsFromDatabase(): Promise<any>;
    getBetFilter(): { roundId: number };
}

import mongoose from "mongoose";

import GameData from "./../game-data";

