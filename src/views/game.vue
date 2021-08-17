<template>
  <transition type="transition" name="fade" enter-active-class="animated swing fade-enter-active"
    leave-active-class="animated bounce fade-leave-active">

    <div id="game_levels">

      <VueLoading />

      <VueHeader />

      <main>
        <div id="game">
          <div class="game_options">
            <h1 :class="stylsClass.css">Unlt1</h1>
            <button @click="styls1" :class="{'active' : sel === 1}" class="styls1">Story</button>
            <button @click="styls2" :class="{'active' : sel === 2}" class="styls2">Letters</button>
            <button @click="styls3" :class="{'active' : sel === 3}" class="styls3">Vocabulary</button>
            <button @click="styls4" :class="{'active' : sel === 4}" class="styls4">SentencePattern</button>
          </div>
          <div class="game_menu">
            <ul>
              <li @click="optionsStyls1" :class="[stylsClass.css,{'active' : options === 1}]">
                <div class="item">
                  <img src="/images/game/video.svg" alt="icon">
                  <svg v-html="game_star_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.74 20.48"></svg>
                </div>
              </li>
              <li @click="optionsStyls2" :class="[stylsClass.css,{'active' : options === 2}]">
                <div class="item">
                  <img src="/images/game/movie.svg" alt="icon">
                  <svg v-html="game_star_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.74 20.48"></svg>
                </div>
              </li>
              <li @click="optionsStyls3" :class="[stylsClass.css,{'active' : options === 3}]">
                <div class="item">
                  <img src="/images/game/mic.svg" alt="icon">
                  <svg v-html="game_star_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.74 20.48"></svg>
                </div>
              </li>
              <li @click="optionsStyls4" :class="[stylsClass.css,{'active' : options === 4}]">
                <div class="item">
                  <img src="/images/game/game.svg" alt="icon">
                  <svg v-html="game_star_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.74 20.48"></svg>
                </div>
              </li>
              <li @click="optionsStyls5" :class="[stylsClass.css,{'active' : options === 5}]">
                <div class="item">
                  <img src="/images/game/game.svg" alt="icon">
                  <svg v-html="game_star_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.74 20.48"></svg>
                </div>
              </li>
            </ul>
          </div>
          <div class="game_main">
            <div class="content">

            </div>
          </div>
        </div>
      </main>

      <!-- 返回 -->
      <router-link id="return" to="/checkpoint">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.41 73.41">
          <g>
            <path class="cls-1"
              d="M36.7,71.41h0A34.81,34.81,0,0,1,2,36.7H2A34.81,34.81,0,0,1,36.7,2h0A34.81,34.81,0,0,1,71.41,36.7h0A34.81,34.81,0,0,1,36.7,71.41Z" />
            <path class="cls-2"
              d="M49.88,31.51c-3.47-3.8-9.37-5.91-15.05-6.29V16.14L13,33.12l21.83,17V39.71c16.59,0,19.24,13,19.85,17.56h.86C55.87,54.55,57.28,39.61,49.88,31.51Z" />
          </g>
        </svg>
      </router-link>

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
        "game_star_svg": "<g><path class='s star-1' d='M2.37,15.87c.21-.91.44-2,.71-3.07a.8.8,0,0,0-.29-.92C2.05,11.26,1.35,10.6.62,10A1.36,1.36,0,0,1,.07,8.43a1.39,1.39,0,0,1,1.38-1c.93-.06,1.87-.17,2.8-.23a.86.86,0,0,0,.85-.59c.36-.91.77-1.8,1.15-2.71A1.34,1.34,0,0,1,7.57,3a1.36,1.36,0,0,1,1.27,1c.38.93.8,1.84,1.16,2.77a.76.76,0,0,0,.74.54c1,.06,1.95.17,2.93.26a1.38,1.38,0,0,1,1.33,1,1.35,1.35,0,0,1-.5,1.5c-.74.65-1.47,1.31-2.23,1.93a.85.85,0,0,0-.31,1c.24,1,.43,1.92.66,2.87a1.37,1.37,0,0,1-2.13,1.51c-.81-.51-1.65-1-2.45-1.51a.86.86,0,0,0-1.08,0q-1.26.81-2.58,1.53C3.36,17.84,2.32,17.18,2.37,15.87Z' /><path class='s star-2' d='M22.61,18.17c.3-1.29.62-2.82,1-4.32a1.14,1.14,0,0,0-.42-1.31c-1-.87-2-1.79-3.05-2.67a1.94,1.94,0,0,1,1.17-3.55c1.32-.09,2.63-.25,4-.33a1.19,1.19,0,0,0,1.18-.83c.51-1.29,1.1-2.54,1.63-3.81A1.85,1.85,0,0,1,29.92,0a1.9,1.9,0,0,1,1.79,1.33c.53,1.31,1.12,2.59,1.64,3.9a1.05,1.05,0,0,0,1,.76c1.37.09,2.75.23,4.12.36a1.93,1.93,0,0,1,1.16,3.49c-1,.91-2.06,1.84-3.13,2.71a1.2,1.2,0,0,0-.43,1.38c.33,1.34.61,2.69.92,4a1.88,1.88,0,0,1-.69,2.12,1.91,1.91,0,0,1-2.3,0c-1.15-.71-2.33-1.38-3.45-2.13a1.22,1.22,0,0,0-1.52,0c-1.18.76-2.39,1.49-3.63,2.16C24,20.93,22.54,20,22.61,18.17Z' /><path class='s star-3' d='M47.05,15.87c.21-.91.44-2,.71-3.07a.78.78,0,0,0-.29-.92C46.73,11.26,46,10.6,45.3,10a1.36,1.36,0,0,1-.55-1.54,1.39,1.39,0,0,1,1.38-1c.93-.06,1.87-.17,2.8-.23a.86.86,0,0,0,.85-.59c.36-.91.77-1.8,1.15-2.71a1.34,1.34,0,0,1,1.32-1,1.36,1.36,0,0,1,1.27,1c.38.93.8,1.84,1.16,2.77a.76.76,0,0,0,.74.54c1,.06,2,.17,2.93.26a1.38,1.38,0,0,1,1.33,1,1.35,1.35,0,0,1-.5,1.5c-.74.65-1.47,1.31-2.23,1.93a.85.85,0,0,0-.31,1c.24,1,.43,1.92.66,2.87a1.37,1.37,0,0,1-2.13,1.51c-.81-.51-1.65-1-2.45-1.51a.86.86,0,0,0-1.08,0q-1.26.81-2.58,1.53C48,17.84,47,17.18,47.05,15.87Z' /></g>",
        selArr: [{
            id: 1,
            name: "styls1"
          },
          {
            id: 2,
            name: "styls2"
          },
          {
            id: 3,
            name: "styls3"
          },
          {
            id: 4,
            name: "styls4"
          }
        ],
        sel: 1,
        options: 1,
        
      };
    },
    created() {
      this.game_data();
    },
    methods: {
      game_data() {
        let sel = this.sel;
        let options = this.options;
        
        this.$axios
          .get('/json/game' + '${index}' + sel + '-' + options + '.json')
          // .then(res => (this.info = res.data))
          .then(function (res) {
            console.log(res.data);
            console.log('/json/game' + sel + '-' + options + '.json');
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      styls1() {
        this.sel = 1;
        this.game_data();
      },
      styls2() {
        this.sel = 2;
        this.game_data();
      },
      styls3() {
        this.sel = 3;
        this.game_data();
      },
      styls4() {
        this.sel = 4;
        this.game_data();
      },
      optionsStyls1() {
        this.options = 1;
        this.game_data();
      },
      optionsStyls2() {
        this.options = 2;
        this.game_data();
      },
      optionsStyls3() {
        this.options = 3;
        this.game_data();
      },
      optionsStyls4() {
        this.options = 4;
        this.game_data();
      },
      optionsStyls5() {
        this.options = 5;
        this.game_data();
      },
    },
    computed: {
      stylsClass() {
        let className = "";
        let css = "";
        switch (this.sel) {
          case 1:
            className = "styls1";
            css = "styls1";
            break;
          case 2:
            className = "styls2";
            css = "styls2";
            break;
          case 3:
            className = "styls3";
            css = "styls3";
            break;
          case 4:
            className = "styls4";
            css = "styls4";
            break;
          default:
            break;
        }
        return {
          css: css,
          name: className
        };
      }
    }
  };
</script>

<style scoped lang="scss">

</style>