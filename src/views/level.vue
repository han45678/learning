<template>
  <div id="level">
    <div class="wrapper">
      <div class="identity">
        <div
          class="item student"
          :class="{ active: identity == 1 }"
          @click="student"
        >
          Student
        </div>
        <div
          class="item parent"
          :class="{ active: identity == 2 }"
          @click="parent"
        >
          Parent
        </div>
      </div>
      <h2 v-if="identity !== 2 && identity !== 0">Level</h2>
      <ul v-if="identity !== 2 && identity !== 0">
        <li :class="{ active: level == 1 }" @click="this.level_1">1</li>
        <li :class="{ active: level == 2 }" @click="this.level_2">2</li>
        <li :class="{ active: level == 3 }" @click="this.level_3">3</li>
        <li :class="{ active: level == 4 }" @click="this.level_4">4</li>
        <li :class="{ active: level == 5 }" @click="this.level_5">5</li>
        <li :class="{ active: level == 6 }" @click="this.level_6">6</li>
        <li :class="{ active: level == 7 }" @click="this.level_7">7</li>
      </ul>

      <!-- 學生登入 -->
      <button
        v-if="identity == 1 && level !== 0"
        class="button student"
        @click="start"
      >
        START !
      </button>

      <!-- 家長登入 -->
      <button v-if="identity == 2" class="button parent" @click="start">
        START !
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      identity: 0,
      level: 0,
    };
  },
  async created() {
    this.loading();
  },
  methods: {
    loading() {
      this.$store.state.isLoading = true;
    },
    start() {
      if (this.identity === 1) {
        // this.$store.state.identity = this.identity;
        // this.$store.state.level = this.level;
        this.$store.commit('SET_IS_LOADING', true);
        this.$store.commit('SET_USER_INFO', {
          username: this.$store.state.username,
          password: this.$store.state.password,
          identity: this.identity,
          level: this.level,
        });
        
        localStorage.setItem('info', JSON.stringify({
          isLoading: false,
          // helper: true,  
          username: this.$store.state.username,
          password: this.$store.state.password,
          identity: this.identity,
          level: this.level,
        }));
        // console.log(this.$store.state.username,this.$store.state.password,this.identity,this.level)
        this.$swal(
          "進入Level" + this.level,
          "開始學習囉!",
          "success"
        );
        this.$router.push("/");
      } else {
        this.$swal("<b>抱歉</b>!", "家長模式尚未完成", "error");
      }
    },
    student() {
      this.identity = 1;
    },
    parent() {
      this.identity = 2;
      this.level = 0;
    },
    level_1() {
      this.level = 1;
    },
    level_2() {
      this.level = 2;
    },
    level_3() {
      this.level = 3;
    },
    level_4() {
      this.level = 4;
    },
    level_5() {
      this.level = 5;
    },
    level_6() {
      this.level = 6;
    },
    level_7() {
      this.level = 7;
    },
  },
  computed: {},
};
</script>