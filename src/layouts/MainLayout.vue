<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <RouterView name="header"></RouterView>

    <RouterView name="navigate_menu"></RouterView>

    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-layout>
</template>
