export class Logger {
    readonly requestId: string;
    readonly pre?: string;
    readonly serviceName: string;
    hash: string;
    private params: any;
    private result: any;
    private level: 'warning' | 'info' | 'error';
    constructor(requestId: string, serviceName: string, pre?: string) {
        this.requestId = requestId;
        this.pre = pre;
        this.serviceName = serviceName;
    }
    setResult(params: any) {
        this.params = params;
    }
    setParams(result: any) {
        this.result = result;
    }
    async save(): Promise<void> { }
}
export abstract class LoggerFactory {
    constructor(public name: string) { }
    abstract getPreLoggerHash(requestId: string): string;
    create(requestId: string): Logger {
        const pre = this.getPreLoggerHash(requestId);
        return new Logger(requestId, this.name, pre);
    }
}