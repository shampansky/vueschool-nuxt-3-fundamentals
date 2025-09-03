export default defineEventHandler(event => {
  return {
    message: 'Hello  ' + event.method,
  }
})
