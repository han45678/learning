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
          <!-- <div v-if="0"></div> -->
          <!-- 小劇場選單 -->
          <div v-if="theater_menu === 0">
            <div id="story">
              <h2>DK STORY CORNER</h2>
              <div class="story_content">
                <div
                  class="item"
                  @click="theater_menu = 1"
                >
                  <img
                    src="images/theater/stories.svg"
                    alt="img"
                  >
                  <div class="text">
                    SB Stories
                  </div>
                  <div
                    class="background"
                    style="background-color: #18a3b4"
                  />
                </div>
                <div
                  class="item"
                  @click="theater_menu = 2"
                >
                  <img
                    src="images/theater/videos.svg"
                    alt="img"
                  >
                  <div class="text">
                    Reader Videos
                  </div>
                  <div
                    class="background"
                    style="background-color: #f4c88e"
                  />
                </div>
                <div
                  class="item"
                  @click="theater_menu = 3"
                >
                  <img
                    src="images/theater/songs.svg"
                    alt="img"
                  >
                  <div class="text">
                    DK Songs
                  </div>
                  <div
                    class="background"
                    style="background-color: #ee9f6c"
                  />
                </div>
              </div>
            </div>
            <div id="portfolio">
              <h2>MY PORTFOLIO</h2>
              <div class="portfolio_content">
                <div
                  class="item"
                  @click="
                    theater_menu = 4;
                    max_cs_sigh = 3;
                    cs_sigh = 1;
                  "
                >
                  <img
                    src="images/theater/doodle.svg"
                    alt="img"
                  >
                  <div class="text">
                    Draw & Doodle
                  </div>
                  <div
                    class="background"
                    style="background-color: #df544b"
                  />
                </div>
                <div
                  class="item"
                  @click="
                    theater_menu = 5;
                    max_cs_sigh = 4;
                    cs_sigh = 1;
                  "
                >
                  <img
                    src="images/theater/story.svg"
                    alt="img"
                  >
                  <div class="text">
                    My Story
                    <span>Level 1-3 only</span>
                  </div>
                  <div
                    class="background"
                    style="background-color: #b15177"
                  />
                </div>
                <div
                  class="item"
                  @click="
                    theater_menu = 6;
                    max_cs_sigh = 4;
                    cs_sigh = 1;
                  "
                >
                  <img
                    src="images/theater/story+.svg"
                    alt="img"
                  >
                  <div class="text">
                    My Story +
                    <span>Level 4-7 only</span>
                  </div>
                  <div
                    class="background"
                    style="background-color: #af87ba"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- 選單內容 -->
          <div v-if="theater_menu === 1">
            <div id="stories">
              <div
                id="stories_main"
                v-html="videoSource"
              />
              <div id="stories_side">
                <div
                  class="item"
                  v-for="(item, index) in myVideo"
                  :key="index"
                  @click="video_play(index)"
                >
                  <div class="title">
                    {{ item.title }}
                  </div>
                  <div class="bottom">
                    <div class="video">
                      <video :poster="item.photo" />
                    </div>
                    <div class="text">
                      Author : <br>{{ item.content_text }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="theater_menu === 2">
            <div id="videos">
              <div
                id="stories_main"
                v-html="videoSource"
              />
              <div id="stories_side">
                <div
                  class="item"
                  v-for="(item, index) in myVideo"
                  :key="index"
                  @click="video_play(index)"
                >
                  <div class="title">
                    {{ item.title }}
                  </div>
                  <div class="bottom">
                    <div class="video">
                      <video :poster="item.photo" />
                    </div>
                    <div class="text">
                      Author : <br>{{ item.content_text }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="theater_menu === 3">
            <div id="songs">
              <div
                id="stories_main"
                v-html="videoSource"
              />
              <div id="stories_side">
                <div
                  class="item"
                  v-for="(item, index) in myVideo"
                  :key="index"
                  @click="video_play(index)"
                >
                  <div class="title">
                    {{ item.title }}
                  </div>
                  <div class="bottom">
                    <div class="video">
                      <video :poster="item.photo" />
                    </div>
                    <div class="text">
                      Author : <br>{{ item.content_text }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- v-if="theater_menu === 4" this.video[0].video -->
          <div v-if="theater_menu === 4">
            <div id="coloring_schedule">
              <button
                id="prev"
                @click="cs_sigh_prev"
              >
                Prev
              </button>
              <ul>
                <li :class="{ active: this.cs_sigh === 1 }">
                  1
                </li>
                <li :class="{ active: this.cs_sigh === 2 }">
                  2
                </li>
                <li :class="{ active: this.cs_sigh === 3 }">
                  3
                </li>
                <!-- <li :class="{ active: this.cs_sigh === 4 }">4</li> -->
              </ul>
              <button
                id="next"
                @click="cs_sigh_next"
              >
                Next
              </button>
            </div>
            <div
              id="coloring_menu"
              v-if="cs_sigh === 1"
            >
              <div
                class="item"
                :class="{ active: coloring_item === 1 }"
                @click="coloring_item = 1"
              >
                <div class="photo">
                  <img
                    src="http://tw.maminews.com/img/pictures/2019/04/1555043287e6.jpg"
                    alt="img"
                  >
                </div>
                <div class="text">
                  The Three Little Pigs
                </div>
              </div>
              <div
                class="item"
                :class="{ active: coloring_item === 2 }"
                @click="coloring_item = 2"
              >
                <div class="photo">
                  <img
                    src="http://tw.maminews.com/img/pictures/2019/04/1555043287e6.jpg"
                    alt="img"
                  >
                </div>
                <div class="text">
                  The Three Little Pigs
                </div>
              </div>
              <div
                class="item"
                :class="{ active: coloring_item === 3 }"
                @click="coloring_item = 3"
              >
                <div class="photo">
                  <img
                    src="http://tw.maminews.com/img/pictures/2019/04/1555043287e6.jpg"
                    alt="img"
                  >
                </div>
                <div class="text">
                  The Three Little Pigs
                </div>
              </div>
            </div>
            <!-- 選單下層內容 -->
            <div v-if="cs_sigh === 2">
              <div id="coloring_content">
                <div class="coloring_pen">
                  <ul>
                    <li>
                      <img
                        src="images/theater/pen1.svg"
                        alt="pen"
                      >
                    </li>
                    <li>
                      <img
                        src="images/theater/pen2.svg"
                        alt="pen"
                      >
                    </li>
                    <li>
                      <img
                        src="images/theater/pen3.svg"
                        alt="pen"
                      >
                    </li>
                  </ul>
                </div>
                <div class="coloring_main">
                  <img
                    src="https://d.ecimg.tw/items/DECU1LA900AGYB4/i010003_1579152548.jpg"
                    alt="img"
                  >
                </div>
              </div>
              <div />
            </div>
            <div v-if="cs_sigh === 3">
              <div
                id="coloring_content"
                style="position: relative"
              >
                <div class="coloring_pen">
                  <ul>
                    <li>
                      <img
                        src="images/theater/pen1.svg"
                        alt="pen"
                      >
                    </li>
                    <li>
                      <img
                        src="images/theater/pen2.svg"
                        alt="pen"
                      >
                    </li>
                    <li>
                      <img
                        src="images/theater/pen3.svg"
                        alt="pen"
                      >
                    </li>
                  </ul>
                </div>
                <div class="coloring_main">
                  <img
                    src="https://d.ecimg.tw/items/DECU1LA900AGYB4/i010003_1579152548.jpg"
                    alt="img"
                  >
                  <button
                    style="
                      position: absolute;
                      width: 120px;
                      height: 80px;
                      border-radius: 999px;
                      border: 5px solid #fff;
                      background-color: #d7574e;
                      color: #fff;
                      font-size: 20px;
                      box-shadow: 0px 0px 3px #7d7d7d;
                      left: calc(50% - 120px - 15px);
                      bottom: 15px;
                    "
                  >
                    share
                  </button>
                  <button
                    style="
                      position: absolute;
                      width: 120px;
                      height: 80px;
                      border-radius: 999px;
                      border: 5px solid #fff;
                      background-color: #d7574e;
                      color: #fff;
                      font-size: 20px;
                      box-shadow: 0px 0px 3px #7d7d7d;
                      right: calc(50% - 120px - 15px);
                      bottom: 15px;
                    "
                  >
                    download
                  </button>
                </div>
              </div>
              <div />
            </div>
          </div>
          <div v-if="theater_menu === 5">
            <div
              id="coloring_schedule"
              :class="{ story: theater_menu === 5 }"
            >
              <button
                id="prev"
                @click="cs_sigh_prev"
              >
                Prev
              </button>
              <ul>
                <li :class="{ active: this.cs_sigh === 1 }">
                  1
                </li>
                <li :class="{ active: this.cs_sigh === 2 }">
                  2
                </li>
                <li :class="{ active: this.cs_sigh === 3 }">
                  3
                </li>
                <li :class="{ active: this.cs_sigh === 4 }">
                  4
                </li>
              </ul>
              <button
                id="next"
                @click="cs_sigh_next"
              >
                Next
              </button>
            </div>
            <div
              id="coloring_menu"
              v-if="cs_sigh === 1"
              :class="{
                story2: theater_menu === 5,
                story: theater_menu === 5,
              }"
            >
              <div
                class="item"
                :class="{ active: coloring_item === 1 }"
                @click="coloring_item = 1"
              >
                <div class="photo">
                  <img
                    src="http://tw.maminews.com/img/pictures/2019/04/1555043287e6.jpg"
                    alt="img"
                  >
                </div>
                <div class="text">
                  The Three Little Pigs
                </div>
              </div>
              <div
                class="item"
                :class="{ active: coloring_item === 2 }"
                @click="coloring_item = 2"
              >
                <div class="photo">
                  <img
                    src="http://tw.maminews.com/img/pictures/2019/04/1555043287e6.jpg"
                    alt="img"
                  >
                </div>
                <div class="text">
                  The Three Little Pigs
                </div>
              </div>
              <div
                class="item"
                :class="{ active: coloring_item === 3 }"
                @click="coloring_item = 3"
              >
                <div class="photo">
                  <img
                    src="http://tw.maminews.com/img/pictures/2019/04/1555043287e6.jpg"
                    alt="img"
                  >
                </div>
                <div class="text">
                  The Three Little Pigs
                </div>
              </div>
            </div>
            <!-- 選單下層內容 -->
            <div v-if="cs_sigh === 2">
              <img
                src="images/story1.png"
                alt="story_p"
                style="
                  max-height: 555px;
                  width: auto;
                  margin: auto;
                  display: block;
                "
              >
            </div>
            <div v-if="cs_sigh === 3">
              <img
                src="images/story2.png"
                alt="story_p"
                style="
                  max-height: 555px;
                  width: auto;
                  margin: auto;
                  display: block;
                "
              >
            </div>
            <div v-if="cs_sigh === 4">
              <img
                src="images/story3.png"
                alt="story_p"
                style="
                  max-height: 555px;
                  width: auto;
                  margin: auto;
                  display: block;
                "
              >
            </div>
          </div>
          <div v-if="theater_menu === 6">
            <div
              id="coloring_schedule"
              :class="{ story_p: theater_menu === 6 }"
            >
              <button
                id="prev"
                @click="cs_sigh_prev"
              >
                Prev
              </button>
              <ul>
                <li :class="{ active: this.cs_sigh === 1 }">
                  1
                </li>
                <li :class="{ active: this.cs_sigh === 2 }">
                  2
                </li>
                <li :class="{ active: this.cs_sigh === 3 }">
                  3
                </li>
                <li :class="{ active: this.cs_sigh === 4 }">
                  4
                </li>
              </ul>
              <button
                id="next"
                @click="cs_sigh_next"
              >
                Next
              </button>
            </div>
            <div
              id="coloring_menu"
              v-if="cs_sigh === 1"
              :class="{
                story2: theater_menu === 6,
                story_p: theater_menu === 6,
              }"
            >
              <div
                class="item"
                :class="{ active: coloring_item === 1 }"
                @click="coloring_item = 1"
              >
                <div class="photo">
                  <img
                    src="http://tw.maminews.com/img/pictures/2019/04/1555043287e6.jpg"
                    alt="img"
                  >
                </div>
                <div class="text">
                  The Three Little Pigs
                </div>
              </div>
              <div
                class="item"
                :class="{ active: coloring_item === 2 }"
                @click="coloring_item = 2"
              >
                <div class="photo">
                  <img
                    src="http://tw.maminews.com/img/pictures/2019/04/1555043287e6.jpg"
                    alt="img"
                  >
                </div>
                <div class="text">
                  The Three Little Pigs
                </div>
              </div>
              <div
                class="item"
                :class="{ active: coloring_item === 3 }"
                @click="coloring_item = 3"
              >
                <div class="photo">
                  <img
                    src="http://tw.maminews.com/img/pictures/2019/04/1555043287e6.jpg"
                    alt="img"
                  >
                </div>
                <div class="text">
                  The Three Little Pigs
                </div>
              </div>
            </div>
            <!-- 選單下層內容 -->
            <div v-if="cs_sigh === 2">
              <img
                src="images/story_p1.png"
                alt="story_p"
                style="
                  max-height: 555px;
                  width: auto;
                  margin: auto;
                  display: block;
                "
              >
            </div>
            <div v-if="cs_sigh === 3">
              <img
                src="images/story_p2.png"
                alt="story_p"
                style="
                  max-height: 555px;
                  width: auto;
                  margin: auto;
                  display: block;
                "
              >
            </div>
            <div v-if="cs_sigh === 4">
              <img
                src="images/story_p3.png"
                alt="story_p"
                style="
                  max-height: 555px;
                  width: auto;
                  margin: auto;
                  display: block;
                "
              >
            </div>
          </div>
        </main>
      </transition>

      <!-- 返回 -->
      <div
        v-if="theater_menu > 0"
        id="return"
        @click="prev"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 73.41 73.41"
        >
          <g>
            <path
              class="cls-1"
              d="M36.7,71.41h0A34.81,34.81,0,0,1,2,36.7H2A34.81,34.81,0,0,1,36.7,2h0A34.81,34.81,0,0,1,71.41,36.7h0A34.81,34.81,0,0,1,36.7,71.41Z"
            />
            <path
              class="cls-2"
              d="M49.88,31.51c-3.47-3.8-9.37-5.91-15.05-6.29V16.14L13,33.12l21.83,17V39.71c16.59,0,19.24,13,19.85,17.56h.86C55.87,54.55,57.28,39.61,49.88,31.51Z"
            />
          </g>
        </svg>
      </div>

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
      theater_menu: 0,
      coloring_schedule: 1,
      cs_sigh: 1,
      max_cs_sigh: 3,
      myVideo: [],
      play_video: "",
      coloring_item: 0,
    };
  },
  async created() {
    await this.loading();
    await this.video_data();
    // await this.video_play()
  },
  methods: {
    loading() {
      this.$store.state.isLoading = true;
    },
    prev() {
      this.theater_menu = 0;
    },
    cs_sigh_prev() {
      if (this.cs_sigh === 1) {
        this.cs_sigh = 1;
      } else {
        this.cs_sigh--;
      }
    },
    cs_sigh_next() {
      if (this.cs_sigh === this.max_cs_sigh) {
        this.cs_sigh = this.max_cs_sigh;
      } else {
        if (this.coloring_item === 0) {
          this.$swal("<b>錯誤</b>", "您尚未選擇", "error");
        } else {
          this.cs_sigh++;
        }
      }
    },
    video_data() {
      this.$axios
        .get("json/theater_video.json")
        .then((res) => (this.myVideo = res.data))
        .then((res) => (this.play_video = res[0].video))
        //<source :src="play_video" type="video/mp4" />
        // .then(function (res) {
        //   console.log(res);
        // })
        .catch(function (error) {
          console.log(error);
        });
    },
    video_play(index) {
      this.play_video = this.myVideo[index].video;
    },
  },
  computed: {
    // 计算属性的 getter
    videoSource: function () {
      // `this` 指向 vm 实例
      return `<video controls><source src="${this.play_video}" type="video/mp4"></video>`;
    },
  },
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
        position: relative;
        z-index: 2;
      }
      .text {
        text-align: center;
        color: #fff;
        font-size: 32px;
        position: absolute;
        bottom: 15px;
        left: 0;
        right: 0;
        z-index: 2;
        span {
          font-size: 14px;
          color: #fff9b1;
          display: block;
          margin-top: 10px;
        }
      }
      .background {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }
      &:hover {
        // -webkit-filter: opacity(0.7);
        .background {
          -webkit-filter: opacity(0.4);
        }
      }
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
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
}
#stories,
#videos,
#songs {
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
      cursor: pointer;
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
    &::-webkit-scrollbar-track-piece {
      //滚动条凹槽的颜色，还可以设置边框属性
      background-color: #f8f8f8;
    }
    &::-webkit-scrollbar {
      //滚动条的宽度
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      //滚动条的设置
      background-color: rgb(95, 95, 95);
      background-clip: padding-box;
      min-height: 28px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgb(95, 95, 95);
    }
  }
}

