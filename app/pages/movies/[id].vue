<script setup lang="ts">

const route = useRoute()
const {data} = useAsyncData(() => {
  return $fetch(`http://www.omdbapi.com/?apikey=876937fd&i=${route.params.id}`)
})
</script>
<template>
  <div>
    {{ data }}
  </div>
</template>

