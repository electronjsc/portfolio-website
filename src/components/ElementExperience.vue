<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const information = ref([
    {
        experience_message: 'Experience',

        experience_samp_title: 'FrontEnd Developer as a Freelancer 😉',
        experience_samp_description: 'later',

        experience_frontend_title: 'Pawn Developer at Bounce Project 😏',
        experience_frontend_description: 'Aug 2022 - Now\n\
        \nThey develop game systems, as well as game interfaces. \
        \nI work with libraries such as: mdialog, y_hooks, and so on..'
    }
])

</script>

<template>
    <div class="experience_wrapper">
        <selection class="experience_wrapper__blocks">
            <div v-for="(info, index) in information" class="experience_wrapper__blocks__block" :key="index">
                <p class="experience_wrapper__blocks__block_text text-3xl">{{ info.experience_message }}</p>
            </div>
            <div v-for="(info, index) in information" class="experience_wrapper__blocks__block" :key="index">
                <p class="experience_wrapper__blocks__block_text text-xl">
                    {{ info.experience_samp_title }}
                    <p class="text-base pt-1 font-normal text-white/50">{{ info.experience_samp_description }}</p>
                </p>
            </div>
            <div v-for="(info, index) in information" class="experience_wrapper__blocks__block" :key="index">
                <p class="experience_wrapper__blocks__block_text text-xl">
                    {{ info.experience_frontend_title }}
                    <p class="text-base pt-2 font-normal text-white/50 whitespace-pre">{{ info.experience_frontend_description }}</p>
                </p>
            </div>
        </selection>
    </div>
</template>

<style lang="scss" scoped>
.experience_wrapper {
    animation-fill-mode: forwards;
  @apply absolute w-full min-h-screen flex bg-cover bg-no-repeat animate-[klaming_1.5s];

  &__blocks {
    @apply flex flex-col m-auto max-w-[58.5185vh] px-[1.8519vh] mt-[9.2593vh];

    &__block {
        @apply flex w-full bg-[#00000080] p-[1.8519vh] rounded-xl transition-all 
        duration-500 cursor-pointer hover:scale-90 mt-3 items-center;

        &_text {
            @apply w-full font-bold text-white;
        }
    }
  }
}

</style>