#videos {
  background: #eb9e71;
  #stories_side {
    .item {
      background-color: #f0cd96;
      color: #b66444;
      .title {
        background-color: #b66444;
      }
    }
  }
}

#songs {
  background: #f0cd96;
  #stories_side {
    .item {
      background-color: #fffcd1;
      color: #e99766;
      .title {
        background-color: #e99766;
      }
    }
  }
}

#coloring_schedule {
  display: flex;
  margin-bottom: 100px;
  #prev,
  #next {
    width: 120px;
    line-height: 35px;
    border: none;
    background-color: #d7574e;
    color: #fff;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  ul {
    margin-left: 15px;
    margin-right: 15px;
    width: calc(100% - 30px - 120px - 120px);
    background-color: #e7b7b3;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    li {
      line-height: 35px;
      width: 60px;
      color: #fff;
      background-color: #d7574e;
      text-align: center;
      cursor: pointer;
      &.active {
        background-color: #17a6af;
      }
    }
  }
  &.story_p {
    margin-bottom: 50px;
    #prev,
    #next {
      background-color: #af87ba;
      color: #fff;
    }
    ul {
      background-color: #cdc7e1;
      li {
        color: #fff;
        background-color: #af87ba;
        &.active {
          background-color: #17a6af;
        }
      }
    }
  }
  &.story {
    margin-bottom: 50px;
    #prev,
    #next {
      background-color: #B15177;
      color: #fff;
    }
    ul {
      background-color: #DECBDC;
      li {
        color: #fff;
        background-color: #B15177;
        &.active {
          background-color: #17a6af;
        }
      }
    }
  }
}

