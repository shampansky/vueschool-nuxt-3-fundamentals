export default defineNuxtRouteMiddleware(() => {
  const userIsLoggedIn = false
  if (!userIsLoggedIn) {
    // return abortNavigation('You are not logged in')
    return navigateTo({ name: 'login' })
  }
})
