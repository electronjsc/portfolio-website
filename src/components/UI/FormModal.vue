<template>
    <div class="modal-window">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'modal-window'
    
}
</script>

<style lang="scss" scoped>
.modal-window {
    @apply flex w-full bg-[#00000080] p-[20.0005px] rounded-xl transition-all 
    duration-500 cursor-pointer hover:scale-90 items-stretch min-[300px]:w-[100%]
    min-[500px]:w-full min-[500px]:h-[95%] mb-4;
}
</style>