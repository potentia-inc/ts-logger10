import pino, { Level } from 'pino';
export { Level } from 'pino';
type Transport = {
    type: 'gchat';
    link: string;
    level: Level;
};
type Options = {
    name: string;
    level?: Level;
    transports?: Transport[];
};
export declare function createLogger(options: Options): pino.Logger<never, boolean>;
