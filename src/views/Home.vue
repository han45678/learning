<template>
  <div id="home">
    <VueLoading />
    <VueHeader />
    <main>
      <router-link to="/checkpoint">SB</router-link>
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
      VueFooter
    },
    async created() {
      console.log(this);
      this.loading()
    },
    methods: {
      loading() {
        this.$store.state.isLoading = true;
      },
    }
  }
</script>

<style scoped>
  a{
    background-color: #648575;
    color: #fff;
    text-align: center;
    display: block;
    line-height: 50px;
    text-decoration: cadetblue;
  }
</style>