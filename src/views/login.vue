<template>
  <div id="login">
    <div class="wrapper">
      <h1>Danny Kids <span>Online</span></h1>
      <div class="form" @submit.prevent="sign_in">
        <form action="">
          <input type="text" placeholder="請輸入帳號" v-model="user.username" />
          <input
            type="password"
            placeholder="請輸入密碼"
            v-model="user.password"
          />
          <div class="row">
            <p>
              <input type="checkbox" value="0" name="Remember" />Remember me
            </p>
            <p>※ Forgot password</p>
          </div>

          <button @click="sign_in">LOGIN</button>
          <p id="sign">
            Not a member? <a href="">Sign Up</a>
          </p>
          <!-- <button type="submit">LOGIN</button> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  async created() {
    await this.log_in();
    // this.loading();
    // this.$store.commit('SET_IS_LOADING', true);
    // console.log(this.$store);
  },
  methods: {
    sign_in() {
      if (this.user.username === "han" && this.user.password === "123") {
        this.$swal(
          "歡迎光臨",
          "<b>學員</b> " + this.user.username + " 登入系統",
          "success"
        );
        // var login = 1;
        this.$store.commit("SET_IS_LOADING", true);
        this.$store.commit("SET_USER_INFO", {
          username: this.user.username,
          password: this.user.password,
        });

        localStorage.setItem(
          "info",
          JSON.stringify({
            isLoading: false,
            // helper: true,
            username: this.user.username,
            password: this.user.password,
            identity: 1,
            level: 1,
          })
        );
        this.$router.push("level");
      } else {
        this.$swal("錯誤!", "請重新輸入", "error");
      }
    },
    log_in() {
      if (this.$store.state.username && this.$store.state.password) {
        this.$swal("<b>已登入</b>!", "即將返回首頁", "warning");
        this.$router.push("");
      }
    },
    // test() {
    //   // this.$router.push("level");
    // },
    // sign_in() {
    //   //登入事件
    //   const api = "";
    //   //admin＝讀取cookie需要
    //   this.$http
    //     .post(api, this.user, {
    //       withCredentials: true, //correct
    //     })
    //     .then((response) => {
    //       //console.log(response.data);
    //       if (response.data.success) {
    //         //如果data裡的success是true就執行這個行為
    //         this.$router.push("home");
    //       } else {
    //         alert("輸入帳號密碼錯誤");
    //         this.$swal("<b>錯誤</b>!", "請重新輸入", "error");
    //       }
    //     });
    // },
    loading() {
      this.$store.state.isLoading = true;
    },
  },
};
</script>
<style scoped lang="scss">
*{
  text-transform:initial;
}
</style>