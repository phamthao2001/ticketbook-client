<template>
  <router-view :key="fullPath" />
  <div v-if="loading" class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#ffffff55]">
    <a-spin class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" :spinning="loading" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import useLoading from './hooks/useLoading'

const route = useRoute()
const { loading } = useLoading()

const fullPath = computed(() => route.fullPath)
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
