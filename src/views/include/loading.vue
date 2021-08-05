<template>
  <div id="loading" :class="{ 'active': $store.state.isLoading }">
    <div class="content">
      <img src="../../assets/images/helper.svg" alt="">
      <p>
        loading
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // loading: '',
      };
    },
    created() {
      
    },
    methods: {
      // isLoading() {
      //   setTimeout(() => {
      //     this.isLoading = true;
      //   }, 3000);
      // }
    },
  };
</script>

<style scoped lang="scss">

</style>