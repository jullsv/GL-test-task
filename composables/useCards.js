import { ref } from 'vue'

export function useCards() {
  const allCards = ref([])
  const spread = ref([])
  const loading = ref(false)

  const loadCards = async () => {
    try {
      const response = await fetch('/cards.json')
      const data = await response.json()
      allCards.value = data
    } catch (error) {
      console.error('Ошибка загрузки карт:', error)
    }
  }

  const shuffleSpread = async () => {
    if (loading.value) return

    loading.value = true
    spread.value = []

    await new Promise(resolve => setTimeout(resolve, 500)) //  задержка

    const shuffled = [...allCards.value].sort(() => 0.5 - Math.random())
    spread.value = shuffled.slice(0, 3) // Берем 3 карты

    loading.value = false
  }

  return { loadCards, shuffleSpread, spread, loading }
}
