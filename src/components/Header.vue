<script setup lang="ts">
    import { computed, onMounted, ref, type ComputedRef } from "vue"
    import axios from "axios";
    import type { Item, orderItems } from "../types/elements.type";

    const data = ref<Item[]>([])

    
    async function fetchOrders() {
        const res = await axios.get('https://71fc0f933db0f72a.mokky.dev/orders');
        data.value = res.data;
        const { item } = data.value[1]

        console.log(item)
    }
      
    

    const total:ComputedRef<number> = computed(()=> {
        
        return data.value.reduce((total,  item )=>{
            return total + item.price
        },0)
    })

    onMounted(fetchOrders)
</script>
<template>
    <div class="fixed top-0 left-0 right-0 z-[2] mx-auto mt-1  max-w-[1488px] shadow-[0_0_6px_0px_#0ff,inset_0_0_3px_1px_#0ff] rounded-[20px] bg-[rgba(0,0,0,0.97)]">
        <div class="flex items-center justify-between mx-[10px] my-[5px]">
        
        
            <div class="flex items-center">
                <div >
                <img class="w-[50px] h-[50px] " src="../assets/sneakers.svg">
                </div>
                <div>
                <a class="text-[#0ff] text-[22px] font-sans no-underline mx-[10px] tracking-[2px] [text-shadow:_0_0_5px_#0ff]  transition-colors duration-300" href="автозапчасти.html">
                    $niggersMarket
                </a>
                </div>
            </div>

            
            <div class="flex items-center gap-[20px]">
                
                <a href="тестовое задание.html" class="text-[#0ff] text-[16px] font-sans tracking-[2px] font-semibold hover:text-[rgb(255,115,0)] transition-colors duration-300">
                ТОВАРЫ
                </a>
                
                <div class="flex items-center">
                <a href="корзина.html" class="text-[#0ff] text-[16px] font-sans tracking-[2px] font-semibold hover:text-[rgb(255,115,0)] transition-colors duration-300 ">
                    КОРЗИНА
                </a>
                <span class="text-[#0ff] text-[16px]">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" stroke="#0ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                    <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 
                    19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 
                    19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#00000" stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round"></path> </g>
                    </svg>
                </span>

                <span class = "text-[rgb(255,115,0)] pl-1 text-lg">
                    {{ total }}
                </span>
                </div>
                
                <el-button 
                id="authBtn"
                type="primary"
                class="border-cyan-400 text-cyan-400 hover:text-orange-500 hover:bg-transparent hover:shadow-[0_0_6px_0px_#0ff] transition-colors duration-300"
                >
                Войти
                </el-button>
            </div>
        </div>

        <hr class = "border-none h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0 animate-pulse">

        <div class="header-line2 flex justify-center">
            <div class="nav flex justify-around w-[90%] mt-4 mb-4">
                <a class="uppercase text-lg nav-item itemSel font-sans text-cyan-400 text-sm no-underline tracking-wider h-10 w-[22%] flex items-center justify-center text-center transition-colors duration-300 outline outline-1 outline-orange-500 shadow-[0px_0px_8px_0_rgb(255,115,0)] text-shadow-[0_0_1px_rgb(255,115,0)] text-orange-500 rounded-lg" href="тестовое задание.html">
                мужские
                </a>
                <a class="nav-item uppercase text-lg font-sans text-cyan-400 text-sm no-underline tracking-wider h-10 w-[22%] flex items-center justify-center text-center transition-colors duration-300 hover:text-orange-500" href="ходовка.html">
                женские
                </a>
                <a class="nav-item uppercase text-lg font-sans text-cyan-400 text-sm no-underline tracking-wider h-10 w-[22%] flex items-center justify-center text-center transition-colors duration-300 hover:text-orange-500" href="тормозная система.html">
                детские
                </a>
                <a class="nav-item uppercase font-sans text-cyan-400 text-sm no-underline tracking-wider h-10 w-[22%] flex items-center justify-center text-center transition-colors duration-300 hover:text-orange-500" href="избранное.html">
                ИЗБРАННОЕ
                </a>
            </div>
            </div>
    </div>
</template>