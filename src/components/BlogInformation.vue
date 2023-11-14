<template>
    <div class="text-white">
        {{  }}
    </div>
</template>

<script lang="ts">
import { ref, defineProps, mergeProps } from 'vue'

export default {
    props: {
        id: { type: Number, required: true, default: 'Номерной вариации нет'},
        blog_name: { type: String, required: true, default: 'Строковой вариации нет' },
        blog_description: { type: String, required: true, default: 'Строковой вариации нет' },
        blog_image: { type: String, required: true, default: 'Строковой вариации нет' },
    }
}

</script>

<style lang="scss" scoped>

</style>