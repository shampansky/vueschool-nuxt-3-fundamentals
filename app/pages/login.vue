<script setup>
const isLoggedIn = useIsLoggedIn()
definePageMeta({
  layout: 'plain',
})

function login() {
  isLoggedIn.value = true
  navigateTo('/')
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
