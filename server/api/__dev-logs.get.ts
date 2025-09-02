import type { H3Event } from 'h3'
import { devLogBus } from '../utils/devLogBus'

export default defineEventHandler(async (event: H3Event) => {
  // Only enable in dev
  if (process.env.NODE_ENV === 'production') {
    setResponseStatus(event, 404)
    return 'Not found'
  }

  setHeader(event, 'Content-Type', 'text/event-stream')
  setHeader(event, 'Cache-Control', 'no-cache')
  setHeader(event, 'Connection', 'keep-alive')

  const send = (data: unknown) => {
    const payload = typeof data === 'string' ? data : JSON.stringify(data)
    event.node.res.write(`data: ${payload}\n\n`)
  }

  const onMessage = (message: unknown) => send(message)
  devLogBus.on('message', onMessage)

  // Heartbeat to keep connection alive
  const heartbeat = setInterval(() => {
    event.node.res.write(': ping\n\n')
  }, 25000)

  send({ ready: true })

  // Close handler
  event.node.req.on('close', () => {
    clearInterval(heartbeat)
    devLogBus.off('message', onMessage)
  })
})
