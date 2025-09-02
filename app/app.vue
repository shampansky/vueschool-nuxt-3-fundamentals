<script setup>
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} - Nuxt App` : 'Nuxt App'
  },
  htmlAttrs: {
    lang: 'ru',
  },
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
