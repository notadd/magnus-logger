export class LoggerRequest {
    readonly headers: any;
    readonly host: string;
    constructor(headers: any, host: string) {
        this.headers = headers;
        this.host = host;
    }
    async getRequestId(): Promise<string> {
        return ``
    }
}
export class LoggerRequestFactory {
    static create(headers: any, host: string): LoggerRequest {
        return new LoggerRequest(headers, host)
    }
}
