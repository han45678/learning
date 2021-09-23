<template>
  <div id="home">
    <VueLoading />
    <VueHeader />
    <main>
      <router-link to="checkpoint">
        <img
          class="card"
          src="images/menu/sb_1.png"
          alt="img"
        >
        <img
          class="ribbon"
          src="images/menu/sb_2.png"
          alt="img"
        >
      </router-link>

      <router-link to="checkpoint_pb">
        <img
          class="card"
          src="images/menu/pb_1.png"
          alt="img"
        >
        <img
          class="ribbon"
          src="images/menu/pb_2.png"
          alt="img"
        >
      </router-link>
      <router-link to="javascript: void(0)">
        <img
          class="card"
          src="images/menu/r111.png"
          alt="img"
        >
        <img
          class="ribbon"
          src="images/menu/r112.png"
          alt="img"
        >
      </router-link>
      <router-link to="javascript: void(0)">
        <img
          class="card"
          src="images/menu/r121.png"
          alt="img"
        >
        <img
          class="ribbon"
          src="images/menu/r122.png"
          alt="img"
        >
      </router-link>
      <router-link to="javascript: void(0)">
        <img
          class="card"
          src="images/menu/r131.png"
          alt="img"
        >
        <img
          class="ribbon"
          src="images/menu/r132.png"
          alt="img"
        >
      </router-link>
      <!-- <router-link to="checkpoint">PB</router-link> -->
      <!-- <button @click="no">Reader 1-1</button>
      <button @click="no">Reader 1-2</button>
      <button @click="no">Reader 1-3</button> -->
    </main>
    <VueFooter />
  </div>
</template>

<script>
import VueLoading from "./include/loading";
import VueHeader from "./include/header";
import VueFooter from "./include/footer";
export default {
  components: {
    VueLoading,
    VueHeader,
    VueFooter,
  },
  mounted() {
    // this.$store.state.home = false;
  },
  async created() {
    // console.log(this);
    this.loading();
  },
  methods: {
    loading() {
      this.$store.state.isLoading = true;
    },
    no() {
      this.$swal("<b>錯誤</b>", "目前尚未開放", "error");
    },
  },
};
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 980px;
  a {
    width: 180px;
    height: 390px;
    position: relative;
    transition: 0.6s;
    .card {
      position: absolute;
      width: 100%;
      z-index: 1;
      top: -75px;
      left: 50%;
      transform: translateX(-50%);
    }
    .ribbon {
      position: absolute;
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
    }
    &:hover {
      top: -30px;
    }
  }
}
</style>