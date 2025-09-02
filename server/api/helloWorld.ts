export default defineEventHandler(event => {
  return {
    message: event.method + 'Hello World',
  }
})
