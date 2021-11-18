<template>
  <transition
    type="transition"
    name="fade"
    enter-active-class="animated swing fade-enter-active"
    leave-active-class="animated bounce fade-leave-active"
  >
    <div id="game_levels">
      <VueLoading />

      <VueHeader :class="{ active: this.dive }" />

      <transition
        type="transition"
        name="fade"
        enter-active-class="animated swing fade-enter-active"
        leave-active-class="animated bounce fade-leave-active"
      >
        <main :class="{ active: this.dive }">
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
                    dive = theater_menu;
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
                    dive = theater_menu;
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
                    dive = theater_menu;
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
                v-for="(item, index) in draw_doodle"
                :key="index"
                class="item"
                :class="{ active: coloring_item === item.id }"
                @click="
                  coloring_item = item.id;
                  dd_img = item.img;
                "
              >
                <div class="photo">
                  <img
                    :src="item.img"
                    alt="img"
                  >
                </div>
                <div class="text">
                  {{ item.text }}
                </div>
              </div>
            </div>
            <!-- 選單下層內容 -->
            <div v-if="cs_sigh === 2">
              <div id="coloring_content">
                <!-- <div class="coloring_pen">
                  <ul>
                    <li>
                      <img src="images/theater/pen1.svg" alt="pen" />
                    </li>
                    <li>
                      <img src="images/theater/pen2.svg" alt="pen" />
                    </li>
                    <li>
                      <img src="images/theater/pen3.svg" alt="pen" />
                    </li>
                  </ul>
                </div>
                <div class="coloring_main" style="height: 825px">
                  <img :src="dd_img" alt="img" />
                </div> -->
                <iframe
                  style="width: 100%; height: 845px"
                  src="iframe/畫筆HTML(David加工)/index.html"
                  frameborder="0"
                />
              </div>
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
                    :src="dd_img"
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
                v-for="(item, index) in story"
                :key="index"
                :class="{ active: coloring_item === item.id }"
                @click="
                  number = 1;
                  coloring_item = item.id;
                  s_img = item.voice[0].pic;
                  s_voice = item.voice;
                "
              >
                <div class="photo">
                  <img
                    :src="item.img"
                    alt="img"
                  >
                </div>
                <div class="text">
                  {{ item.text }}
                </div>
              </div>
            </div>
            <!-- 選單下層內容  -->
            <div
              v-if="cs_sigh === 2 || cs_sigh === 3"
              style="height: 800px"
            >
              <div class="content">
                <div class="img">
                  <img
                    :src="s_img"
                    alt="img"
                  >
                </div>
                <div class="audio">
                  <div
                    @click="all_play()"
                    class="all"
                    v-show="cs_sigh === 2"
                  >
                    <i class="fas fa-volume-up" />
                  </div>
                  <div
                    class="all"
                    v-show="cs_sigh === 3"
                  >
                    <i class="fas fa-microphone" />
                  </div>
                  <div class="quantity">
                    <span @click="us">
                      <i class="fas fa-chevron-circle-up" />
                    </span>
                    <div class="number">
                      {{ number }} / {{ s_voice.length }}
                    </div>
                    <span @click="bs">
                      <i class="fas fa-chevron-circle-down" />
                    </span>
                  </div>
                  <div class="sentence">
                    <div
                      class="item"
                      v-for="(item, index) in s_voice"
                      :key="index"
                    >
                      <span
                        v-show="cs_sigh === 2"
                        @click="play(index)"
                        class="o_paly"
                        :class="{ active: item.dive }"
                      >
                        <i class="far fa-play-circle" />
                      </span>

                      <audio
                        :class="'s_audio' + index"
                        :src="item.audio"
                      />
                      <div class="text">
                        <p>
                          <!-- {{ item.text_en }} -->
                          <span
                            v-for="(en, index) in item.text_en"
                            :key="index"
                          >
                            {{ en }}
                          </span>
                        </p>
                        <p>
                          <!-- {{ item.text_cn }} -->
                          <span
                            v-for="(cn, index) in item.text_cn"
                            :key="index"
                          >
                            {{ cn }}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="cs_sigh === 4">
              <video
                id="video"
                controls
              >
                <source
                  src="/video/Ant.mp4"
                  type="video/mp4"
                >
              </video>
              <div id="download">
                <i class="fas fa-download" />
              </div>
              <div id="share">
                <i class="fas fa-share-alt" />
              </div>
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
                story3: theater_menu === 6,
                story2: theater_menu === 6,
                story: theater_menu === 6,
              }"
            >
              <div
                class="item"
                v-for="(item, index) in story_p"
                :key="index"
                :class="{ active: coloring_item === item.id }"
                @click="
                  number = 1;
                  coloring_item = item.id;
                  sp_img = item.voice[0].pic;
                  sp_voice = item.voice;
                "
              >
                <div class="photo">
                  <img
                    :src="item.img"
                    alt="img"
                  >
                </div>
                <div class="text">
                  {{ item.text }}
                </div>
              </div>
            </div>
            <!-- 選單下層內容 -->
            <div v-show="cs_sigh === 2 || cs_sigh === 3">
              <div
                id="coloring_content"
                :class="{ cc3: cs_sigh === 3 }"
              >
                <div
                  class="role"
                  v-show="cs_sigh === 2"
                >
                  <div class="title">
                    <div
                      id="figure"
                      class="active"
                    >
                      <i class="far fa-user" />
                    </div>
                    <div id="view">
                      <i class="far fa-image" />
                    </div>
                  </div>
                  <div class="sp_content">
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                    <div class="item">
                      <img
                        src="/images/theater/SB1_Draw2.png"
                        alt="img"
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="coloring_main sp"
                  :class="{ sp_style: cs_sigh === 3 }"
                >
                  <img
                    :src="sp_img"
                    alt="img"
                  >
                </div>
                <div
                  class="sp_function"
                  v-show="cs_sigh === 2"
                >
                  <div class="delete">
                    <i class="far fa-times-circle" />
                    <span>Delete</span>
                  </div>
                  <div class="scent">
                    <i class="fas fa-plus-circle" />
                    <span>scent</span>
                  </div>
                  <div class="switch">
                    <span>2/1</span>
                    <i class="fas fa-chevron-circle-left" />
                    <i class="fas fa-chevron-circle-right" />
                  </div>
                </div>
                <div
                  class="audio sp"
                  v-show="cs_sigh === 2"
                >
                  <div
                    @click="sp_all_play()"
                    class="all"
                    v-show="cs_sigh === 2"
                  >
                    <i class="fas fa-volume-up" />
                  </div>
                  <div class="quantity">
                    <span @click="us">
                      <i class="fas fa-chevron-circle-up" />
                    </span>
                    <div class="number">
                      {{ number }} / {{ sp_voice.length }}
                    </div>
                    <span @click="bs">
                      <i class="fas fa-chevron-circle-down" />
                    </span>
                  </div>
                  <div class="sentence">
                    <div
                      class="item"
                      v-for="(item, index) in sp_voice"
                      :key="index"
                    >
                      <span
                        v-show="cs_sigh === 2"
                        @click="sp_play(index)"
                        class="o_paly"
                        :class="{ active: item.dive }"
                      >
                        <i class="far fa-play-circle" />
                      </span>

                      <audio
                        :class="'s_audio' + index"
                        :src="item.audio"
                      />
                      <div class="text">
                        <p>
                          <span
                            v-for="(en, index) in item.text_en"
                            :key="index"
                          >
                            {{ en }}
                          </span>
                        </p>
                        <p>
                          <span
                            v-for="(cn, index) in item.text_cn"
                            :key="index"
                          >
                            {{ cn }}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="cs_sigh === 4">
              <video
                id="video"
                controls
              >
                <source
                  src="/video/Ant.mp4"
                  type="video/mp4"
                >
              </video>
              <div id="download">
                <i class="fas fa-download" />
              </div>
              <div id="share">
                <i class="fas fa-share-alt" />
              </div>
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

      <!-- :class="{ active: coloring_item === item.id }" -->
      <VueFooter :class="{ dive: this.dive }" />
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
      dd_img: "",
      dd_voice: "",
      draw_doodle: [
        {
          id: 1,
          img: "/images/theater/SB1_Draw1.png",
          text: "Minions",
        },
        {
          id: 2,
          img: "/images/theater/SB1_Draw2.png",
          text: "do la a mo",
        },
        {
          id: 3,
          img: "/images/theater/SB1_Draw3.png",
          text: "Pokemon",
        },
      ],
      s_img: "",
      s_voice: "",
      story: [
        {
          id: 1,
          img: "/images/theater/SB1_Draw1.png",
          text: "Minions",
          voice: [
            {
              text_en: ["Who am I."],
              text_cn: ["我是誰?"],
              audio: "images/R1-1_Who am I/Audio/Who am I.mp3",
              pic: "images/R1-1_Who am I/Pic/Who-am-I.jpg",
              dive: false,
            },
            {
              text_en: ["I am Harry."],
              text_cn: ["我是Harry"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p5_4_i_am_harry.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I1.jpg",
              dive: false,
            },
            {
              text_en: ["I am Anna"],
              text_cn: ["我是Anna"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p7_4_i_am_anna.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I2.jpg",
              dive: false,
            },
            {
              text_en: ["I am Tom."],
              text_cn: ["我是Tom"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p9_4_i_am_tom.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I3.jpg",
              dive: false,
            },
            {
              text_en: ["I am Helen."],
              text_cn: ["我是Helen"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p11_4_i_am_helen.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I4.jpg",
              dive: false,
            },
            {
              text_en: ["I am Leo."],
              text_cn: ["我是Leo"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p13_4_i_am_leo.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I5.jpg",
              dive: false,
            },
            {
              text_en: ["I am Piggy."],
              text_cn: ["我是Piggy"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p15_4_i_am_piggy.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I6.jpg",
              dive: false,
            },
            {
              text_en: ["I am Snowball."],
              text_cn: ["我是Snowball"],
              audio:
                "images/R1-1_Who am I/Audio/story1_1_p17_4_i_am_snowball.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I7.jpg",
              dive: false,
            },
          ],
        },
        {
          id: 2,
          img: "/images/theater/SB1_Draw2.png",
          text: "do la a mo",
          voice: [
            {
              text_en: ["The three little pigs."],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/The three little pigs.mp3",
              pic: "images/R1-2_Three little pigs/Pic/The-Three-Little-Pig.jpg",
            },
            {
              text_en: ["Here is a pig. Ben is tall."],
              text_cn: [""],
              audio: "images/R1-2_Three little pigs/Audio/story1_2_p4_3.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs1.jpg",
            },
            {
              text_en: ["Here is a pig. John is fat."],
              text_cn: [""],
              audio: "images/R1-2_Three little pigs/Audio/story1_2_p5_3.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs1.jpg",
            },
            {
              text_en: ["Here is a pig. Mike is thin."],
              text_cn: [""],
              audio: "images/R1-2_Three little pigs/Audio/story1_2_p6_3.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs2.jpg",
            },
            {
              text_en: ["What is this?", "It s a door."],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/story1_2_p7_what is_a door.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs2.jpg",
            },
            {
              text_en: ["Help! ", "Oh no! It's is the Big Bad Wolf."],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/story1_2_p9_help_ohno.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs3.jpg",
            },
            {
              text_en: ["What is this? ", "It's a gatel."],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/story1_2_p10_what is_a gate.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs4.jpg",
            },
            {
              text_en: ["I'll huff! I'll puff!", "Go away!"],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/story1_2_p15_Ill huff_away.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs6.jpg",
            },
            {
              text_en: ["I'm happy.", "I am happy, too."],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/story1_2_p18_Iam_Iamtoo.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs8.jpg",
            },
          ],
        },
        {
          id: 3,
          img: "/images/theater/SB1_Draw3.png",
          text: "Pokemon",
          voice: [
            {
              text_en: ["Jacks dog."],
              audio: "images/R1-3_Jacks dog/Audio/Jacks_dog.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog.jpg",
            },
            {
              text_en: ["Hi! I'm Spot. I am a dog. I am a happy dog!"],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p4_2.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog1.jpg",
            },
            {
              text_en: ["That is Jack. He is 15 years old. He is my friend."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p5_2.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog1.jpg",
            },
            {
              text_en: ["I have five oranges and two eggs."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p6_2.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog2.jpg",
            },
            {
              text_en: ["Thank you. You are a good dog.", "Woof! Woof!"],
              audio:
                "images/R1-3_Jacks dog/Audio/story1_3_p7_Thank you_woof.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog2.jpg",
            },
            {
              text_en: ["Thank you! You can go now.", "Woof! Woof!"],
              audio:
                "images/R1-3_Jacks dog/Audio/story1_3_p8_Thank you_woof.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog3.jpg",
            },
            {
              text_en: ["GO! GO! GO! Let's run.", "Let's walk."],
              audio:
                "images/R1-3_Jacks dog/Audio/story1_3_p10_Gogogo_lets walk.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog4.jpg",
            },
            {
              text_en: ["I have twenty grapes and three eggs."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p11_3.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog4.jpg",
            },
            {
              text_en: ["Two dogs. Two short dogs!", "Two mad dogs."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p14_all.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog6.jpg",
            },
            {
              text_en: ["I have four eggs and three oranges."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p16_3.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog7.jpg",
            },
            {
              text_en: ["Spot is not happy. He is mad."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p17.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog7.jpg",
            },
            {
              text_en: ["Sad Spot! Sad dog!"],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p18_2.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog8.jpg",
            },
          ],
        },
      ],

      sp_img: "",
      sp_voice: "",
      story_p: [
        {
          id: 1,
          img: "/images/theater/SB1_Draw1.png",
          text: "Minions",
          voice: [
            {
              text_en: ["Who am I."],
              text_cn: ["我是誰?"],
              audio: "images/R1-1_Who am I/Audio/Who am I.mp3",
              pic: "images/R1-1_Who am I/Pic/Who-am-I.jpg",
              dive: false,
            },
            {
              text_en: ["I am Harry."],
              text_cn: ["我是Harry"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p5_4_i_am_harry.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I1.jpg",
              dive: false,
            },
            {
              text_en: ["I am Anna"],
              text_cn: ["我是Anna"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p7_4_i_am_anna.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I2.jpg",
              dive: false,
            },
            {
              text_en: ["I am Tom."],
              text_cn: ["我是Tom"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p9_4_i_am_tom.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I3.jpg",
              dive: false,
            },
            {
              text_en: ["I am Helen."],
              text_cn: ["我是Helen"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p11_4_i_am_helen.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I4.jpg",
              dive: false,
            },
            {
              text_en: ["I am Leo."],
              text_cn: ["我是Leo"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p13_4_i_am_leo.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I5.jpg",
              dive: false,
            },
            {
              text_en: ["I am Piggy."],
              text_cn: ["我是Piggy"],
              audio: "images/R1-1_Who am I/Audio/story1_1_p15_4_i_am_piggy.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I6.jpg",
              dive: false,
            },
            {
              text_en: ["I am Snowball."],
              text_cn: ["我是Snowball"],
              audio:
                "images/R1-1_Who am I/Audio/story1_1_p17_4_i_am_snowball.mp3",
              pic: "images/R1-1_Who am I/Pic/Who am I7.jpg",
              dive: false,
            },
          ],
        },
        {
          id: 2,
          img: "/images/theater/SB1_Draw2.png",
          text: "do la a mo",
          voice: [
            {
              text_en: ["The three little pigs."],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/The three little pigs.mp3",
              pic: "images/R1-2_Three little pigs/Pic/The-Three-Little-Pig.jpg",
            },
            {
              text_en: ["Here is a pig. Ben is tall."],
              text_cn: [""],
              audio: "images/R1-2_Three little pigs/Audio/story1_2_p4_3.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs1.jpg",
            },
            {
              text_en: ["Here is a pig. John is fat."],
              text_cn: [""],
              audio: "images/R1-2_Three little pigs/Audio/story1_2_p5_3.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs1.jpg",
            },
            {
              text_en: ["Here is a pig. Mike is thin."],
              text_cn: [""],
              audio: "images/R1-2_Three little pigs/Audio/story1_2_p6_3.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs2.jpg",
            },
            {
              text_en: ["What is this?", "It s a door."],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/story1_2_p7_what is_a door.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs2.jpg",
            },
            {
              text_en: ["Help! ", "Oh no! It's is the Big Bad Wolf."],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/story1_2_p9_help_ohno.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs3.jpg",
            },
            {
              text_en: ["What is this? ", "It's a gatel."],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/story1_2_p10_what is_a gate.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs4.jpg",
            },
            {
              text_en: ["I'll huff! I'll puff!", "Go away!"],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/story1_2_p15_Ill huff_away.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs6.jpg",
            },
            {
              text_en: ["I'm happy.", "I am happy, too."],
              text_cn: [""],
              audio:
                "images/R1-2_Three little pigs/Audio/story1_2_p18_Iam_Iamtoo.mp3",
              pic: "images/R1-2_Three little pigs/Pic/the three little pigs8.jpg",
            },
          ],
        },
        {
          id: 3,
          img: "/images/theater/SB1_Draw3.png",
          text: "Pokemon",
          voice: [
            {
              text_en: ["Jacks dog."],
              audio: "images/R1-3_Jacks dog/Audio/Jacks_dog.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog.jpg",
            },
            {
              text_en: ["Hi! I'm Spot. I am a dog. I am a happy dog!"],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p4_2.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog1.jpg",
            },
            {
              text_en: ["That is Jack. He is 15 years old. He is my friend."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p5_2.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog1.jpg",
            },
            {
              text_en: ["I have five oranges and two eggs."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p6_2.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog2.jpg",
            },
            {
              text_en: ["Thank you. You are a good dog.", "Woof! Woof!"],
              audio:
                "images/R1-3_Jacks dog/Audio/story1_3_p7_Thank you_woof.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog2.jpg",
            },
            {
              text_en: ["Thank you! You can go now.", "Woof! Woof!"],
              audio:
                "images/R1-3_Jacks dog/Audio/story1_3_p8_Thank you_woof.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog3.jpg",
            },
            {
              text_en: ["GO! GO! GO! Let's run.", "Let's walk."],
              audio:
                "images/R1-3_Jacks dog/Audio/story1_3_p10_Gogogo_lets walk.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog4.jpg",
            },
            {
              text_en: ["I have twenty grapes and three eggs."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p11_3.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog4.jpg",
            },
            {
              text_en: ["Two dogs. Two short dogs!", "Two mad dogs."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p14_all.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog6.jpg",
            },
            {
              text_en: ["I have four eggs and three oranges."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p16_3.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog7.jpg",
            },
            {
              text_en: ["Spot is not happy. He is mad."],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p17.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog7.jpg",
            },
            {
              text_en: ["Sad Spot! Sad dog!"],
              audio: "images/R1-3_Jacks dog/Audio/story1_3_p18_2.mp3",
              pic: "images/R1-3_Jacks dog/Pic/Jack_s dog8.jpg",
            },
          ],
        },
      ],

      op_state: false,

      sentence: 0,

      number: 1,
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
      this.dive = false;
    },
    cs_sigh_prev() {
      this.number = 1;
      if (this.cs_sigh === 1) {
        this.cs_sigh = 1;
      } else {
        this.cs_sigh--;
      }
    },
    cs_sigh_next() {
      this.number = 1;
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
      console.log(this.myVideo);
      this.play_video = this.myVideo[index].video;
    },
    play(index) {
      // console.log(this.myVideo);
      document.querySelector(".s_audio" + index).play();
      // console.log("播放" + ".s_audio" + index);

      this.s_img = this.s_voice[index].pic;
      this.s_voice[index].dive = true;
      // this.number = index + 1;
      document.querySelector(".s_audio" + index).loop = false;
      document.querySelector(".s_audio" + index).addEventListener(
        "ended",
        () => {
          this.s_voice[index].dive = false;
          console.log("播完囉");
        },
        false
      );
    },
    all_play(index = 0) {
      document.querySelector(".s_audio" + index).play();
      console.log("播放" + ".s_audio" + index);
      this.s_img = this.s_voice[index].pic;
      this.s_voice[index].dive = true;
      document.querySelector(".sentence").scrollTop = 125 * index;
      document.querySelector(".s_audio" + index).loop = false;
      document.querySelector(".s_audio" + index).addEventListener(
        "ended",
        () => {
          this.number = index + 1;
          console.log(index, this.s_voice.length);
          this.s_voice[index].dive = false;
          console.log("播完囉");
          if (index + 1 < this.s_voice.length) {
            this.all_play(index + 1);
          }
        },
        false
      );
    },
    sp_play(index) {
      console.log("123");
      // console.log(this.myVideo);
      document.querySelector(".s_audio" + index).play();
      // console.log("播放" + ".s_audio" + index);
      this.sp_img = this.sp_voice[index].pic;
      this.sp_voice[index].dive = true;
      this.number = index + 1;
      document.querySelector(".s_audio" + index).loop = false;
      document.querySelector(".s_audio" + index).addEventListener(
        "ended",
        () => {
          this.sp_voice[index].dive = false;
          console.log("播完囉");
        },
        false
      );
    },
    sp_all_play(index = 0) {
      document.querySelector(".s_audio" + index).play();
      // console.log("播放" + ".s_audio" + index);
      this.sp_img = this.sp_voice[index].pic;
      this.sp_voice[index].dive = true;
      document.querySelector(".sentence").scrollTop = 125 * index;
      document.querySelector(".s_audio" + index).loop = false;
      document.querySelector(".s_audio" + index).addEventListener(
        "ended",
        () => {
          this.number = index + 1;
          console.log(index, this.sp_voice.length);
          this.sp_voice[index].dive = false;
          console.log("播完囉");
          if (index + 1 < this.sp_voice.length) {
            this.sp_all_play(index + 1);
          }
        },
        false
      );
    },

    us() {
      if (this.number > 1) {
        this.number--;
        document.querySelector(".sentence").scrollTop = 125 * this.number;
      }
    },
    bs() {
      if (this.number < this.s_voice.length) {
        this.number++;
        document.querySelector(".sentence").scrollTop = 125 * this.number;
      }
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
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
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
  height: 725px;
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
  margin-bottom: 30px;
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
      background-color: #b15177;
      color: #fff;
    }
    ul {
      background-color: #decbdc;
      li {
        color: #fff;
        background-color: #b15177;
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
      height: 710px;
      background-color: #fff;
      position: relative;
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
  &.story {
    .item {
      background-color: #b15177;
    }
  }
  &.story2 {
    .item {
      background-color: #af87ba;
    }
  }
}

#coloring_content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 0px;
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
    height: 810px;
    box-sizing: border-box;
    border: 5px solid #000;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 0;
      position: relative;
      top: 0%;
      left: 0%;
    }
    &.sp {
      height: 650px;
      width: calc(100% - 300px);
      &.sp_style {
        height: 815px;
        width: 100%;
      }
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
  &.story3 {
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
  .role {
    width: 185px;
    margin-right: 15px;
    height: 650px;
    .title {
      display: flex;
      justify-content: space-between;
      #figure,
      #view {
        width: 49%;
        text-align: center;
        background-color: #724993;
        line-height: 40px;
        color: #fff;
        font-size: 24px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        &.active {
          background-color: #af87b9;
        }
      }
    }
    .sp_content {
      background-color: #af87b9;
      height: calc(650px - 40px);
      padding: 5px;
      overflow-y: auto;
      .item {
        float: left;
        width: calc(50% - 2.5px);
        background-color: #fff;
        margin-top: 5px;
        height: 65px;
        overflow: hidden;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          padding: 5px;
        }
        &:nth-child(1),
        &:nth-child(2) {
          margin-top: 0;
        }
        &:nth-child(even) {
          margin-left: 5px;
        }
      }
    }
  }
  .sp_function {
    width: 85px;
    margin-left: 15px;
    height: 650px;
    .delete,
    .scent {
      text-align: center;
      color: #e60012;
      i,
      svg {
        font-size: 85px;
      }
      span {
        margin-top: 5px;
        font-weight: bolder;
      }
    }
    .scent {
      margin-top: 30vh;
      color: #af87ba;
    }
    .switch {
      text-align: center;
      margin-top: 5vh;
      span {
        display: inline-block;
        width: 100%;
        color: #af87ba;
        font-size: 35px;
        font-weight: bolder;
        margin-bottom: 15px;
      }
      svg {
        color: #af87ba;
        font-size: 40px;
      }
    }
  }
  &.cc3 {
    justify-content: center;
  }
}

.img {
  height: 665px;
  background-color: #fff;
  img {
    height: 100%;
    width: auto;
    max-width: 100%;
    margin: auto;
    display: block;
  }
}

.audio {
  background-color: #decbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;

  .all {
    width: 120px;
    height: 120px;
    text-align: center;
    font-size: 64px;
    border: 10px solid #fff;
    box-sizing: border-box;
    border-radius: 100px;
    background-color: #b15177;
    color: #fff;
    position: relative;
    cursor: pointer;
    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .quantity {
    text-align: center;
    width: 100px;

    svg {
      color: #b15177;
      background-color: #fff;
      border-radius: 99px;
      font-size: 24px;
      border: 3px solid #fff;
      cursor: pointer;
    }

    .number {
      font-size: 24px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
      color: #b15177;
    }
  }

  .sentence {
    width: calc(100% - 100px - 120px);
    height: 120px;
    padding-right: 5px;
    overflow-y: hidden;
    overflow-x: hidden;
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */
    .item {
      width: 100%;
      height: 120px;
      display: flex;
      align-items: center;
      background-color: #fff;
      margin-bottom: 5px;
      box-sizing: border-box;
      padding-left: 15px;
      padding-right: 15px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      &:last-child {
        margin-bottom: 0;
      }
      svg {
        margin-right: 15px;
        font-size: 32px;
        color: #b15177;
        background-color: #decbdc;
        border-radius: 999px;
        cursor: pointer;
        position: relative;
        z-index: 1;
        font-size: 42px;
      }
      p {
        color: #b15177;
        line-height: 1.4;
        position: relative;
        z-index: 1;
        font-size: 32px;
      }
      .o_paly {
        &.active {
          svg {
            filter: grayscale(1);
          }
          &::before {
            content: "";
            display: block;
            background-color: #bbbbbb;
            width: 100vw;
            height: 200px;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }

    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    // &::-webkit-scrollbar {
    //   width: 6px;
    //   height: 6px;
    // }
    // &::-webkit-scrollbar-track {
    //   border-radius: 3px;
    //   background: rgba(0, 0, 0, 0.06);
    //   -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
    // }
    // /* 滚动条滑块 */
    // &::-webkit-scrollbar-thumb {
    //   border-radius: 3px;
    //   background: rgba(0, 0, 0, 0.12);
    //   -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    // }
  }

  &.sp {
    margin-top: 15px;
    background-color: #cdc7e1;

    .all {
      border: 10px solid #fff;
      background-color: #af87ba;
      color: #fff;
    }

    .quantity {
      svg {
        color: #af87ba;
        background-color: #fff;
        border: 3px solid #fff;
      }

      .number {
        color: #af87ba;
      }
    }

    .sentence {
      .item {
        background-color: #fff;
        svg {
          color: #af87ba;
          background-color: #decbdc;
        }
        p {
          color: #af87ba;
        }
      }
    }
  }
}

#video {
  width: calc(100% - 200px);
  margin-left: 100px;
  margin-right: 100px;
  height: 800px;
}

#download {
  position: absolute;
  right: 0;
  top: 52.5%;
  width: 80px;
  height: 80px;
  border: 5px solid #b15177;
  border-radius: 999px;
  background-color: #fff;
  cursor: pointer;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    color: #b15177;
  }
}

#share {
  position: absolute;
  right: 0;
  bottom: 52.5%;
  width: 80px;
  height: 80px;
  border: 5px solid #b15177;
  border-radius: 999px;
  background-color: #fff;
  cursor: pointer;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    color: #b15177;
  }
}

#return {
  right: 5px;
  top: 5px;
  @media screen and (max-width: 1024px) and (max-height: 768px) {
    right: 15px;
    top: 15px;
  }
  @media screen and (max-width: 1366px) and (max-height: 768px) {
    right: 5px;
    top: 5px;
  }
}

main {
  // top: 45%;
  @media screen and (max-height: 1080px) {
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 1366px) and (max-height: 768px) {
    transform: translate(-50%, -50%) scale(0.8) !important;
  }
  @media screen and (max-width: 1280px) and (max-height: 768px) {
    transform: translate(-50%, -50%) scale(0.75) !important;
  }
  @media screen and (max-width: 1024px) and (max-height: 768px) {
    transform: translate(-50%, -50%) scale(0.65) !important;
  }

  &.active {
    // height: 100%;
    #coloring_schedule,
    #coloring_schedule.story,
    #coloring_schedule.story_p {
      margin-top: 20px;
      margin-bottom: 25px;
    }
  }
  #coloring_menu {
    justify-content: space-between;
    padding-top: 0;
  }
}
</style>