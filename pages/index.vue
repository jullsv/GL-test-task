<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <button 
        @click="shuffleSpread"
        class="mb-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition"
      >
        {{ loading ? 'Готовим судьбу...' : (spread.length > 0 ? 'Изменить судьбу' : 'Сделать расклад') }}
      </button>
  
      <SpreadArea :spread="spread" />
    </div>
  </template>
  
  <script setup>
  import { useCards } from '~/composables/useCards'
  import SpreadArea from '~/components/SpreadArea.vue'
  
  const { loadCards, shuffleSpread, spread, loading } = useCards()
  
  onMounted(async () => {
    await loadCards()
  })
  </script>
  