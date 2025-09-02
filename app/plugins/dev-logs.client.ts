export default defineNuxtPlugin(() => {
  if (import.meta.dev === false) return

  try {
    const source = new EventSource('/api/__dev-logs')
    source.onmessage = e => {
      if (!e.data) return
      try {
        const { level, args } = JSON.parse(e.data)
        const fn = (console as any)[level] || console.log
        fn('[SSR]', ...args)
      } catch {
        // plain string
        console.log('[SSR]', e.data)
      }
    }
    source.onerror = () => {
      // ignore errors in dev
    }
  } catch {
    // ignore
  }
})
