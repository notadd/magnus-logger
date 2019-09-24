export abstract class LoggerRequest {
    readonly headers: any;
    readonly host: string;
    /**
     * 结果
     */
    private result: any;
    get isFinish(): boolean {
        return !!this.result;
    }
    constructor(headers: any, host: string) {
        this.headers = headers;
        this.host = host;
    }
    setResult(result: any) {
        this.result = result;
    }
    /**
     * 创建request id
     */
    abstract createRequestId(): Promise<string>;

}
export abstract class LoggerRequestFactory {
    /**
     * 根据requestId拿Request
     * @param requestId 
     */
    abstract getRequestById(requestId: string): LoggerRequest;
    /**
     * 创建request
     * @param headers 
     * @param host 
     */
    abstract create(headers: any, host: string): LoggerRequest;
}
