<template>
  <div class="blog_wrapper">
    <selection class="blog_wrapper__blocks">
      <div
        v-for="item in allBlogs"
        v-if="item.blog_id > 0"
        :key="item.blog_id"
      >
        <modal-window>
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
      </div>
      <h1 v-else class="text-white text-center ml-[53vh] w-full
      font-bold text-2xl max-[400px]:ml-[0vh]">
        В данный момент постов с блогами - нет. 😢
      </h1>
    </selection>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    allBlogs() {
      return this.$store.getters.allBlogs;
    },
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.blog_wrapper {
  @apply absolute w-full min-h-screen flex bg-cover bg-no-repeat animate-[klaming_1.5s]
  min-[300px]:w-[100%];

  &__blocks {
  @apply grid md:grid-cols-3 gap-3 w-[60%] min-[300px]:h-[229.9814vh] m-auto 
  mt-[11.8889vh] overflow-auto min-[300px]:mt-[10vh] min-[300px]:w-[85%] ml-20;
  }
}

</style>