<script setup>
const user = useUser()
const { isLoggedIn } = storeToRefs(user)
</script>
<template>
  <div>
    <nav>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="https://google.com">Google</NuxtLink>
      <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
      <a v-else href="#" @click.prevent="user.logout()">Logout</a>
    </nav>
    <slot />
  </div>
</template>
