export function terminate(options?: {
    coredump: boolean;
    timeout: number;
}): (server: any, code: any, reason: any) => (err: any, promise: any) => void;
export function exitHandler(server: any, code: any, reason: any): (err: any, promise: any) => void;
export function handle(server: any, process: any): void;
