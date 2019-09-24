export class LoggerRequest {
    readonly headers: any;
    readonly host: string;
    private result: any;
    get isFinish(): boolean {
        return !!this.result;
    }
    constructor(headers: any, host: string) {
        this.headers = headers;
        this.host = host;
    }
    async getRequestId(): Promise<string> {
        return ``
    }
    setResult(result: any) {
        this.result = result;
    }
}
export class LoggerRequestFactory {
    static create(headers: any, host: string): LoggerRequest {
        return new LoggerRequest(headers, host)
    }
}
