<script setup lang="ts">
import { ref } from 'vue'

const information = ref([
    {
        experience_message: 'Experience',

        experience_frontend_title: 'FrontEnd Developer as a Freelancer 😉',
        experience_frontend_description: 'later',

        experience_samp_title: 'Pawn Developer at Bounce Project 😏',
        experience_samp_description: 'Aug 2022 - Now\n\
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
                    <p class="text-base pt-1 font-normal text-white/50 whitespace-pre">
                        {{ info.experience_samp_description }}
                    </p>
                </p>
            </div>
            <div v-for="(info, index) in information" class="experience_wrapper__blocks__block" :key="index">
                <p class="experience_wrapper__blocks__block_text text-xl">
                    {{ info.experience_frontend_title }}
                    <p class="text-base pt-2 font-normal text-white/50 whitespace-pre
                    min-[300px]:font-light">
                        {{ info.experience_frontend_description }}
                    </p>
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
    @apply flex flex-col m-auto max-w-[58.5185vh] px-[1.8519vh] mt-[10vh]
    min-[300px]:mt-20 max-[500px]:max-w-[46.5185vh];

    &__block {
        @apply flex w-full bg-[#00000080] p-[1.8519vh] rounded-xl transition-all 
        duration-500 cursor-pointer hover:scale-90 mt-3 items-center min-[300px]:w-[125%]
        min-[500px]:w-full;

        &_text {
            @apply w-full min-[500px]:font-bold text-white max-[300px]:font-semibold;
        }
    }
  }
}

</style>