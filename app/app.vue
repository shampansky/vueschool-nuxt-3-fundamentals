<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt App` : 'Nuxt App'
  },
  htmlAttrs: {
    lang: 'ru',
  },
})
</script>
<template>
  <div>
    <NuxtPage />
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
