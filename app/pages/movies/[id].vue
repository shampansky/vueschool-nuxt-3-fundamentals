<script setup>
const route = useRoute();
const { data, error } = await useFetch(`http://www.omdbapi.com/?apikey=876937fd&i=${route.params.id}`, {
  pick: ['Title', 'Plot', 'Error', 'Poster'],
  key: `/movies/${route.params.id}`,
  onResponse({response}) {
    console.log('🟢', response)
  },
  onResponseError({response}) {
    console.log('🔴', response)
  }
})

if (error.value) {
  showError({ statusCode: 500, statusMessage: 'oh noes!' })
}

if (data.value?.Error === 'Incorrect IMDb ID.') {
  showError({ statusCode: 404, statusMessage: 'Movie not found' })
}

useHead({
  title: data.value?.Title || 'Movie not found',
  meta: [
    {name: 'description', content: data.value?.Plot},
    {property: 'og:description', content: data.value?.Plot},
    {property: 'og:image', content: data.value?.Poster},
    {property: 'og:title', content: data.value?.Title},
    {name: 'twitter:card', content: 'summary_large_image'},
  ]
})
</script>
<template>
  <div>
    {{ data }}
  </div>
</template>
