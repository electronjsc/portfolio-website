<template>
    <div class="blog_wrapper">
        <selection class="blog_wrapper__blocks">
            <BlogList v-if="blogs.length > 0" :blogs="blogs" />
            <h1 v-else class="text-white text-center ml-[53vh] w-full
            font-bold text-2xl max-[400px]:ml-[0vh]">
                В данный момент постов с блогами - нет. 😢
            </h1>
        </selection>
    </div>
</template>

<script lang="ts">
import { RouterLink, RouterView} from 'vue-router'
import BlogList from '../blogs/BlogList.vue'


export default {
    data() {  
        return {
            blogs: [
                {
                    blog_id: 1,
                    blog_name: 'Creating a portfolio website using a framework vue.js',
                    blog_description: 'In this post, telling how I created my first portfolio site. \n\
                    Thank you for loving reading my blog.',
                    blog_image: 'https://heaad.ru/wp-content/uploads/2021/07/back_to_work_4x.png',   
                }, 
                {
                    blog_id: 2,
                    blog_name: 'Creating a portfolio website using a framework vue.js',
                    blog_description: 'In this post, telling how I created my first portfolio site. \n\
                    Thank you for loving reading my blog.',
                    blog_image: 'https://heaad.ru/wp-content/uploads/2021/07/back_to_work_4x.png',   
                },
                {
                    blog_id: 3,
                    blog_name: 'Creating a portfolio website using a framework vue.js',
                    blog_description: 'In this post, telling how I created my first portfolio site. \n\
                    Thank you for loving reading my blog.',
                    blog_image: 'https://heaad.ru/wp-content/uploads/2021/07/back_to_work_4x.png',   
                },
                {  
                    blog_id: 4,
                    blog_name: 'Creating a portfolio website using a framework vue.js',
                    blog_description: 'In this post, telling how I created my first portfolio site. \n\
                    Thank you for loving reading my blog.',
                    blog_image: 'https://heaad.ru/wp-content/uploads/2021/07/back_to_work_4x.png',   
                }, 
            ]
        }
    },
    methods: {
        
    },
    components: {
        BlogList,
    },
}
</script>

<style lang="scss" scoped>
.blog_wrapper {
    @apply absolute w-full min-h-screen flex bg-cover bg-no-repeat animate-[klaming_1.5s]
    min-[300px]:w-[100%];

  &__blocks {
    @apply grid md:grid-cols-3 gap-3 w-[60%] min-[300px]:h-[175.9814vh] m-auto 
    mt-[11.8889vh] overflow-auto min-[300px]:mt-[11vh] min-[300px]:w-[85%] ml-20;
  }
}

</style>