<template>
  <header>
    <nav>
      <ul>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/user.svg" alt="icon">
          </div>
          <div class="content">
            {{info.name}}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/time.svg" alt="icon">
          </div>
          <div class="content">
            {{info.time}}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/currency.svg" alt="icon">
          </div>
          <div class="content">
            {{info.currency}}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/star.svg" alt="icon">
          </div>
          <div class="content">
            {{info.star}}%
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/level.svg" alt="icon">
          </div>
          <div class="content">
            level{{info.level}}
          </div>
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
        .get('/json/info.json')
        .then(res => (this.info = res.data))
        .catch(function (error) {
          console.log(error);
        });
    }
  };
</script>