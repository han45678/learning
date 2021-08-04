<template>
  <transition
    type="transition"
    name="fade"
    enter-active-class="animated swing fade-enter-active"
    leave-active-class="animated bounce fade-leave-active"
  >
    <div id="game_levels">
      <VueLoading />

      <VueHeader />

      <transition
        type="transition"
        name="fade"
        enter-active-class="animated swing fade-enter-active"
        leave-active-class="animated bounce fade-leave-active"
      >
        <main>
          <h1 v-if="0">PLAYGROUND</h1>
          <div id="level_selection">
            <div class="row" v-if="0">
              <div class="c45">
                <button :class="{ active: unit == 1 }" @click="unit = 1">
                  Story
                </button>
                <button :class="{ active: unit == 2 }" @click="unit = 2">
                  Lotters
                </button>
                <button :class="{ active: unit == 3 }" @click="unit = 3">
                  Vocabulary
                </button>
                <button :class="{ active: unit == 4 }" @click="unit = 4">
                  SentencePattern
                </button>
              </div>

              <div class="c10">
                <button :class="{ active: level == 1 }" @click="level = 1">
                  L1
                </button>
                <button :class="{ active: level == 2 }" @click="level = 2">
                  L2
                </button>
                <button :class="{ active: level == 3 }" @click="level = 3">
                  L3
                </button>
                <button :class="{ active: level == 4 }" @click="level = 4">
                  L4
                </button>
              </div>

              <div class="c45">
                <div class="row">
                  <div class="c70">
                    <button
                      :class="{ active: unit_quantity == 1 }"
                      @click="unit_quantity = 1"
                    >
                      U1-5
                    </button>
                    <button
                      :class="{ active: unit_quantity == 2 }"
                      @click="unit_quantity = 2"
                    >
                      U6-10
                    </button>
                    <button
                      :class="{ active: unit_quantity == 3 }"
                      @click="unit_quantity = 3"
                    >
                      U11-15
                    </button>
                  </div>

                  <div class="c30">
                    <button
                      :class="{ active: quantity == 1 }"
                      @click="quantity = 1"
                    >
                      3
                    </button>
                    <button
                      :class="{ active: quantity == 2 }"
                      @click="quantity = 2"
                    >
                      5
                    </button>
                    <button
                      :class="{ active: quantity == 3 }"
                      @click="quantity = 3"
                    >
                      10
                    </button>
                  </div>
                </div>
              </div>

              <transition
                type="transition"
                name="fade"
                enter-active-class="animated swing fade-enter-active"
                leave-active-class="animated bounce fade-leave-active"
              >
                <button
                  v-if="
                    this.unit !== 0 &&
                    this.level !== 0 &&
                    this.unit_quantity !== 0 &&
                    this.quantity !== 0
                  "
                  class="send"
                >
                  START
                </button>
              </transition>
            </div>
            <div id="choose_game" v-if="0">
              <div
                class="item"
                :class="{ active: game == 1 }"
                @click="game = 1"
              >
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <div
                class="item"
                :class="{ active: game == 2 }"
                @click="game = 2"
              >
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <div
                class="item"
                :class="{ active: game == 3 }"
                @click="game = 3"
              >
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <div
                class="item"
                :class="{ active: game == 4 }"
                @click="game = 4"
              >
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <div
                class="item"
                :class="{ active: game == 5 }"
                @click="game = 5"
              >
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <div
                class="item"
                :class="{ active: game == 6 }"
                @click="game = 6"
              >
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <transition
                type="transition"
                name="fade"
                enter-active-class="animated swing fade-enter-active"
                leave-active-class="animated bounce fade-leave-active"
              >
                <button class="send">START</button>
              </transition>
            </div>
            <div id="instruction">
              <img class="helper" src="/images/helper.svg" alt="helper" />
              <div class="content">
                <button class="prev" @click="prev">
                  <i class="fas fa-angle-left"></i>
                </button>
                <div class="item" v-show="this.instruction_page == 1">
                  <h2>Eye protection reminder</h2>
                  <p>
                    Boy, you have been playing for 30 minutes, so let your
                    little eyes rest.
                  </p>
                </div>
                <div class="item" v-show="this.instruction_page == 2">
                  <h3>HOW TO PLAY</h3>
                  <ul class="x2">
                    <li>
                      <span>1</span>
                      <img src="/images/game/eye.svg" alt="img" />
                    </li>
                    <li>
                      <span>2</span>
                      <img src="/images/game/clock.svg" alt="img" />
                    </li>
                  </ul>
                </div>
                <div class="item" v-show="this.instruction_page == 3">
                  <h3>HOW TO PLAY</h3>
                  <ul class="x4">
                    <li>
                      <span>1</span>
                      <img src="/images/game/eye.svg" alt="img" />
                    </li>
                    <li>
                      <span>2</span>
                      <img src="/images/game/clock.svg" alt="img" />
                    </li>
                    <li>
                      <span>3</span>
                      <img src="/images/game/clock.svg" alt="img" />
                    </li>
                    <li>
                      <span>4</span>
                      <img src="/images/game/clock.svg" alt="img" />
                    </li>
                  </ul>
                  <button id="go">GO it</button>
                </div>
                <button class="next" @click="next">
                  <i class="fas fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
      </transition>

      <VueFooter />
    </div>
  </transition>
</template>

<script>
import VueLoading from "./include/loading";
import VueHeader from "./include/header";
import VueFooter from "./include/footer";

