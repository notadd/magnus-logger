import { LoggerLevel, Logger } from "./logger";

/**
 * logger控制器，提供grpc服务，每台微服务对外提供日志
 */
export abstract class LoggerService {
    abstract getOneLogger(requestId: string, hash: string): Promise<Logger>;
    abstract getAllLogger(requestId: string, level: LoggerLevel): Promise<Logger[]>;
}
