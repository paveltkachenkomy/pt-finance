import moment from "moment";

enum LogLevel {
	LOG = "LOG",
	INFO = "INFO",
	WARN = "WARN",
	ERROR = "ERROR"
}

export class Logger {
	private static instance: Logger;

	private constructor() {
		// Empty
	}

	private static getInstance(): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger();
		}

		return Logger.instance;
	}

	private print(message: string, level: LogLevel): void {
		switch (level) {
			case LogLevel.ERROR: {
				console.error(`[${this.timestamp()}] [${LogLevel.ERROR}] - ${message}`);
				break;
			}
			case LogLevel.WARN: {
				console.warn(`[${this.timestamp()}] [${LogLevel.WARN}] - ${message}`);
				break;
			}
			case LogLevel.INFO: {
				console.error(`[${this.timestamp()}] [${LogLevel.INFO}] - ${message}`);
				break;
			}
			case LogLevel.LOG: 
			default: {
				console.error(`[${this.timestamp()}] [${LogLevel.LOG}] - ${message}`);
				break;
			}
		}
	}

	private timestamp(): string {
		return moment().format("YYYY-MM-DD HH:mm:ss.SSS");
	}

	public static log(message: string): void {
		Logger.getInstance().print(message, LogLevel.LOG);
	}

	
	public static info(message: string): void {
		Logger.getInstance().print(message, LogLevel.INFO);
	}

	
	public static warn(message: string): void {
		Logger.getInstance().print(message, LogLevel.WARN);
	}

	
	public static error(message: string): void {
		Logger.getInstance().print(message, LogLevel.ERROR);
	}
}
