<script setup>
const isLoggedIn = useIsLoggedIn()
</script>
<template>
  <div>
    <nav>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="https://google.com">Google</NuxtLink>
      <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
      <a v-else href="#" @click.prevent="isLoggedIn = false">Logout</a>
    </nav>
    <slot />
  </div>
</template>
