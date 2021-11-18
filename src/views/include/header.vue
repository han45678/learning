<template>
  <header>
    <nav>
      <ul>
        <li @click="signOut" style="cursor: pointer">
          <div class="icon">
            <img src="/images/icon/user.svg" alt="icon" />
          </div>
          <div class="content">
            {{ info.name }}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="/images/icon/star.svg" alt="icon" />
          </div>
          <div class="content">
            {{ info.star }}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="/images/icon/currency.svg" alt="icon" />
          </div>
          <div class="content">
            {{ info.currency }}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="/images/icon/time.svg" alt="icon" />
          </div>
          <div class="content">
            {{ info.time }}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="/images/icon/level.svg" alt="icon" />
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
  },
  methods: {
    signOut() {
      this.$store.commit("SET_IS_LOADING", false);
      this.$store.commit("SET_USER_INFO", {
        username: "",
        password: "",
        identity: "",
        level: "",
      });

      localStorage.setItem(
        "info",
        JSON.stringify({
          isLoading: false,
          // helper: true,
          username: "",
          password: "",
          identity: "",
          level: "",
        })
      );
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped lang="scss">
#go_home {
  margin-top: 2.5px;
  margin-left: 15px;
  height: 50px;
  width: 50px;
  border: 1px solid transparent;
  background-color: #6dd0cd;
  color: #fff;
  font-size: 24px;
  border-radius: 999px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}

header {
  transition: 0.6s;
  transform-origin: left;
  @media screen and (min-width: 1280px) and (min-height: 768px) {
    &.active {
      position: fixed;
      left: 30px;
      top: -100px;
      
      nav ul li .icon {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>