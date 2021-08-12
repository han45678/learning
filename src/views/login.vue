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
          <p>※ Forgot password</p>
          <button @click="sign_in">LOGIN</button>
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
    // this.loading();
  },
  methods: {
    sign_in() {
      if (this.user.username === "han") {
        if (this.user.password === "123") {
          this.$store.state.username = this.user.username;
          this.$store.state.password = this.user.password;
          this.$swal("歡迎光臨", "<b>學員</b> "+this.$store.state.username +" 登入系統", "success");
          var login = 1;
          localStorage.setItem('user',login);
          this.$router.push("/level");
        } else {
          this.$swal("錯誤!", "請重新輸入", "error");
        }
      } else {
        this.$swal("錯誤!", "請重新輸入", "error");
      }
    },
    // test() {
    //   // this.$router.push("/level");
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
    //         this.$router.push("/home");
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
<style scoped lang="scss"></style>