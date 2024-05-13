export namespace normalUser {
    let playerId: number;
    let playerName: string;
}
export namespace errorUser {
    let playerId: number;
    let playerName: string;
}
export namespace internalServerErrorUser {
    let playerId: number;
    let playerName: string;
}
export namespace endGameErrorUser {
    let playerId: number;
    let playerName: string;
}
export namespace botUser1 {
    let playerId: number;
    let playerName: string;
}
export namespace botUser2 {
    let playerId: number;
    let playerName: string;
}
export namespace botUser3 {
    let playerId: number;
    let playerName: string;
}
export namespace botUser4 {
    let playerId: number;
    let playerName: string;
}
export namespace botUser5 {
    let playerId: number;
    let playerName: string;
}
export namespace botUser6 {
    let playerId: number;
    let playerName: string;
}

export function createDummyUsers(currency: any): Promise<void>;
export function createDummyUser(
    playerId: any,
    playerName: any,
    currency: any,
    isBot?: boolean
): Promise<{
    user: any;
    userInfo: any;
    userSession: any;
}>;
