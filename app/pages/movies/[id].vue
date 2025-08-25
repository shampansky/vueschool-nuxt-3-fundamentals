<script setup>
const route = useRoute();
const { data, status } = useFetch(`http://www.omdbapi.com/?apikey=876937fd&i=${route.params.id}`, {
  pick: ['Title', 'Plot'],
  key: `/movies/${route.params.id}`,
})
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
    <br>
    {{ status }}
  </div>
</template>
