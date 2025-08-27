import { EventEmitter } from 'node:events'

// Simple event bus for dev logs
export const devLogBus = new EventEmitter()

// Avoid memory leak warnings in dev if many clients reconnect
devLogBus.setMaxListeners(50)


