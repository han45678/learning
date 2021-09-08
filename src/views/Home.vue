<template>
  <div id="home">
    <VueLoading />
    <VueHeader />
    <main>
      <router-link to="/checkpoint">SB</router-link>
      <router-link to="/checkpoint">PB</router-link>
      <button @click="no">Reader 1-1</button>
      <button @click="no">Reader 1-2</button>
      <button @click="no">Reader 1-3</button>
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
  justify-content: center;
  max-width: 600px;
  a,
  button {
    border: none;
    width: 30%;
    height: 183px;
    margin: 1.555555%;
    background-color: #648575;
    color: #fff;
    text-align: center;
    display: block;
    line-height: 183px;
    font-size: 32px;
    text-decoration: cadetblue;
    cursor: pointer;
    &:nth-child(1),
    &:nth-child(2) {
      width: 30.5%;
    }
  }
}
</style>