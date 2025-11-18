<script setup lang="ts">
import { useProductStore } from './store/productStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import Header from "./components/Header.vue"
import Cards from './components/cards.vue';

const productStore = useProductStore()
const { items, isLoading } = storeToRefs(productStore)

onMounted(() => {
    productStore.getItems()
})



</script>

<template >
  <div class = "px-2 pb-4" v-loading="isLoading">
    <Header></Header>

    

    <section class="content">
      <h2 class = "text-[#fffb00] pt-[160px] font-san text-xl tracking-[2px] mb-10">Кроссовки мужские:</h2>
      
      <Cards></Cards>
    </section>
  </div>
</template>


