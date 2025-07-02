declare const sentryLogger: {
    start: ({
        sentryUrl = "",
        env = "",
        sentryRelease = "",
        logIdentifier = "",
    }: {
        sentryUrl: string;
        env: string;
        sentryRelease: string;
        logIdentifier: string;
    }) => void;
    log: (message: any, level?: string) => void;
    logWarning: (message) => void;
    logCritical: (message) => void;
    logError: (message) => void;
    composeBeforeCallMessage: (session, params) => void;
    logAfterSendToApi: (action, params, result, beforeMessage, logLevel, enabledApiLog) => void;
    setTag: (tag) => void;
};

export default sentryLogger;