#coloring_menu {
  display: flex;
  .item {
    width: calc(33% - 30px);
    margin-left: 15px;
    margin-right: 15px;
    padding: 15px;
    box-sizing: border-box;
    background-color: #d7574e;
    position: relative;
    cursor: pointer;
    .photo {
      width: 100%;
      height: 250px;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        padding: 0;
      }
    }
    .text {
      padding-top: 15px;
      line-height: 45px;
      text-align: center;
      font-size: 24px;
      color: #fff;
    }
    &.active {
      // -webkit-filter: brightness(0.5);
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
      &::after {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "";
        position: absolute;
        z-index: 2;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 81px;
        color: #82c91e;
      }
    }
  }
  &.story_p {
    .item {
      background-color: #af87ba;
    }
  }
  &.story{
    .item {
      background-color: #B15177;
    }
  }
}

#coloring_content {
  display: flex;
  align-items: center;
  margin-top: -85px;
  .coloring_pen {
    width: 100px;
    ul {
      li {
        width: 85px;
        height: 85px;
        box-sizing: border-box;
        border: 5px solid #d7574e;
        background-color: #f5b7bd;
        padding-right: 15px;
        border-radius: 999px;
        margin-bottom: 15px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        img {
          max-width: 40px;
          position: absolute;
          bottom: -20px;
          left: 0;
          right: 0;
          margin: auto;
          padding: 0;
        }
        &:hover {
          img {
            bottom: -10px;
          }
        }
      }
    }
  }
  .coloring_main {
    width: calc(100% - 100px);
    height: 522px;
    box-sizing: border-box;
    border: 5px solid #000;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 0;
    }
  }
  &.story {
    flex-wrap: wrap;
    margin-top: -30px;
    .coloring_pen {
      width: 100px;
      ul {
        li {
          border: 5px solid #fff;
          background-color: #b15177;
          box-shadow: 0px 0px 3px 3px #b3b3b3;
          span {
            font-size: 32px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
          }
          &.play {
            margin-top: 50px;
            span {
              width: 30px;
              height: 30px;
              background-color: #e60012;
              border-radius: 999px;
              border: 3px solid #fff;
            }
          }
        }
      }
    }
    .coloring_main {
      height: 500px;
      border: none;
    }
    .coloring_bottom {
      background-color: #decbdc;
      padding: 15px;
      box-sizing: border-box;
      margin-top: 15px;
      margin-left: 100px;
      width: 100%;
      border-radius: 999px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      .volume {
        width: 120px;
        height: 120px;
        border-radius: 999px;
        box-sizing: border-box;
        border: #fff 5px solid;
        background-color: #b15177;
        color: #fff;
        font-size: 60px;
      }
      .text_content {
        width: calc(100% - 135px);
        margin-left: 15px;
        max-height: 120px;
        overflow-y: auto;

        .item {
          display: flex;
          align-items: center;
          padding: 5px 15px;
          background-color: #fff;
          border-radius: 5px;
          margin-bottom: 5px;
          &:nth-child(even) {
            background-color: #ede4ea;
          }
          button {
            width: 45px;
            height: 45px;
            border-radius: 999px;
            color: #b15177;
            border: 5px solid #b15177;
            background-color: #f2e1e7;
            margin-right: 15px;
          }
          .text {
            p {
              line-height: 1.5;
            }
          }
        }
      }
    }
  }
  &.story2 {
    flex-wrap: wrap;
    .coloring_pen {
      width: 200px;
      margin-right: 15px;
      #bookmark {
        width: 100%;
        display: flex;
        justify-content: space-between;
        #bookmark1,
        #bookmark2 {
          width: calc(50% - 2.5px);
          text-align: center;
          background-color: #724994;
          line-height: 45px;
          font-size: 24px;
          color: #fff;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          &.active {
            background-color: #af87ba;
          }
        }
      }
      #bookmark_content {
        height: 435px;
        background-color: #af87ba;
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        padding: 5px;
        box-sizing: border-box;
        &::-webkit-scrollbar {
          display: none; /* Chrome Safari */
        }
        .item {
          width: 50%;
          padding: 5px;
          box-sizing: border-box;
          img {
            padding: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .coloring_main {
      height: 480px;
      width: calc(100% - 215px);
    }
    .coloring_bottom {
      background-color: #cdc7e1;
      padding: 15px;
      box-sizing: border-box;
      margin-top: 15px;
      width: 100%;
      border-radius: 999px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      .volume {
        width: 120px;
        height: 120px;
        border-radius: 999px;
        box-sizing: border-box;
        border: #fff 5px solid;
        background-color: #7e318e;
        color: #fff;
        font-size: 60px;
      }
      .text_content {
        width: calc(100% - 135px);
        margin-left: 15px;
        max-height: 120px;
        overflow-y: auto;

        .item {
          display: flex;
          align-items: center;
          padding: 5px 15px;
          background-color: #fff;
          border-radius: 5px;
          margin-bottom: 5px;
          &:nth-child(even) {
            background-color: #ede4ea;
          }
          button {
            width: 45px;
            height: 45px;
            border-radius: 999px;
            color: #7e318e;
            border: 5px solid #7e318e;
            background-color: #f2e1e7;
            margin-right: 15px;
          }
          .text {
            p {
              line-height: 1.5;
            }
          }
        }
      }
    }
  }
}
</style>