<script setup lang="ts">
    import type { ResponseItems } from "../types/elements.type";
    import makeRequest from '../APP/makeRequest';
    import { useProductStore } from '../store/productStore';
    import { storeToRefs } from 'pinia';
    
    const productStore = useProductStore()
    const { items} = storeToRefs(productStore)

    const postRubish = (id:number, item:object)=> {
        makeRequest<{data: ResponseItems}>({
            url: 'https://71fc0f933db0f72a.mokky.dev/orders',
            method: "POST",
            data: {
                parentId: id,
                item
            }
        })
    }
</script>

<template>
    <div class="grid grid-cols-4 gap-[48px]">
        <div v-for="item in items" :key="item.id" class="border border-cyan-400 rounded-[20px] overflow-hidden relative shadow-[0px_0px_5px_2px_#0ff,inset_0px_0px_5px_2px_rgb(63,63,63)] bg-white">
          
          
          <div class="product-card__img-conteiner flex justify-center">
            <img :src="item.ImageUrl" alt="товар1" class="w-3xl">
          </div>
          
          <div class=" pl-2 pb-2 bg-black">
            
            <p class=" pt-1 font-semibold text-white m-0 mb-2">{{ item.name }}</p>
            
            <div class=" flex flex-row justify-between gap-2">
              
              <p class=" font-semibold text-white m-0">{{ item.price }} ₽</p>
              
            
              <div class="product-card__interactiv flex gap-2 mr-5 items-center">
                <div class = "hover:cursor-pointer  active:scale-[0.8] " @click="postRubish(item.id, item)">
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" stroke="#0ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                    <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 
                    19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 
                    19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#00000" stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round"></path> </g>
                  </svg>
                </div>
                
                <div class = "hover:cursor-pointer  active:scale-[0.8]">
                  <img src="../assets/icons/like-svgrepo-com.png" alt="" class = "w-[25px] ">
                </div>
                
              </div>
            </div>
          </div>
        </div>

        
      </div>
</template>