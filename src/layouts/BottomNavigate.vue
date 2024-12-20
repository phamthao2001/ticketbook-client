<template>
  <div class="flex border-t border-t-[rgb(81,81,88)] border-solid h-[65px] bg-[rgb(56,56,61)]">
    <div class="flex-grow flex flex-col justify-center items-center gap-2">
      <HomeImg width="20" height="20" stroke="#fff" />
      <div class="text-sm" style="color: #fff">
        Trang chủ
      </div>
    </div>
    <div class="flex-grow flex flex-col justify-center items-center gap-2">
      <TicketImg width="20" height="20" stroke="#fff" />
      <div class="text-sm" style="color: #fff">
        Vé của tôi
      </div>
    </div>
    <div class="flex-grow flex flex-col justify-center items-center gap-2">
      <UserImg width="20" height="20" fill="#fff" />
      <div class="text-sm" style="color: #fff">
        Tài khoản
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeImg from '@/assets/home.svg?component'
import TicketImg from '@/assets/ticket.svg?component'
import UserImg from '@/assets/user.svg?component'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss">
</style>
