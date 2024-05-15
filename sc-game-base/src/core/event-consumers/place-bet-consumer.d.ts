export default class PlaceBetConsumer {
    /**
     * @param {GameDefinition} definition
     * @param {GameData} gameData
     * @param {BaseEventPublisher} publisher
     */
    constructor(
        definition: GameDefinition,
        gameData: GameData,
        publisher: BaseEventPublisher
    );
    DisplayMode: {
        Landscape: string;
        Portrait: string;
    };
    definition: GameDefinition;
    gameData: GameData;
    publisher: BaseEventPublisher;
    composeValidationCriteria(
        player: any,
        betChoice: string,
        amount: number,
        freeBet: boolean,
        roundId: number
    ): {
        failure: boolean;
        notice: string;
    }[];
    composeBettingTimeValidationCriteria(roundId: number): {
        failure: boolean;
        notice: string;
    }[];
    composeBetAmountValidationCriteria(
        player: any,
        betChoice: string,
        amount: number,
        freeBet: boolean
    ): {
        failure: boolean;
        notice: string;
    }[];
    getNoticeObj(errorCode: string, extraData?: any): any;
    composeBetChoiceValidationCriteria(betChoice: string): {
        failure: boolean;
        notice: string;
    }[];
    composeHedgeBetValidationCriteria(
        betChoice: string,
        player: any
    ): {
        failure: boolean;
        notice: string;
    }[];
    validateBetRequest(
        player: any,
        betChoice: string,
        amount: number,
        freeBet: boolean,
        roundId: number
    ): boolean;
    validateBetRequestParams(request: any): {
        failure: boolean;
        notice: string;
    }[];
    validateClientSeed(request: any): {
        failure: boolean;
        notice: string;
    }[];
    composeRequestParamsValidationCriteria(request: any): {
        failure: boolean;
        notice: string;
    }[];
    validateRequestParams(request: any, player: any): boolean;
    verifyCriteria(criteria: any, player: any, betChoice: string): boolean;
    consume(player: any, payload: any): void;
    adjustBetTracks(playerName: string, bet: any): void;
}
import { BaseEventPublisher } from "./../event-publishers";
import GameData from "./../game-data";
import GameDefinition from "./../game-definition";

