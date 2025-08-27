<script setup>
const route = useRoute();
const { data, error } = await useFetch(`http://www.omdbapi.com/?apikey=876937fd&i=${route.params.id}`, {
  pick: ['Title', 'Plot', 'Error'],
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
/*
const { data, status } = useAsyncData(
  `/movies/${route.params.id}`,
  () => {
    return $fetch(
      `http://www.omdbapi.com/?apikey=876937fd&i=${route.params.id}`
    );
  },
  {
    pick: ['Title', 'Plot'],
    // transform: (data) => {
    //   return {
    //     Title: data.Title,
    //     Plot: data.Plot,
    //   };
    // },
  }
);
*/
</script>
<template>
  <div>
    {{ data }}
  </div>
</template>
