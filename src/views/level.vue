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
      <router-link
        to="/"
        v-if="identity == 1 && level !== 0"
        class="button student"
        >START !</router-link
      >
      <router-link to="/level" v-if="identity == 2" class="button parent"
        >START !</router-link
      >
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
  methods: {
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
};
</script>