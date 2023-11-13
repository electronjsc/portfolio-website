<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import router from '@/router'

import PersonalPhoto from '../assets/images/personal_image.png'


import VueJS from '../assets/VueJS.svg'
import JavaScript from '../assets/JavaScript.svg'
import { document } from 'postcss'

const information = ref([
    {
        phrase_message: 'Memories bring us back, dreams lead us forward! 👻',

        personal_name: 'Egor Zimow',
        personal_image: PersonalPhoto,
        personal_job: 'FrontEnd Developer, Pawn Developer',

        about_message: 'About Me',
        about_description: 'Greetings! My name is Egor, and I dont have a particularly extensive experience in FrontEnd development, but Im trying to achieve success.\
        Im focused on creating game interfaces using the Vue and Tailwind frameworks, along with the TypeScript programming language.\
        Also.. I develop game server mods, in local multiplayer <SAMP>.',

        myskills_message: 'My Skills',
    },
]);

const myskills = ref([
    { 
        skill_message: 'Vue', 
        skill_image: VueJS,
        skill_info: 'Vue JS is an open source JavaScript framework for creating user interfaces. \
        It can function as a web framework for developing single-page applications in a reactive style.'
    },
    { 
        skill_message: 'JavaScript', 
        skill_image: JavaScript,
        skill_info: 'JavaScript is a programming language that is used to create interactive web pages.\
        JavaScript functions can improve the convenience of interacting with a website: \
        from updating the news feed on social networks to displaying animations and interactive maps.',
    },
])

</script>

<template>
    <div class="about_wrapper">
        <selection class="about_wrapper__blocks">
            <div v-for="(info, index) in information" 
            class="about_wrapper__blocks__block justify-center" 
            :key="index"
            >
                <p class="text-sm font-normal text-center text-white">
                    {{ info.phrase_message }}
                </p>
            </div>
            <div v-for="(info, index) in information" 
                class="about_wrapper__blocks__block justify-end" 
                :key="index"
            >
                <p class="w-full text-3xl font-bold text-center text-white pr-[9.2593vh]">
                    {{ info.personal_name }}
                    <p class="text-sm pt-1 font-normal">{{ info.personal_job }}</p>
                </p>
                <img class="relative rounded-[100%]" :src="info.personal_image">
            </div>
            <div v-for="(info, index) in information" 
                class="about_wrapper__blocks__block justify-start" 
                :key="index"
            >
                <p class="w-full text-3xl font-bold text-white">
                    {{ info.about_message }}
                    <p class="text-sm pt-1 font-normal text-white/50">{{ info.about_description }}</p>
                </p>
            </div>
            <div v-for="(info, index) in information" 
                class="about_wrapper__blocks__block" 
                :key="index"
            >
                <p class="w-full text-3xl font-bold text-white">
                    {{ info.myskills_message }}
                    <br>
                    <div v-for="(skill, index) in myskills">
                        <div class="about_wrapper__blocks__block-skills hover:scale-125">
                            <img 
                                class=""
                                :src="skill.skill_image"
                            > 
                            <div class="w-[0.5555vh] mx-2 bg-slate-400"></div>
                            <p class="text-base pt-1 font-normal text-white/50">{{ skill.skill_info }}</p>
                        </div>
                    </div>
                </p>
            </div>
        </selection>
    </div>
</template>

<style lang="scss" scoped>
.about_wrapper {
    animation-fill-mode: forwards;
  @apply absolute w-full min-h-screen flex bg-cover bg-no-repeat animate-[klaming_1.5s];

  &__blocks {
    @apply flex flex-col m-auto max-w-[58.5185vh] px-[1.8519vh];

    &__block {
        @apply flex w-full bg-[#00000080] p-[1.8519vh] rounded-xl transition-all 
        duration-500 cursor-pointer hover:scale-90 mt-3 items-center;

        &-skills {
            @apply flex bg-[#00000080] p-[1.8519vh] rounded-xl transition-all 
            duration-500 cursor-pointer mt-5 opacity-30 hover:opacity-100
        }
    }
  }
}

</style>