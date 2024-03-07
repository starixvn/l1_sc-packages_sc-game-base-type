export namespace eventTypes {
    let signedIn: string;
    let connect: string;
    let signIn: string;
    let reconnect: string;
    let connectFailed: string;
    let connectError: string;
    let disconnect: string;
    let bet: string;
    let getHistory: string;
    let inGame: string;
    let message: string;
    let forceDisconnect: string;
    let getGameConfigs: string;
    let getStatistics: string;
}
export class GameClientDriver {
    constructor(socketOptions: any, userSession: any);
    socket: any;
    gameName: any;
    onConnectFailed: any;
    userSession: any;
    getSocketClient(): any;
    close(): void;
    handleSignedInEvent(): Promise<any>;
    handleGameEvent(completeCondition: any): Promise<any>;
    on(eventName: any, eventHandler: any): void;
    off(eventName: any): void;
    once(eventName: any, eventHandler: any): void;
    removeListener(eventName: any, handler: any): void;
    waitForEvent(eventName: any, completeCondition: any): Promise<any>;
    sendSignInEvent(): void;
    sendInGameEvent(): void;
    sendGetHistoryEvent(page?: number): void;
    sendBetEvent(betChoice: any, amount: any): void;
    emit(eventName: any, ...args: any[]): void;
    registerEvents(): void;
    buildLog(event: any, message: any): string;
}
