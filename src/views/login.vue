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
<style scoped lang="scss">
  body {
    position: relative;

    #login {
      .wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        h1 {
          font-size: 48px;
          line-height: 1.5;
          font-weight: bolder;
          text-align: center;

          @media screen and (max-width: 768px) {
            font-size: 32px;
          }

          span {
            display: block;

            @media screen and (max-width: 768px) {
              display: inline-block;
            }
          }
        }

        .form {
          margin-left: auto;
          margin-right: auto;
          background-color: #00AEB8;
          width: 320px;
          padding: 30px;

          @media screen and (max-width: 768px) {
            width: 280px;
            margin-left: 15px;
            margin-right: 15px;
          }

          input {
            display: block;
            width: 100%;
            height: 48px;
            box-sizing: border-box;
            margin-bottom: 7.5px;
            padding-left: 15px;
            padding-right: 15px;
            font-size: 24px;
            border-radius: 5px;
            border: 3px solid #3A4864;

            @media screen and (max-width: 768px) {
              border: 2px solid #3A4864;
              height: 37px;
              font-size: 18px;
            }

            &::placeholder {
              color: #00AEB8;
            }
          }

          p {
            padding-top: 7.5px;
            margin-bottom: 15px;
          }

          button {
            width: 100%;
            box-sizing: border-box;
            height: 45px;
            font-size: 24px;
            font-weight: bolder;
            border-radius: 5px;
            background-color: #F5D096;
            border: none;
            color: #fff;

            @media screen and (max-width: 768px) {
              height: 35px;
              font-size: 18px;
            }
          }
        }

      }
    }
  }
</style>