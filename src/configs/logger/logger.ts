import winston, { createLogger, transports, Logger, format, addColors } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

export interface LoggingServiceOptions {
  consoleTransport?: boolean
  serviceName: 'loggerTest' | 'anotherLogger'
}

export class LoggerService {
  logger: Logger
  serviceName: 'loggerTest' | 'anotherLogger'
  colors: Record<string, string>



  validateSizeLimit(input: string) {
    const regex = /[0-9]+[k,m,g]/
    return regex.test(input)
  }

  static async Instance(options: LoggingServiceOptions): Promise<LoggerService> {
    return new LoggerService(options)
  }

  constructor(options: LoggingServiceOptions) {
    this.serviceName = options.serviceName

    if (this.serviceName === 'loggerTest') {
      this.colors = {
        info: 'black cyanBG',
        warn: 'yellow bold cyanBG',
        error: 'red bold cyanBG',
        debug: 'blue cyanBG',
        http: 'magenta cyanBG'
      }
    } else {
      this.colors = {
        info: 'green',
        warn: 'yellow',
        error: 'red bold',
        debug: 'blue',
        http: 'magenta'
      }
    }

    const transportsList = []
    const { consoleTransport } = options

    if (consoleTransport) {
      const consoleTransport = new transports.Console({
        format: format.combine(
          format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
          format.printf(info => {
            if (!info.message) return ''

            return winston.format.colorize().colorize(info.level, `${info.timestamp} [${this.serviceName}] ${info.level}: ${info.message}`)
          })
        ),
        level: 'debug'
      })

      transportsList.push(consoleTransport)
    }

    const dailyTransport: DailyRotateFile = new DailyRotateFile({
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        format.printf(info => {
          if (!info.message) return ''

          return `${info.timestamp} ${info.level}: ${info.message}`
        })
      ),
      filename: `./logs/${this.serviceName}/info/application-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxFiles: '14d',
      level: 'debug'
    })

    transportsList.push(dailyTransport)

    const exceptionFileOptions = {
      filename: `./logs/${this.serviceName}/exceptions/application.log`,
      silent: process.env.NODE_ENV === 'test'
    }

    this.logger = createLogger({
      transports: transportsList,
      silent: process.env.NODE_ENV === 'test',
      exceptionHandlers: [new transports.File(exceptionFileOptions)]
    })
  }

  info(message: string) {
    addColors(this.colors)

    if (this.logger) {
      this.logger.info(message)
    }
  }

  warn(message: string) {
    addColors(this.colors)

    if (this.logger) {
      this.logger.warn(message)
    }
  }

  error(message: string) {
    addColors(this.colors)

    if (this.logger) {
      this.logger.error(message)
    }
  }

  debug(message: string) {
    addColors(this.colors)

    if (this.logger) {
      this.logger.debug(message)
    }
  }

  http(message: string) {
    addColors(this.colors)

    if (this.logger) {
      this.logger.http(message)
    }
  }
}
