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
]);

</script>

<template>
    <div class="links_wrapper">
        <div class="links_wrapper__blocks">
            <modal-window>
                <ul>
                    <p class="links_wrapper__blocks_text text-3xl">Links</p>
                    <br>
                    <li v-for="(info, index) in information" 
                        class="links_wrapper__blocks_text text-xl font-medium"
                        :key="index">
                        
                        * {{ info.message }} - <a class="underline" :href="info.href">{{ info.href }}</a>
                    </li>
                </ul>
            </modal-window>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.links_wrapper {
    animation-fill-mode: forwards;
  @apply absolute w-full min-h-screen flex bg-cover bg-no-repeat animate-[klaming_1.5s];

  &__blocks {
    @apply flex flex-col m-auto max-w-[58.5185vh] px-[1.8519vh] mt-[9.2593vh];

    &_text {
        @apply w-full font-bold text-white;
    }
  }
}

</style>