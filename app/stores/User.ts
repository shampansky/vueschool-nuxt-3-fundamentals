export const useUser = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    test: 'test',
  }),
  actions: {
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
    },
  },
})

if (import.meta.hot) {
  // import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
