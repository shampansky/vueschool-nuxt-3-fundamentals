import { devLogBus } from '../utils/devLogBus'

export default defineNitroPlugin(() => {
  if (process.env.NODE_ENV === 'production') return

  const original = console
  const originals = {
    log: (...args: unknown[]) => original.log(...args),
    info: (...args: unknown[]) => original.info(...args),
    warn: (...args: unknown[]) => original.warn(...args),
    error: (...args: unknown[]) => original.error(...args),
    debug: (...args: unknown[]) =>
      typeof original.debug === 'function'
        ? original.debug(...args)
        : original.log(...args),
  } as const

  const makeForwarder =
    (level: keyof typeof originals) =>
    (...args: unknown[]) => {
      try {
        originals[level](...args)
        devLogBus.emit('message', {
          level,
          time: Date.now(),
          args: args.map(a => serializeArg(a)),
        })
      } catch {
        // noop
      }
    }

  const serializeArg = (arg: unknown) => {
    try {
      if (arg instanceof Error) {
        return { name: arg.name, message: arg.message, stack: arg.stack }
      }
      return JSON.parse(JSON.stringify(arg))
    } catch {
      return String(arg)
    }
  }

  console.log = makeForwarder('log') as typeof console.log
  console.info = makeForwarder('info') as typeof console.info
  console.warn = makeForwarder('warn') as typeof console.warn
  console.error = makeForwarder('error') as typeof console.error
  console.debug = makeForwarder('debug') as typeof console.debug
})
