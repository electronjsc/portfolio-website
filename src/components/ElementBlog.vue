<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const information = ref([
    {
        blog_name: 'Creating a portfolio website using a framework vue.js',
        blog_description: 'In this post, telling how I created my first portfolio site. \n\
        Thank you for loving reading my blog.',
        blog_image: 'https://heaad.ru/wp-content/uploads/2021/07/back_to_work_4x.png',
    },
    {
        blog_name: 'Creating a portfolio website using a framework vue.js',
        blog_description: 'In this post, telling how I created my first portfolio site. \n\
        Thank you for loving reading my blog.',
        blog_image: 'https://heaad.ru/wp-content/uploads/2021/07/back_to_work_4x.png',
    },
     
])

</script>

<template>
    <div class="blog_wrapper">
        <selection class="blog_wrapper__blocks">
            <div v-for="(info, index) in information" 
                class="blog_wrapper__blocks__block"
                :key="index"
            >
                <p class="blog_wrapper__blocks__block_text">
                    {{ info.blog_name }}
                    <img class="mt-7" :src="info.blog_image">

                    <br />
                        <p class="font-medium text-white/50">{{ info.blog_description }}</p>
                    <br />

                    <p>Go to reading the post - click in post!</p>
                </p>
                
            </div>
        </selection>
    </div>
</template>

<style lang="scss" scoped>
.blog_wrapper {
    animation-fill-mode: forwards;
  @apply absolute w-full min-h-screen flex bg-cover bg-no-repeat animate-[klaming_1.5s];

  &__blocks {
    @apply grid grid-cols-3 gap-7 w-[60%] m-auto mt-[9.2593vh];

    &__block {
        @apply flex w-full bg-[#00000080] p-[1.8519vh] rounded-xl transition-all 
        duration-500 cursor-pointer hover:scale-90 items-center;

        &_text {
            @apply w-full text-center font-bold text-white ;
        }
    }
  }
}

</style>