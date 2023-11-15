<template>
    <div  
        v-for="item in blogs"
        class="text-white"
    >
        {{ item.blog_name }}
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
    data() {
        return {
            
        }
    },

    props: {
        blogs: {
            type: Array,
        }
    },
}

</script>

<style lang="scss" scoped>

</style>