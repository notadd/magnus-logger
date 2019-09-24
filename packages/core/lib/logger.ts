export type LoggerLevel = 'warning' | 'info' | 'error'
export abstract class Logger {
    readonly requestId: string;
    readonly pre?: string;
    readonly serviceName: string;
    hash: string;
    private params: any;
    private result: any;
    private level: LoggerLevel;
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
    setLevel(level: LoggerLevel) {
        this.level = level;
    }
    /**
     * 保存
     */
    abstract save(): Promise<void>;
}
export abstract class LoggerFactory {
    constructor(public readonly name: string) { }
    /**
     * 获取链中的最后一个logger
     * @param loggerHash 
     */
    abstract getLogger(loggerHash: string): Promise<Logger>;
    /**
     * 获取一个请求的所有logger
     * @param requestId 
     */
    abstract getLoggers(requestId: string, level: LoggerLevel): Promise<Logger[]>;
    /**
     * 创建logger
     * @param requestId 
     */
    abstract create(requestId: string): Promise<Logger>;
}
