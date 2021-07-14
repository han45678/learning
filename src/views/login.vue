<template>
  <div id="login">
    <div class="wrapper">
      <h1>
        Danny Kids <span>Online</span>
      </h1>
      <div class="form">
        <form action="">
          <input type="text" placeholder="Name" required>
          <input type="password" placeholder="Password" required>
          <p>※ Forgot password</p>
          <button type="submit">LOGIN</button>
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
          password: ""
        }
      };
    },
    methods: {
      // signin() {//登入事件
      //   const api = "https://vue-course-api.hexschool.io/admin/signin";
      //   //admin＝讀取cookie需要
      //   this.$http.post(api, this.user, {
      //     withCredentials: true //correct
      //   }).then(response => {
      //     //console.log(response.data);
      //     if (response.data.success){
      //     //如果data裡的success是true就執行這個行為
      //         this.$router.push('/admin/products')
      //     }else{
      //       alert('輸入帳號密碼錯誤');
      //     }
      //   });
      // }
    }
  };
</script>
<style scoped lang="scss"></style>