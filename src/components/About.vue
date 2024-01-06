<script setup lang="ts">
import { ref } from 'vue'

import PersonalPhoto from '../assets/images/personal_image.png'

import VueJS from '../assets/VueJS.svg'
import JavaScript from '../assets/JavaScript.svg'
import Pawn from '../assets/Pawn.svg'

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
    It can function as a web framework for developing single-page applications in a reactive style.',
    skill_href: 'https://vuejs.org/'
  },
  { 
    skill_message: 'JavaScript', 
    skill_image: JavaScript,
    skill_info: 'JavaScript is a programming language that is used to create interactive web pages.\
    JavaScript functions can improve the convenience of interacting with a website: \
    from updating the news feed on social networks to displaying animations and interactive maps.',
    skill_href: 'https://javascript.info/'
  },
  {
    skill_message: 'Pawn', 
    skill_image: Pawn,
    skill_info: 'A simple, typed 32-bit scripting programming language with a syntax similar to the C language.\
    The compiler generates P-code (or bytecode) that runs on an abstract machine.\
    Pawn source code files have an extension .pwn; compiled and ready—to-run - .amx.\
    The language is popular for Grand Theft Auto San Andreas Multiplayer (GTA SAMP) and Counter-Strike 1.6 game servers.\
    It has an unusual compiler, as well as a code editor.',
    skill_href: 'https://www.compuphase.com/pawn/pawn.htm'
  }
])

</script>

<template>
  <div class="about_wrapper">
    <selection class="about_wrapper__blocks">
      <modal-window v-for="(info, index) in information" 
      class="justify-center" 
      :key="index"
      >
        <p class="text-sm font-normal text-center text-white">
          {{ info.phrase_message }}
        </p>
      </modal-window>
      <modal-window v-for="(info, index) in information" 
        class="justify-end" 
        :key="index"
      >
        <p class="w-full text-3xl font-bold text-center text-white pr-[9.2593vh]">
          {{ info.personal_name }}
          <p class="text-sm pt-1 font-normal">{{ info.personal_job }}</p>
        </p>
        <img class="relative rounded-[100%]" :src="info.personal_image">
      </modal-window>
      <modal-window v-for="(info, index) in information" 
        class="justify-start" 
        :key="index"
      >
        <p class="w-full text-3xl font-bold text-white">
          {{ info.about_message }}
          <p class="text-sm pt-1 font-normal text-white/50">{{ info.about_description }}</p>
        </p>
      </modal-window>
      <modal-window v-for="(info, index) in information" 
        :key="index"
      >
        <p class="w-full text-3xl font-bold text-white">
          {{ info.myskills_message }}
          <br>
          <div v-for="(skill, index) in myskills">
            <a 
              :href="skill.skill_href" 
              class="about_wrapper__blocks-skills hover:scale-105"
              :key="index"
            > 

              <img 
                class=""
                :src="skill.skill_image"
              >

              <div class="border-l-[1px] mx-2 pl-5">
                <p class="text-base text-center pt-1 font-normal text-white/50">{{ skill.skill_info }}</p>
              </div>
            </a>
          </div>
        </p>
      </modal-window>
    </selection>
  </div>
</template>

<style lang="scss" scoped>
.about_wrapper {
  @apply absolute w-full min-h-screen flex bg-cover bg-no-repeat animate-[klaming_1.5s];

  &__blocks {
  @apply flex flex-col m-auto w-[55.5556vh] px-[1.8519vh] mt-[11vh]
  min-[300px]:mt-[10vh] transition-all;

    &-skills {
      @apply flex bg-[#00000080] p-[1.8519vh] rounded-xl transition-all 
      duration-500 cursor-pointer mt-5 opacity-30 hover:opacity-100
    }
  }
}

</style>