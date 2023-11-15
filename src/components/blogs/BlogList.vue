<template>
    <modal-window 
        :blogs="blogs"
        v-for="item in blogs" 
        :key="item.blog_id"
        @click="onShowBlogInformation(item.blog_id)"
    >
        <p class="text">
            {{ item.blog_name }}
            <img class="mt-7" :src="item.blog_image">
            <br />
            Номер поста: {{ item.blog_id }}
            <br />
                <p class="font-medium text-white/50 pt-4">{{ item.blog_description }}</p>
            <br />

            <p>Go to reading the post - click in post!</p>
        </p>
    </modal-window>
    
</template>

<script lang="ts">
import { ref } from 'vue'
import BlogInformation from './BlogInformation.vue';

export default {
    data() {
        return {
            blogs: this.$props.blogs
        }
    },
    props: {
        blogs: {
            type: Array,
            required: true
        }
    },
    methods:{
        onShowBlogInformation(id:number) {
            this.$router.replace({name: 'bloginfo', params: { id: id }})
        }
    },
    components: {
        BlogInformation
    }
}
</script>

<style lang="scss" scoped>
.text {
    @apply w-full text-center font-bold text-white;
}

img {
    @apply rounded-xl;
}

</style>