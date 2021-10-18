<template>

  <div class="wrapper">
    <div class="item">
      <img src="/images/A.png" alt="a">
    </div>
    <div class="item">
      <img src="/images/B.png" alt="B">
    </div>
    <div class="item">
      <img src="/images/C.png" alt="C">
    </div>
    <div class="item">
      <img src="/images/D.png" alt="D">
    </div>
  </div>
</template>
<script>

export default {
  created() {
    // this.collision();
  },
  methods: {
    
  }
};
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.7.3/tailwind.min.css);
.wrapper {
  width: 1239px;
  height: 692px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  position: relative;
  margin: auto;
}
</style>