export default {
  components: {
    VueLoading,
    VueHeader,
    VueFooter,
  },
  data() {
    return {
      unit: 0,
      level: 0,
      unit_quantity: 0,
      quantity: 0,
      game: 0,
      instruction_page: 1,
    };
  },
  created() {},
  methods: {
    prev() {
      let max_next = document.querySelectorAll("#instruction .content .item").length;
      if (this.instruction_page === 1) {
        this.instruction_page = max_next;
      } else {
        this.instruction_page--;
      }
    },
    next() {
      let max_next = document.querySelectorAll("#instruction .content .item").length;

      if (this.instruction_page === max_next) {
        this.instruction_page = 1;
      } else {
        this.instruction_page++;
      }
    },
  },
  computed: {
    mag() {
      return this.$store.state.mag;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-size: 72px;
  margin-bottom: 15px;
}
button.send {
  cursor: pointer;
  background-color: #d7574e;
  box-sizing: border-box;
  border: 3px solid transparent;
  width: 100%;
  line-height: 45px;
  color: #fff;
  font-size: 32px;
  margin-top: 7.5px;
}

button.send:hover {
  background-color: #fff;
  color: #d7574e;
  border: 3px solid #d7574e;
}
#level_selection {
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    .c70 {
      width: calc(70% - 3.75px);
    }

    .c30 {
      width: calc(30% - 3.75px);
    }

    .c45 {
      width: calc(45% - 3.75px);
    }

    .c10 {
      width: calc(10% - 3.75px);
    }

    button {
      width: 100%;
      margin-bottom: 7.5px;
      background-color: #107b9e;
      border: none;
      color: #fff;
      font-size: 32px;
      border-radius: 5px;
      line-height: 75px;
      cursor: pointer;
    }

    button.active {
      background-color: #17a6af;
    }
  }
}

#choose_game {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: calc(33% - 7.5px);
    height: 0;
    padding-bottom: 20%;
    margin-bottom: 15px;
    background-color: #ccc;
    position: relative;
    box-shadow: 0px 0px 5px 3px #b2b2b2;
    overflow: hidden;
    cursor: pointer;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin: auto;
    }
    &::before {
      position: absolute;
      content: "";
      border: #fff 10px solid;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      z-index: 1;
    }
    &:hover img {
      transform: translate(-50%, -50%) scale(1.05);
    }
    &.active {
      &::after {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f058";
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 81px;
        color: #82c91e;
      }
      img {
        filter: brightness(0.5);
      }
    }
  }
}

#instruction {
  border: 3px solid #231815;
  background-color: #7a7a7a;
  border-radius: 15px;
  max-width: 965px;
  margin-left: auto;
  margin-right: auto;
  height: 564px;
  position: relative;
  overflow: hidden;
  .helper {
    width: 335px;
    position: absolute;
    right: -65px;
    bottom: -50px;
    z-index: 1;
  }
  .content {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 5px;
    left: 10px;
    top: 10px;
    background-color: #e2f2ef;
    border: 1px solid #231815;
    overflow-y: auto;
    overflow-x: hidden;
    .item {
      height: 100%;
      h2 {
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
        font-size: 64px;
      }
      p {
        padding-left: 100px;
        padding-right: 100px;
        font-size: 32px;
        line-height: 1.5;
      }
      h3 {
        text-align: center;
        font-size: 48px;
        padding-top: 35px;
        padding-bottom: 50px;
      }
      ul.x2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;

        li {
          width: calc(50% - 15px);
          padding-bottom: 46.43%;
          position: relative;
          border: 3px solid #107b9e;
          border-radius: 10px;
          margin-top: 45px;
          cursor: pointer;

          span {
            position: absolute;
            top: -45px;
            width: 25px;
            height: 25px;
            text-align: center;
            line-height: 25px;
            background-color: #107b9e;
            color: #fff;
            border-radius: 999px;
          }

          img {
            width: 100%;
            max-height: 195px;
            max-width: 195px;
            box-sizing: border-box;
            margin: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 15px;
          }

          &:hover {
            background-color: #107b9e;
          }
        }
      }
      ul.x4 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;

        li {
          width: calc(25% - 15px);
          padding-bottom: 23.126%;
          position: relative;
          border: 3px solid #107b9e;
          border-radius: 10px;
          margin-top: 45px;
          cursor: pointer;

          span {
            position: absolute;
            top: -45px;
            width: 25px;
            height: 25px;
            text-align: center;
            line-height: 25px;
            background-color: #107b9e;
            color: #fff;
            border-radius: 999px;
          }

          img {
            width: 100%;
            max-height: 195px;
            max-width: 195px;
            box-sizing: border-box;
            margin: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 15px;
          }

          &:hover {
            background-color: #107b9e;
          }
        }
      }
    }
  }
}

.next,
.prev {
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  width: 50px;
  height: 50px;
  line-height: 44px;
  border-radius: 99px;
  border: 3px solid #107b9e;
  color: #107b9e;
  background-color: transparent;
}
.prev {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.next {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}

#go {
  cursor: pointer;
  width: 120px;
  line-height: 39px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-size: 24px;
  background-color: #107b9e;
  border: none;
  color: #fff;
  border-radius: 5px;
  border: 3px solid transparent;
  &:hover {
    border: 3px solid #107b9e;
    background-color: #fff;
    color: #107b9e;
  }
}
</style>