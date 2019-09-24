import { LoggerService } from "./controller";

export interface Service {
    ip: string;
    port: number;
    proto: string;
}

export abstract class ServiceFactory {
    abstract get(name: string): LoggerService;
    abstract set(name: string, config: Service): void;
}
