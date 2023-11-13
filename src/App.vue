<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

</script>

<template>
  <div class="portfolio">
    <header class="portfolio__header">
      <div class="portfolio__header__wrapper">

        <RouterLink to="/" class="portfolio__header__wrapper_logo">
          <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30V0H8.47059V9.93396L15.5294 14.9912L8.47059 19.8679V29.9825L0 30Z" fill="white"></path>
            <path d="M15.7059 29.9825V0H24V9.03087L15.7941 14.8106V15.1719L24 21.0419V29.9825H15.7059Z" fill="white"></path>
          </svg>
        </RouterLink>

        <nav>
          <ul class="portfolio__header__wrapper_navigation">
            <li>
              <RouterLink 
                class="portfolio__header__wrapper_navigation-button"
                to="/experience"
              >
                Experience
              </RouterLink>
            </li>
            <li>
              <RouterLink 
                class="portfolio__header__wrapper_navigation-button"
                to="/links"
              >
                Links
              </RouterLink>
            </li>
            <li>
              <RouterLink 
                class="portfolio__header__wrapper_navigation-button"
                to="/blog"
              >
                Blog
              </RouterLink>
            </li>
          </ul>
        </nav>

        <a href="https://github.com/electronjsc" class="portfolio__header__wrapper_github">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
          </svg>
        </a>

      </div>
    </header>

    <RouterView />
   
  </div>

  <footer class="footer">
    <div class="footer__wrapper">
      <p class="footer__wrapper_text">
        © 2023-2024 electronjsc | All Rights Reserved |
        {{ new Date().getDate()+'.'+ (new Date().getMonth()+1)+'.'+ new Date().getFullYear()+
        ' '+new Date().getHours()+':'+new Date().getMinutes() }}
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">

.portfolio {
  @apply min-h-screen w-full bg-[url('@images/bg.png')] bg-cover bg-no-repeat flex;

  &__header {
    @apply w-full bg-black h-20 flex justify-center z-10;

    &__wrapper {
      @apply flex mx-2 mt-7 justify-center box-border mr-[2.7778vh];

      &_logo {
        @apply w-full mr-[23.1482vh];
      }
      
      &_github {
        @apply w-full ml-[20.3704vh] mt-[0.0648vh]
      }

      &_navigation {
        @apply flex gap-4 justify-between text-sm mt-1;

        &-button {
          @apply hover:text-gray-500 transition-all duration-300 font-medium text-white;
        }
      }
    }
  }
}

.footer {
    @apply w-full bg-black h-20 flex justify-center z-10;

    &__wrapper {
      @apply flex mx-2 mt-7 justify-center box-border mr-[2.7778vh];

      &_text {
        @apply text-center font-normal font-medium text-white/50
      }

    }
  }

</style>
