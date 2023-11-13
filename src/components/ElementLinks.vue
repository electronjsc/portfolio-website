<script setup lang="ts">
import { ref } from 'vue'

const information = ref([
    {
        message: 'GitHub',
        href: 'https://github.com/electronjsc'
    },
    {
        message: 'Telegram',
        href: 'https://t.me/electronjsc'
    },
    {
        message: 'Email',
        href: 'electronjsc.dev@gmail.com'
    }
])

</script>

<template>
    <div class="links_wrapper">
        <div class="links_wrapper__blocks">
            <div class="links_wrapper__blocks__block">
                <ul>
                    <p class="links_wrapper__blocks__block_text text-3xl">Links</p>
                    <br>
                    <li v-for="(info, index) in information" 
                        class="links_wrapper__blocks__block_text text-xl font-medium"
                        :key="index">
                        
                        * {{ info.message }} - <a class="underline" :href="info.href">{{ info.href }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.links_wrapper {
    animation-fill-mode: forwards;
  @apply absolute w-full min-h-screen flex bg-cover bg-no-repeat animate-[klaming_1.5s];

  &__blocks {
    @apply flex flex-col m-auto max-w-[58.5185vh] px-[1.8519vh] mt-[9.2593vh];

    &__block {
        @apply flex w-full bg-[#00000080] p-[1.8519vh] rounded-xl transition-all 
        duration-500 hover:scale-90 mt-3 items-center;

        &_text {
            @apply w-full font-bold text-white;
        }
    }
  }
}

</style>