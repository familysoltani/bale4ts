import * as Debug from 'debug'

const _info = Debug('info')
const _debug = Debug('debug')
const _error = Debug('error')
const _trace = Debug('trace')
const _warn = Debug('warn')
const _fatal = Debug('fatal')
const _grayLog = Debug('grayLog')

export class Logger {
  private static _name: string

  public static setName(value: string) {
    this._name = value
  }

  public static logEnabled = true

  public static log(data: any) {
    if (Logger.logEnabled) _info(data)
  } // INFO

  public static debug(data: any) {
    if (Logger.logEnabled) _debug(data)
  } // DEBUG

  public static error(data: any) {
    if (Logger.logEnabled) _error(data)
  } // ERROR

  public static trace(data: any) {
    if (Logger.logEnabled) _trace(data)
  } // TRACE

  public static warn(data: any) {
    if (Logger.logEnabled) _warn(data)
  } // WARN

  public static fatal(data: any) {
    if (Logger.logEnabled) _fatal(data)
  } // FATAL

  public static grayLog(tag: any, data: any) {
    if (Logger._name) {
      var message = {
        host: this._name,
        tag: tag,
        full_message: data,
        text: tag + ':' + data,
        facility: this._name
      }
      _grayLog(message)
    }
  }
}
