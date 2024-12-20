<template>
  <div class="w-full overflow-hidden">
    <div class="w-full h-full p-[16px] relative">
      <div class="w-full h-full absolute top-0 left-0 blur-[8px] brightness-[0.4] z-[2]">
        <img :src="film.thumb" alt="poster" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col bg-[rgb(42,45,52)] rounded-lg overflow-hidden z-10 relative">
        <div class="flex flex-row">
          <div class="w-[200px] min-w-[200px]">
            <img :src="film.thumb" alt="poster" class="w-full object-cover">
          </div>
          <div class="flex-grow p-[8px]">
            <div class="text-sm text-[#fff]">
              <span class="font-bold">Diễn viên:</span> <span>{{ `${(film.actors ?? []).join(', ')}...` }}</span>
            </div>
            <div class="text-sm text-[#fff] mt-1">
              <span class="font-bold">Thể loại:</span> <span>{{ film.genre }}</span>
            </div>
            <div class="text-sm text-[#fff] mt-1">
              <span class="font-bold">Thời lượng:</span> <span>{{ Math.round(film.duration / 60) }} phút</span>
            </div>
            <div class="text-sm text-[#fff] mt-1">
              <span class="font-bold">Khởi chiếu:</span> <span>{{ dayjs(film.releaseDate).format('DD/MM/YYYY') }}</span>
            </div>
          </div>
        </div>
        <div class="p-[12px]">
          <div class="text-[#fff] text-lg font-bold">
            {{ film.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full p-[16px]">
    <div class="bg-[rgb(255,255,255)] rounded-md px-4">
      <div class="text-base font-semibold py-3 border-b border-solid border-b-[rgb(235,235,240)]">
        Giới thiệu
      </div>
      <div class="text-sm py-2">
        {{ film.shortDescription }}
      </div>
      <div class="pb-4 flex justify-center">
        <!-- <iframe :src="film.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen /> -->
      </div>
    </div>
  </div>
  <div class="w-full p-[16px]">
    <div class="bg-[rgb(39,39,42)] rounded-md">
      <div class="text-lg font-bold text-[#fff] px-4 py-2 flex justify-between border-b border-solid border-b-black">
        Thông tin phòng vé
        <a-date-picker v-model:value="dateSearch" :allow-clear="false" :disabled-date="disabledDate" />
      </div>
      <div v-if="scheduler.length === 0">
        <div class="text-[#fff] text-center py-4">
          Không có lịch chiếu cho ngày này
        </div>
      </div>
      <div v-else>
        <div v-for="s, index in scheduler" :key="s._id" class="flex justify-between" :class="{ 'border-b-black': index !== scheduler.length - 1 }">
          <div class="flex flex-col px-4 py-2">
            <div class="text-[#fff]">
              {{ s.room.name }} - {{ s.room.cinema.name }} - {{ s.room.cinema.location }}
            </div>
            <div class="text-[#fff]">
              {{ dayjs(s.time).format('HH:mm DD/MM/YYYY') }}
            </div>
            <div class="text-[rgb(45,194,117)] text-sm mt-1">
              Giá chỉ từ {{ s.regularPrice }}VNĐ
            </div>
          </div>
          <div class="p-3">
            <button class="bg-[rgb(45,194,117)] text-white p-2 text-sm rounded-md" @click="onBuyTicket(s._id)">
              Mua vé ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import filmApi from '@/apis/film'
import useAuth from '@/hooks/useAuth'
import useStateApp from '@/hooks/useStateApp'
import dayjs from 'dayjs'
import { onBeforeMount, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const { hiddenBottomNavigate, showBottomNavigate } = useStateApp()
const { isAuth } = useAuth()

const film = ref<any>({})
const dateSearch = ref(dayjs())
const scheduler = ref<any[]>([])

onBeforeMount(async () => {
  hiddenBottomNavigate()
  await getFilm()
})

watch(() => dateSearch.value.format('YYYY-MM-DD'), async (value) => {
  await getScheduler(value)
}, { immediate: true })

function disabledDate(current: Dayjs) {
  return current && current < dayjs().startOf('day')
}

async function getFilm() {
  try {
    const res = await filmApi.getOne<any>(route.params.id as string)
    film.value = res.data[0]
  } catch (error) {
    film.value = {}
  }
}

async function getScheduler(date: string) {
  try {
    const res = await filmApi.getScheduler<any[]>(route.params.id as string, date)
    scheduler.value = res.data
  } catch (error) {
    scheduler.value = []
  }
}

onBeforeUnmount(() => {
  showBottomNavigate()
})

function onBuyTicket(id: string) {
  if (!isAuth.value) {
    router.push('/login')
    return
  }
  router.push(`/buy-ticket/${id}`)
}
</script>

<style lang="scss">
</style>
