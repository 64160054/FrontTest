<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import FullLayout from '@/layouts/FullLayout.vue'
</script>

<template>
  <component :is="$route.meta.layout === 'MainLayout' ? MainLayout : FullLayout"></component>
</template>

<style scoped></style>
