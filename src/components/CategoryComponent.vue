<template>
  <div class="w-full h-[60px] bg-[black] px-[1rem]">
    <div class="flex gap-8 overflow-auto h-full w-full scroll-container px-4">
      <template v-for="c in category" :key="c">
        <div class="text-[#fff] text-sm flex items-center flex-shrink-0">
          <span>
            {{ c }}
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const category = ['Tất cả', 'Hành động', 'Kinh dị', 'Viễn tưởng', 'Lãng mạn', 'Hài hước', 'Phiêu lưu', 'Thần thoại', 'Hoạt hình', 'Tài liệu', 'Kịch tính', 'Chiến tranh', 'Thể thao', 'Nhạc kịch']
</script>

<style lang="scss" scoped>
.scroll-container::-webkit-scrollbar {
  display: none;
}
</style>
