<template>
  <transition type="transition" name="fade" enter-active-class="animated swing fade-enter-active"
    leave-active-class="animated bounce fade-leave-active">

    <div id="game_levels">

      <VueLoading />

      <VueHeader />

      <main></main>

      
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

      };
    },
    mounted() {

    }
  };
</script>

<style scoped lang="scss">

</style>