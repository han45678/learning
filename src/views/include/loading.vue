<template>
  <div id="loading" :class="{ 'active': loading }">
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
        loading: true,
      };
    },
    created() {
      this.isLoading
    },
    methods: {
      // isLoading() {
      //   setTimeout(() => {
      //     this.isLoading = true;
      //   }, 3000);
      // }
    }
  };
</script>

<style scoped lang="scss">

</style>