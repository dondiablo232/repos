import { ref} from 'vue'
import { defineStore } from 'pinia'
import { getItemsService } from '../APP/api'
import type { Item } from '../types/elements.type'
import { ElNotification } from 'element-plus'
import type { DetailItem } from '../types/elem.type'

export const useProductStore = defineStore('items', () => {

  const items = ref<Item[]>([])
  const selectedItem = ref<DetailItem | null>(null)
  const isLoading = ref(false)

  async function getItems() {
    isLoading.value = true
    try {
      const { data } = await getItemsService()
      if (data)
        items.value = data
    } catch {
      console.log("err")
      ElNotification({
        title: 'Ошибка',
        message: 'Не удалось загрузить данные с сервера',
        type: 'error',
      })
    } finally {
      isLoading.value = false
    }
  }

  
  
  return {
    getItems,
    items,
    selectedItem,
    isLoading
  }
})
