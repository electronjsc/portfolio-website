<template>
    <div class="blog_wrapper">
        <selection class="blog_wrapper__blocks">
            <RouterLink v-for="(info, index) in information" 
                class="blog_wrapper__blocks__block"
                :key="index"
                to="index"
            >
                <p class="blog_wrapper__blocks__block_text">
                    {{ info.blog_name }}
                    <img class="mt-7" :src="info.blog_image">
                    {{ index }}
                    <br />
                        <p class="font-medium text-white/50">{{ info.blog_description }}</p>
                    <br />

                    <p>Go to reading the post - click in post!</p>
                </p>
                
            </RouterLink>
        </selection>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, defineComponent } from 'vue'

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
]);

defineExpose({
    information
});

</script>

<style lang="scss" scoped>
.blog_wrapper {
    @apply absolute w-full min-h-screen flex bg-cover bg-no-repeat animate-[klaming_1.5s]
    min-[300px]:w-[100%];

  &__blocks {
    @apply grid md:grid-cols-3 gap-3 w-[60%] min-[300px]:h-[175.9814vh] m-auto 
    mt-[11.8889vh] overflow-auto min-[300px]:mt-[11vh] min-[300px]:w-[85%] ml-20;

    &__block {
        @apply flex w-full bg-[#00000080] p-[20.0005px] rounded-xl transition-all 
        duration-500 cursor-pointer hover:scale-90 items-stretch min-[300px]:w-[100%]
        min-[500px]:w-full min-[500px]:h-[95%];

        &_text {
            @apply w-full text-center font-bold text-white;
        }

        img {
            @apply rounded-xl;
        }
    }
  }
}

</style>