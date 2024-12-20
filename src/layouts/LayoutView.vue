<template>
  <div class="w-full h-full">
    <div class="px-0 pt-0 pb-[65px] min-h-full">
      <HeaderView />
      <router-view />
    </div>
    <div v-if="stateApp.isShowBottomNavigate" class="fixed bottom-0 left-0 w-full">
      <BottomNavigate />
    </div>
  </div>
</template>

<script setup lang="ts">
import useStateApp from '@/hooks/useStateApp'
import BottomNavigate from './BottomNavigate.vue'
import HeaderView from './HeaderView.vue'

const { stateApp } = useStateApp()
</script>

<style lang="scss">
</style>
