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

      <!-- 關卡地圖 -->
      <transition
        type="transition"
        name="fade"
        enter-active-class="animated swing fade-enter-active"
        leave-active-class="animated bounce fade-leave-active"
      >
        <main>
          <div v-if="1">
            <div id="story">
              <h2>DK STORY CORNER</h2>
              <div class="story_content">
                <div class="item">
                  <img
                    src="/images/theater/stories.svg"
                    alt="img"
                  >
                  <div class="text">
                    SB Stories
                  </div>
                </div>
                <div
                  style="background-color: #f4c88e"
                  class="item"
                >
                  <img
                    src="/images/theater/videos.svg"
                    alt="img"
                  >
                  <div class="text">
                    Reader Videos
                  </div>
                </div>
                <div
                  style="background-color: #ee9f6c"
                  class="item"
                >
                  <img
                    src="/images/theater/songs.svg"
                    alt="img"
                  >
                  <div class="text">
                    DK Songs
                  </div>
                </div>
              </div>
            </div>
            <div id="portfolio">
              <h2>MY PORTFOLIO</h2>
              <div class="portfolio_content">
                <div
                  style="background-color: #df544b"
                  class="item"
                >
                  <img
                    src="/images/theater/doodle.svg"
                    alt="img"
                  >
                  <div class="text">
                    Draw & Doodle
                  </div>
                </div>
                <div
                  style="background-color: #b15177"
                  class="item"
                >
                  <img
                    src="/images/theater/story.svg"
                    alt="img"
                  >
                  <div class="text">
                    My Story
                    <span>Level 1-3 only</span>
                  </div>
                </div>
                <div
                  style="background-color: #af87ba"
                  class="item"
                >
                  <img
                    src="/images/theater/story+.svg"
                    alt="img"
                  >
                  <div class="text">
                    My Story +
                    <span>Level 4-7 only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="0">
            <div id="stories">
              <div id="stories_main">
                <video controls>
                  <source
                    src="/video/sky2408.mp4"
                    type="video/mp4"
                  >
                </video>
              </div>
              <div id="stories_side">
                <div class="item">
                  <div class="title">
                    Three little pigs
                  </div>
                  <div class="bottom">
                    <div class="video">
                      <video
                        poster="https://img.ltn.com.tw/Upload/playing/page/2020/01/03/200103-22003-01-tCqMM.jpg"
                      />
                    </div>
                    <div class="text">
                      Author :<br>McJordon
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="title">
                    Three little pigs
                  </div>
                  <div class="bottom">
                    <div class="video">
                      <video
                        poster="https://img.ltn.com.tw/Upload/playing/page/2020/01/03/200103-22003-01-tCqMM.jpg"
                      />
                    </div>
                    <div class="text">
                      Author :<br>McJordon
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="title">
                    Three little pigs
                  </div>
                  <div class="bottom">
                    <div class="video">
                      <video
                        poster="https://img.ltn.com.tw/Upload/playing/page/2020/01/03/200103-22003-01-tCqMM.jpg"
                      />
                    </div>
                    <div class="text">
                      Author :<br>McJordon
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="title">
                    Three little pigs
                  </div>
                  <div class="bottom">
                    <div class="video">
                      <video
                        poster="https://img.ltn.com.tw/Upload/playing/page/2020/01/03/200103-22003-01-tCqMM.jpg"
                      />
                    </div>
                    <div class="text">
                      Author :<br>McJordon
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="title">
                    Three little pigs
                  </div>
                  <div class="bottom">
                    <div class="video">
                      <video
                        poster="https://img.ltn.com.tw/Upload/playing/page/2020/01/03/200103-22003-01-tCqMM.jpg"
                      />
                    </div>
                    <div class="text">
                      Author :<br>McJordon
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="title">
                    Three little pigs
                  </div>
                  <div class="bottom">
                    <div class="video">
                      <video
                        poster="https://img.ltn.com.tw/Upload/playing/page/2020/01/03/200103-22003-01-tCqMM.jpg"
                      />
                    </div>
                    <div class="text">
                      Author :<br>McJordon
                    </div>
                  </div>
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
    return {};
  },
  async created() {
    await this.loading();
  },
  methods: {
    loading() {
      this.$store.state.isLoading = true;
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
#story,
#portfolio {
  border: 10px solid #18a3b4;
  border-radius: 15px;
  padding: 30px 15px;
  position: relative;
  h2 {
    position: absolute;
    color: #107b9e;
    font-size: 72px;
    top: -52px;
    left: 30px;
    background-color: #fff;
    padding-left: 15px;
    padding-right: 15px;
  }
  .story_content,
  .portfolio_content {
    display: flex;
    justify-content: space-evenly;
    .item {
      width: 30%;
      background-color: #18a3b4;
      padding: 15px 30px 85px 30px;
      box-sizing: border-box;
      text-decoration: none;
      position: relative;
      cursor: pointer;
      img {
        max-width: 100px;
        // margin-right: auto;
        height: 100px;
        padding: 0;
      }
      .text {
        text-align: center;
        color: #fff;
        font-size: 32px;
        position: absolute;
        bottom: 15px;
        left: 0;
        right: 0;
        span {
          font-size: 14px;
          color: #fff9b1;
          display: block;
          margin-top: 10px;
        }
      }
      &:hover{
        -webkit-filter: opacity(.7);
      }
    }
  }
}
#portfolio {
  margin-top: 30px;
  border-color: #5e4280;
  h2 {
    color: #5e4280;
    top: unset;
    bottom: -52px;
    left: unset;
    right: 30px;
  }
  .portfolio_content {
  }
}
#stories {
  height: 539px;
  width: 100%;
  background: #75b6d9;
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  #stories_main {
    width: calc(100% - 250px);
    video {
      width: 100%;
      padding-right: 15px;
      box-sizing: border-box;
    }
  }
  #stories_side {
    width: 250px;
    overflow-y: auto;
    box-sizing: border-box;
    padding-right: 15px;
    .item {
      border-radius: 5px;
      overflow: hidden;
      background-color: #bdd7f0;
      color: #107b9e;
      margin-bottom: 10px;
      .title {
        background-color: #107b9e;
        line-height: 35px;
        text-align: center;
        color: #fff;
      }
      .bottom {
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        align-items: center;
        .video {
          width: 50%;
          position: relative;
          &::before {
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            content: "\f144";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 32px;
            background-color: #fff;
            border-radius: 999px;
            overflow: hidden;
          }
          video {
            width: 100%;
            height: 65px;
            background-color: #000;
          }
        }
        .text {
          width: 50%;
          box-sizing: border-box;
          padding-left: 15px;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>