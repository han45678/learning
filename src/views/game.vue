<template>
  <transition type="transition" name="fade" enter-active-class="animated swing fade-enter-active"
    leave-active-class="animated bounce fade-leave-active">

    <div id="game_levels">

      <VueLoading />

      <VueHeader />

      <main>
        <div id="game">
          <div class="game_menu">
            <ul>
              <li class="active" @mouseover="test">
                <div class="item" style="background-color:#107B9E">
                  <img src="/images/game/video.svg" alt="icon">
                  <svg v-html="star_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.74 20.48"></svg>
                </div>
              </li>
              <li onmouseover="this.style.backgroundColor='#17A6AF';" onmouseout="this.style.backgroundColor='';">
                <div class="item" style="background-color:#17A6AF">
                  <img src="/images/game/movie.svg" alt="icon">
                  <svg v-html="star_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.74 20.48"></svg>
                </div>
              </li>
              <li onmouseover="this.style.backgroundColor='#EB9E71';" onmouseout="this.style.backgroundColor='';">
                <div class="item" style="background-color:#EB9E71">
                  <img src="/images/game/mic.svg" alt="icon">
                  <svg v-html="star_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.74 20.48"></svg>
                </div>
              </li>
              <li onmouseover="this.style.backgroundColor='#D7574E';" onmouseout="this.style.backgroundColor='';">
                <div class="item" style="background-color:#D7574E">
                  <img src="/images/game/game.svg" alt="icon">
                  <svg v-html="star_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.74 20.48"></svg>
                </div>
              </li>
              <li onmouseover="this.style.backgroundColor='#A87BA7';" onmouseout="this.style.backgroundColor='';">
                <div class="item" style="background-color:#A87BA7">
                  <img src="/images/game/game.svg" alt="icon">
                  <svg v-html="star_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.74 20.48"></svg>
                </div>
              </li>
            </ul>
          </div>
          <div class="game_main">

          </div>
        </div>
      </main>

      <!-- 關閉 -->
      <router-link id="off" to="/level">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.41 73.41">
          <g>
            <path class="cls-1" d="M36.7,71.41h0A34.71,34.71,0,1,1,71.41,36.7,34.81,34.81,0,0,1,36.7,71.41" />
            <path class="cls-2" d="M36.7,71.41h0A34.71,34.71,0,1,1,71.41,36.7,34.81,34.81,0,0,1,36.7,71.41Z" />
            <rect class="cls-3" x="15.36" y="29.28" width="43.96" height="12.51"
              transform="translate(-14.19 36.81) rotate(-45)" />
            <rect class="cls-3" x="31.09" y="13.56" width="12.51" height="43.96"
              transform="translate(-14.19 36.81) rotate(-45)" />
          </g>
        </svg>
      </router-link>

      <VueFooter />

    </div>

  </transition>
</template>

<script>
  import VueLoading from "./include/loading";
  import VueHeader from "./include/header";
  import VueFooter from "./include/footer";
  export default {
    components: {
      VueLoading,
      VueHeader,
      VueFooter
    },
    data() {
      return {
        "star_svg": "<g><path class='s star-1' d='M2.37,15.87c.21-.91.44-2,.71-3.07a.8.8,0,0,0-.29-.92C2.05,11.26,1.35,10.6.62,10A1.36,1.36,0,0,1,.07,8.43a1.39,1.39,0,0,1,1.38-1c.93-.06,1.87-.17,2.8-.23a.86.86,0,0,0,.85-.59c.36-.91.77-1.8,1.15-2.71A1.34,1.34,0,0,1,7.57,3a1.36,1.36,0,0,1,1.27,1c.38.93.8,1.84,1.16,2.77a.76.76,0,0,0,.74.54c1,.06,1.95.17,2.93.26a1.38,1.38,0,0,1,1.33,1,1.35,1.35,0,0,1-.5,1.5c-.74.65-1.47,1.31-2.23,1.93a.85.85,0,0,0-.31,1c.24,1,.43,1.92.66,2.87a1.37,1.37,0,0,1-2.13,1.51c-.81-.51-1.65-1-2.45-1.51a.86.86,0,0,0-1.08,0q-1.26.81-2.58,1.53C3.36,17.84,2.32,17.18,2.37,15.87Z' /><path class='s star-2' d='M22.61,18.17c.3-1.29.62-2.82,1-4.32a1.14,1.14,0,0,0-.42-1.31c-1-.87-2-1.79-3.05-2.67a1.94,1.94,0,0,1,1.17-3.55c1.32-.09,2.63-.25,4-.33a1.19,1.19,0,0,0,1.18-.83c.51-1.29,1.1-2.54,1.63-3.81A1.85,1.85,0,0,1,29.92,0a1.9,1.9,0,0,1,1.79,1.33c.53,1.31,1.12,2.59,1.64,3.9a1.05,1.05,0,0,0,1,.76c1.37.09,2.75.23,4.12.36a1.93,1.93,0,0,1,1.16,3.49c-1,.91-2.06,1.84-3.13,2.71a1.2,1.2,0,0,0-.43,1.38c.33,1.34.61,2.69.92,4a1.88,1.88,0,0,1-.69,2.12,1.91,1.91,0,0,1-2.3,0c-1.15-.71-2.33-1.38-3.45-2.13a1.22,1.22,0,0,0-1.52,0c-1.18.76-2.39,1.49-3.63,2.16C24,20.93,22.54,20,22.61,18.17Z' /><path class='s star-3' d='M47.05,15.87c.21-.91.44-2,.71-3.07a.78.78,0,0,0-.29-.92C46.73,11.26,46,10.6,45.3,10a1.36,1.36,0,0,1-.55-1.54,1.39,1.39,0,0,1,1.38-1c.93-.06,1.87-.17,2.8-.23a.86.86,0,0,0,.85-.59c.36-.91.77-1.8,1.15-2.71a1.34,1.34,0,0,1,1.32-1,1.36,1.36,0,0,1,1.27,1c.38.93.8,1.84,1.16,2.77a.76.76,0,0,0,.74.54c1,.06,2,.17,2.93.26a1.38,1.38,0,0,1,1.33,1,1.35,1.35,0,0,1-.5,1.5c-.74.65-1.47,1.31-2.23,1.93a.85.85,0,0,0-.31,1c.24,1,.43,1.92.66,2.87a1.37,1.37,0,0,1-2.13,1.51c-.81-.51-1.65-1-2.45-1.51a.86.86,0,0,0-1.08,0q-1.26.81-2.58,1.53C48,17.84,47,17.18,47.05,15.87Z' /></g>"
      };
    },
    created() {

    },
    methods: {
      test() {
        console.log('test')
      },
      // mouseOver() {
      //   this.style.backgroundColor = '#D7574E';
      // },
      // mouseOut() {
      //   this.style.backgroundColor = '#D7574E';
      // }
    }
  };
</script>

<style scoped lang="scss">

</style>