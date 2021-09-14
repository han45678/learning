<template>
  <header>
    <nav>
      <ul>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/user.svg" alt="icon" />
          </div>
          <div class="content">
            {{ info.name }}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/star.svg" alt="icon" />
          </div>
          <div class="content">{{ info.star }}</div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/currency.svg" alt="icon" />
          </div>
          <div class="content">
            {{ info.currency }}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/time.svg" alt="icon" />
          </div>
          <div class="content">
            {{ info.time }}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/level.svg" alt="icon" />
          </div>
          <div class="content">Level {{ info.level }}</div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      info: "",
    };
  },
  mounted() {
    this.$axios
      .get("/json/info.json")
      .then((res) => (this.info = res.data))
      .catch(function (error) {
        console.log(error);
      });
  }
};
</script>
<style scoped lang="scss">
#go_home{
  margin-top: 2.5px;
  margin-left: 15px;
  height: 50px;
  width: 50px;
  border: 1px solid transparent;
  background-color: #6DD0CD;  
  color: #fff;
  font-size: 24px;
  border-radius: 999px;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
}

</style>