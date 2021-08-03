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
                <button>Story</button>
                <button>Lotters</button>
                <button>Vocabulary</button>
                <button>SentencePattern</button>
              </div>

              <div class="c10">
                <button>L1</button>
                <button>L2</button>
                <button>L3</button>
                <button>L4</button>
              </div>

              <div class="c45">
                <div class="row">
                  <div class="c70">
                    <button>U1-5</button>
                    <button>U6-10</button>
                    <button>U11-15</button>
                  </div>

                  <div class="c30">
                    <button>3</button>
                    <button>5</button>
                    <button>10</button>
                  </div>
                </div>
              </div>

              <button class="send">START</button>
            </div>
            <div id="choose_game" v-if="0">
              <div class="item">
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <div class="item">
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <div class="item">
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <div class="item">
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <div class="item">
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
              <div class="item">
                <img
                  src="https://img.ltn.com.tw/Upload/3c/page/2020/04/15/200415-40113-1.png"
                  alt="game"
                />
              </div>
            </div>
            <div id="instruction">
              <img class="helper" src="/images/helper.svg" alt="helper" />
              <div class="content">
                <div class="item">
                  <h2>Eye protection reminder</h2>
                  <p>
                    Boy, you have been playing for 30 minutes, so let your
                    little eyes rest.
                  </p>
                </div>
                <div class="item">
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
      unit: 1,
      level: 1,
    };
  },
  created() {},
  methods: {
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
#level_selection .row {
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
  h1 {
    text-align: center;
    font-size: 72px;
    margin-bottom: 50px;
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

  button.send {
    margin-top: 50px;
    background-color: #d7574e;
    box-sizing: border-box;
    border: 3px solid transparent;
  }

  button.send:hover {
    background-color: #fff;
    color: #d7574e;
    border: 3px solid #d7574e;
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
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
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
      transform: scale(1.05);
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
        padding-top: 50px;
        padding-bottom: 50px;
      }
      ul.x2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 600px;
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

          &:hover{
            background-color: #107b9e;
          }
        }
      }
    }
  }
}
</style>