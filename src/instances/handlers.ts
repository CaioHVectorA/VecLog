import Logger from "./constructor";

const debugLogger = new Logger("DEBUG", "🐞", "\x1b[36m", "Debug:");
const infoLogger = new Logger("INFO", "ℹ️", "\x1b[32m", "Info:");
const warningLogger = new Logger("WARNING", "⚠️", "\x1b[33m", "Warning:");
const errorLogger = new Logger("ERROR", "❌", "\x1b[31m", "Error:");
const fatalLogger = new Logger("FATAL", "💥", "\x1b[41m\x1b[37m", "Fatal Error:");

    export const debug = debugLogger.trigger;
    export const info = infoLogger.trigger;
    export const warning = warningLogger.trigger;
    export const error = errorLogger.trigger;
    export const fatal = fatalLogger.trigger;
