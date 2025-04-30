<template>
    <div class="flex flex-col items-center gap-8">
      <!-- Колода из 5 закрытых карт -->
      <div class="relative w-full max-w-xs sm:max-w-md h-48 flex items-center justify-center">
        <div 
          v-for="index in 5" 
          :key="index"
          class="absolute w-24 h-36"
          :style="{
            transform: `translateX(${(index - 3) * 15}px) rotate(${(index - 3) * 5}deg)`,
            zIndex: index
          }"
        >
          <img
            src="https://i.pinimg.com/564x/3e/99/54/3e9954ce71a103c6b87d4e95d201cc93.jpg"
            alt="card back"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
  
      <!-- Расклад из 3 карт -->
      <div v-if="spread.length" class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <div v-for="(card, index) in spread" :key="index" class="relative w-32 h-48">
          <img
            :src="card.picture"
            :alt="card.name"
            class="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center text-sm font-semibold p-2 rounded-b-lg">
            {{ card.name }}
          </div>
          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-center text-xs p-2 rounded-lg">
            {{ card.description }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    spread: {
      type: Array,
      required: true
    }
  })
  </script>
  