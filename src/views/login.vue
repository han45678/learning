<template>
  <div id="login">
    <div class="wrapper">
      <h1>Danny Kids <span>Online</span></h1>
      <div class="form" @submit.prevent="sign_in">
        <form action="">
          <input
            type="text"
            placeholder="請輸入帳號"
            v-model="user.username"
            required
          />
          <input
            type="password"
            placeholder="請輸入密碼"
            v-model="user.password"
            required
          />
          <p>※ Forgot password</p>
          <button @click="test">LOGIN</button>
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
    this.loading();
  },
  methods: {
    test() {
      this.$router.push("/level");
    },
    sign_in() {
      //登入事件
      const api = "";
      //admin＝讀取cookie需要
      this.$http
        .post(api, this.user, {
          withCredentials: true, //correct
        })
        .then((response) => {
          //console.log(response.data);
          if (response.data.success) {
            //如果data裡的success是true就執行這個行為
            this.$router.push("/home");
          } else {
            alert("輸入帳號密碼錯誤");
            this.$swal("<b>錯誤</b>!", "請重新輸入", "error");
          }
        });
    },
    loading() {
      this.$store.state.isLoading = true;
    },
  },
};
</script>
<style scoped lang="scss"></style>