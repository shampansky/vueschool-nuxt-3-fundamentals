<script setup>
const route = useRoute();
const message = computed(() => `Computed message: user team: ${route.params.teamSlug}; user id: ${route.params.userId}`);
</script>
<template>
  <div>
    <p>
      Data in template:
      {{ $route.params.teamSlug }}
      {{ $route.params.userId }}
    </p>
    <p>{{message}}</p>
  </div>
</template>