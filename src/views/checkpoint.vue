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

      <!-- 向左箭頭 -->
      <button
        v-if="checkpoint && this.order !== 1"
        id="left_arrow"
        @click="this.left_arrow"
      />

      <!-- 關卡地圖 -->
      <transition
        type="transition"
        name="fade"
        enter-active-class="animated swing fade-enter-active"
        leave-active-class="animated bounce fade-leave-active"
      >
        <main v-if="checkpoint">
          <div class="content">
            <!-- <router-link 
            :to="`game/${index}`" 
            v-for="(item , index) in info.checkpoint" 
            class="checkpoint" 
            :key="index"
            :class="{ 'gray': item.gray , 's1': item.s1 , 's2': item.s2, 's3': item.s3 , 'style_1': item.style_1 , 'style_2': item.style_2}"
            :style="{width: item.width + 'px' , left: item.left + '%', top: item.top + '%' }">
            <div class="item">
              <span v-if="item.title" class="title">{{item.title}}</span>
              <span v-if="item.number" class="number">{{item.number}}</span>
              <span v-if="item.text" class="text">{{item.text}}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" :viewBox="checkpoint_svg_viewBox" v-html="checkpoint_svg"></svg>
          </router-link> -->
            <div
              @click="through(index)"
              v-for="(item, index) in info.checkpoint"
              class="checkpoint"
              :key="index"
              :class="{
                gray: item.gray,
                s1: item.s1,
                s2: item.s2,
                s3: item.s3,
                style_1: item.style_1,
                style_2: item.style_2,
              }"
              :style="{
                width: item.width + 'px',
                left: item.left + '%',
                top: item.top + '%',
              }"
            >
              <div class="item">
                <span
                  v-if="item.title"
                  class="title"
                >{{ item.title }}</span>
                <span
                  v-if="item.number"
                  class="number"
                >{{ item.number }}</span>
                <span
                  v-if="item.text"
                  class="text"
                >{{ item.text }}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :viewBox="checkpoint_svg_viewBox"
                v-html="checkpoint_svg"
              />
            </div>
          </div>
          <img
            :src="info.map"
            :alt="info.map"
          >
        </main>
      </transition>

      <!-- 遊戲內頁 -->
      <transition
        type="transition"
        name="fade"
        enter-active-class="animated swing fade-enter-active"
        leave-active-class="animated bounce fade-leave-active"
      >
        <main v-if="game">
          <div id="game">
            <div class="game_options">
              <h1 :class="stylsClass.css">
                {{ unit }}
              </h1>
              <button
                v-for="(item, index) in game_options"
                :key="index"
                @click="styls(index)"
                :class="[`styls${index}`, { active: sel === index }]"
              >
                {{ item.name }}
              </button>
            </div>
            <div class="game_menu">
              <ul>
                <li
                  v-for="(item, index) in game_menu_options"
                  @click="optionsStyls(index)"
                  :key="index"
                  :class="[
                    stylsClass.css,
                    {
                      active: options === index,
                      grayscale: item.grayscale,
                      s1: item.s1,
                      s2: item.s2,
                      s3: item.s3,
                    },
                  ]"
                >
                  <div class="item">
                    <img
                      :src="item.img"
                      alt="icon"
                    >
                    <svg
                      v-html="game_star_svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 59.74 20.48"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div class="game_main">
              <div class="content">
                <!-- 影片 -->
                <transition
                  type="transition"
                  name="fade"
                >
                  <div
                    class="video"
                    v-show="options === 0"
                  >
                    <video controls>
                      <source
                        src="/video/1580455.mp4"
                        type="video/mp4"
                      >
                    </video>
                  </div>
                </transition>
                <!-- 電影 -->
                <transition
                  type="transition"
                  name="fade"
                >
                  <div
                    class="movie"
                    v-if="options === 1"
                  >
                    <video controls>
                      <source
                        src="/video/sky2408.mp4"
                        type="video/mp4"
                      >
                    </video>
                  </div>
                </transition>
                <!-- 錄音 -->
                <transition
                  type="transition"
                  name="fade"
                >
                  <div
                    class="mic"
                    v-if="options === 2"
                  >
                    <img
                      src="/images/recording.svg"
                      alt="img"
                      style="
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                      "
                    >
                    <div
                      id="progress_bar"
                      v-if="
                        this.recording_state === 1 || this.recording_state === 2
                      "
                    >
                      <div
                        class="percentage"
                        :style="{ left: percentage + '%' }"
                      >
                        {{ percentage }}%
                      </div>
                      <div class="baseline">
                        <div
                          class="line"
                          :style="{ width: percentage + '%' }"
                        />
                      </div>
                    </div>

                    <!-- 狀態0 -->
                    <div v-if="recording_state === 0">
                      <button
                        @click="recording_stara"
                        class="return"
                        style="
                          background-color: #eb9e71;
                          border: 3px solid #fff;
                          color: #fff;
                          font-size: 32px;
                          width: 150px;
                          line-height: 70px;
                          border-radius: 15px;
                        "
                      >
                        start
                      </button>
                    </div>

                    <!-- 狀態1 -->
                    <div v-if="recording_state === 1">
                      <img
                        @click="recording_return"
                        class="return"
                        src="/images/game/return.svg"
                        alt="surface"
                      >
                      <img
                        class="sound"
                        src="/images/game/sound.svg"
                        alt="surface"
                      >
                      <img
                        @click="recording_gamesStara"
                        class="say"
                        src="/images/game/say.svg"
                        alt="surface"
                      >
                    </div>

                    <!-- 狀態2 -->
                    <div
                      v-if="recording_state === 2"
                      id="surface"
                    >
                      <img
                        class="sound"
                        src="/images/game/sound.svg"
                        alt="surface"
                      >
                      <img
                        @click="recording_return"
                        class="return"
                        src="/images/game/return.svg"
                        alt="surface"
                      >
                      <img
                        :style="pointer_rotate"
                        class="pointer"
                        src="/images/game/pointer.svg"
                        alt="pointer"
                      >
                      <img
                        class="surface"
                        src="/images/game/surface.svg"
                        alt="surface"
                      >
                    </div>
                  </div>
                </transition>
                <!-- 遊戲 -->
                <transition
                  type="transition"
                  name="fade"
                >
                  <div
                    class="game"
                    v-if="options === 3"
                  >
                    <iframe
                      style="width: 100%; height: 100%; position: absolute"
                      src="/iframe/game1/筆順配對.html"
                      frameborder="0"
                    />
                  </div>
                </transition>
                <!-- 遊戲 -->
                <transition
                  type="transition"
                  name="fade"
                >
                  <div
                    class="game"
                    v-if="options === 4"
                  />
                </transition>
              </div>
            </div>
          </div>
        </main>
      </transition>

      <!-- 向右箭頭 -->
      <button
        v-if="checkpoint && this.order !== this.max_order"
        id="right_arrow"
        @click="this.right_arrow"
      />

      <!-- 返回 -->
      <div
        v-if="game"
        id="return"
        @click="off_game"
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

      <!-- 關閉 -->
      <router-link
        id="off"
        to="/level"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 73.41 73.41"
        >
          <g>
            <path
              class="cls-1"
              d="M36.7,71.41h0A34.71,34.71,0,1,1,71.41,36.7,34.81,34.81,0,0,1,36.7,71.41"
            />
            <path
              class="cls-2"
              d="M36.7,71.41h0A34.71,34.71,0,1,1,71.41,36.7,34.81,34.81,0,0,1,36.7,71.41Z"
            />
            <rect
              class="cls-3"
              x="15.36"
              y="29.28"
              width="43.96"
              height="12.51"
              transform="translate(-14.19 36.81) rotate(-45)"
            />
            <rect
              class="cls-3"
              x="31.09"
              y="13.56"
              width="12.51"
              height="43.96"
              transform="translate(-14.19 36.81) rotate(-45)"
            />
          </g>
        </svg>
      </router-link>

      <!-- 遊戲鎖定 -->
      <div
        v-if="info.lock"
        id="lock"
        :class="{ unlock: info.unlock }"
      >
        <img
          class="background"
          src="/images/cloud.png"
          alt="cloud"
        >
        <div class="content">
          <div id="lock_main">
            <img
              class="ear"
              src="/images/lock/lock_ear.webp"
              alt="lock"
            >
            <img
              class="left"
              src="/images/lock/lock_l.webp"
              alt="lock"
            >
            <img
              class="right"
              src="/images/lock/lock_r.webp"
              alt="lock"
            >
            <div class="key" />
          </div>
          <ul class="condition">
            <li
              v-for="(item, index) in info.condition"
              :key="index"
              :class="{ pass: item.pass }"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>

      <VueFooter />
    </div>
  </transition>
</template>

<script>
import VueLoading from "./include/loading";
import VueHeader from "./include/header";
import VueFooter from "./include/footer";
// import gameTest from "./game_page/test";
export default {                                                                                                                                                                              
  components: {
    VueLoading,
    VueHeader,
    VueFooter,
    // gameTest
  },
  data() {
    return {
      message: "123",
      eyecatch: false,
      checkpoint_svg:
        "<g><path class='cls-1' d='M113.12,58.78c0,25.91-24.47,46.91-54.65,46.91S3.81,84.69,3.81,58.78,28.28,11.87,58.47,11.87s54.65,21,54.65,46.91'/><path class='cls-2' d='M110.81,48.92c0,24.82-23.43,44.93-52.34,44.93S6.12,73.74,6.12,48.92,29.56,4,58.47,4,110.81,24.11,110.81,48.92Z'/><path class='cls-3' d='M110.81,48.92c0,24.82-23.43,44.93-52.34,44.93S6.12,73.74,6.12,48.92,29.56,4,58.47,4s52.34,20.11,52.34,44.92'/><path class='cls-4' d='M100.92,58c0,19.33-19,35-42.45,35S16,77.35,16,58,35,23,58.47,23s42.45,15.68,42.45,35'/><path class='cls-5 star-2' d='M58.38,62.47s-1.9-.73-3,2.82-4.66,7.93-4.66,7.93L40.34,74.8l-1.57,2.1L41,79.32l6,6.17-1.38,6.82-.33,5.12,1.91,2L55,95.27l3.87-1.58,3.81,2.49,5.57,3a12.57,12.57,0,0,0,2.3-.79c.07-.2-2.69-9.64-2.69-9.64l1-2.63,2.89-3.54,3.8-3.67,1-3-4.14-2.36-5.84-.06L64,73.42,63.17,70l-1.7-5.12Z'/><path class='cls-6' d='M43.64,96.09c.58-2.53,1.21-5.52,2-8.47a2.23,2.23,0,0,0-.82-2.56c-2-1.71-4-3.51-6-5.25-1.32-1.14-2.08-2.48-1.51-4.26a3.77,3.77,0,0,1,3.79-2.69c2.59-.17,5.17-.5,7.75-.65a2.34,2.34,0,0,0,2.33-1.64c1-2.51,2.14-5,3.18-7.46A3.65,3.65,0,0,1,58,60.47a3.71,3.71,0,0,1,3.5,2.61c1.05,2.56,2.2,5.07,3.22,7.64a2.06,2.06,0,0,0,2,1.49c2.7.17,5.4.46,8.09.71a3.79,3.79,0,0,1,3.66,2.68,3.74,3.74,0,0,1-1.38,4.15c-2,1.79-4,3.62-6.14,5.33a2.34,2.34,0,0,0-.85,2.71c.65,2.62,1.19,5.28,1.8,7.91a3.77,3.77,0,0,1-5.86,4.15c-2.26-1.39-4.56-2.7-6.77-4.16a2.38,2.38,0,0,0-3,0c-2.33,1.49-4.7,2.92-7.13,4.24-2.8,1.52-5.68-.29-5.54-3.89m2.76.46c.11,1.26.74,1.44,1.73.85,2.38-1.41,4.79-2.77,7.12-4.26a4.43,4.43,0,0,1,5.3.07c2.12,1.39,4.3,2.69,6.5,3.94a3.22,3.22,0,0,0,1.69.38c.94-.44,0-3.35-.18-4-.39-1.85-.81-3.68-1.24-5.52a4.33,4.33,0,0,1,1.51-4.78c1.31-1.09,2.59-2.2,3.86-3.34A21.57,21.57,0,0,0,75,77.76c.34-.4.9-.89.57-1.41-.59-.94-2.84-.8-3.79-.9-1.87-.19-3.74-.34-5.61-.49a4.18,4.18,0,0,1-3.92-2.86c-1-2.46-2-4.9-3.11-7.31a3.37,3.37,0,0,0-.82-1.09c-.67-.57-1.36.39-1.65,1-1,2.31-2.09,4.62-3,7A4.7,4.7,0,0,1,49.11,75c-1.66.1-3.32.27-5,.43a14.18,14.18,0,0,0-3,.42c-2.67.87.8,3,1.78,3.88,1.22,1.1,2.45,2.18,3.73,3.22a4.68,4.68,0,0,1,1.69,5.36C47.57,91,47,93.78,46.4,96.55'/><path class='cls-5 star-1' d='M21.29,52.57s-1.9-.72-3,2.82-4.65,7.94-4.65,7.94L3.25,64.91,1.68,67l2.23,2.42,6,6.17L8.5,82.42l-.33,5.12,1.9,2,7.81-4.2,3.87-1.57,3.8,2.49,5.58,2.95a12.5,12.5,0,0,0,2.3-.78c.06-.2-2.69-9.65-2.69-9.65l1.05-2.62,2.88-3.54L38.48,69l1-3-4.13-2.36-5.84-.06-2.56-.07-.85-3.48-1.71-5.11Z'/><path class='cls-6' d='M6.55,86.2c.58-2.53,1.21-5.52,2-8.48a2.22,2.22,0,0,0-.82-2.55c-2-1.71-4-3.52-6-5.25C.38,68.77-.38,67.44.19,65.66A3.8,3.8,0,0,1,4,63c2.58-.16,5.16-.49,7.75-.64a2.33,2.33,0,0,0,2.32-1.64c1-2.51,2.15-5,3.18-7.46a3.66,3.66,0,0,1,3.65-2.64,3.71,3.71,0,0,1,3.5,2.61c1.05,2.56,2.2,5.07,3.22,7.64a2,2,0,0,0,2,1.49c2.7.17,5.39.46,8.09.71a3.78,3.78,0,0,1,3.65,2.68A3.73,3.73,0,0,1,40,69.86c-2,1.79-4,3.61-6.14,5.33A2.33,2.33,0,0,0,33,77.9c.65,2.62,1.19,5.27,1.81,7.9A3.78,3.78,0,0,1,29,90c-2.25-1.39-4.56-2.7-6.77-4.16a2.35,2.35,0,0,0-3,0c-2.33,1.49-4.7,2.92-7.13,4.24-2.81,1.52-5.68-.3-5.54-3.89m2.76.45c.1,1.27.73,1.44,1.73.86,2.38-1.41,4.79-2.77,7.12-4.26a4.43,4.43,0,0,1,5.3.07c2.12,1.39,4.3,2.68,6.5,3.94a3.2,3.2,0,0,0,1.69.38c.93-.44,0-3.35-.18-4q-.59-2.78-1.25-5.52a4.36,4.36,0,0,1,1.51-4.78c1.32-1.09,2.6-2.2,3.87-3.34a21.57,21.57,0,0,0,2.32-2.16c.33-.4.89-.9.57-1.41-.6-.95-2.85-.81-3.79-.9q-2.81-.28-5.61-.49a4.19,4.19,0,0,1-3.93-2.86c-1-2.46-2-4.9-3.1-7.31a3.4,3.4,0,0,0-.83-1.09c-.66-.57-1.35.39-1.64,1-1.06,2.3-2.09,4.62-3,7A4.69,4.69,0,0,1,12,65.09c-1.66.09-3.31.27-5,.43a14.09,14.09,0,0,0-3,.42c-2.67.86.79,3,1.78,3.88C7,70.92,8.24,72,9.51,73a4.67,4.67,0,0,1,1.7,5.35c-.73,2.73-1.28,5.5-1.9,8.26'/><path class='cls-5 star-3' d='M95.48,52.57s-1.9-.72-3,2.82-4.66,7.94-4.66,7.94L77.44,64.91,75.86,67l2.24,2.42,6,6.17-1.37,6.82-.33,5.12,1.9,2,7.81-4.2,3.87-1.57,3.8,2.49,5.58,2.95a12.17,12.17,0,0,0,2.29-.78c.07-.2-2.69-9.65-2.69-9.65l1-2.62,2.89-3.54L112.67,69l1-3-4.13-2.36-5.84-.06-2.56-.07-.85-3.48-1.71-5.11Z'/><path class='cls-6' d='M80.74,86.2c.58-2.53,1.21-5.52,2-8.48a2.22,2.22,0,0,0-.82-2.55c-2-1.71-4-3.52-6-5.25-1.33-1.15-2.09-2.48-1.52-4.26a3.8,3.8,0,0,1,3.8-2.7c2.58-.16,5.16-.49,7.75-.64a2.33,2.33,0,0,0,2.32-1.64c1-2.51,2.15-5,3.18-7.46a3.65,3.65,0,0,1,3.65-2.64,3.71,3.71,0,0,1,3.5,2.61c1,2.56,2.2,5.07,3.22,7.64a2,2,0,0,0,2,1.49c2.7.17,5.39.46,8.09.71a3.78,3.78,0,0,1,3.65,2.68,3.73,3.73,0,0,1-1.38,4.15c-2,1.79-4,3.61-6.13,5.33a2.33,2.33,0,0,0-.86,2.71c.65,2.62,1.19,5.27,1.81,7.9A3.78,3.78,0,0,1,103.14,90c-2.25-1.39-4.56-2.7-6.77-4.16a2.35,2.35,0,0,0-3,0c-2.33,1.49-4.7,2.92-7.13,4.24-2.81,1.52-5.68-.3-5.54-3.89m2.75.45c.11,1.27.74,1.44,1.74.86,2.38-1.41,4.79-2.77,7.12-4.26a4.43,4.43,0,0,1,5.3.07c2.11,1.39,4.3,2.68,6.5,3.94a3.16,3.16,0,0,0,1.68.38c.94-.44,0-3.35-.17-4q-.59-2.78-1.25-5.52a4.36,4.36,0,0,1,1.51-4.78c1.32-1.09,2.6-2.2,3.87-3.34a22.56,22.56,0,0,0,2.32-2.16c.33-.4.89-.9.57-1.41-.6-.95-2.85-.81-3.79-.9q-2.81-.28-5.61-.49a4.19,4.19,0,0,1-3.93-2.86c-1-2.46-2-4.9-3.1-7.31a3.4,3.4,0,0,0-.83-1.09c-.67-.57-1.35.39-1.64,1-1.06,2.3-2.09,4.62-3,7a4.69,4.69,0,0,1-4.59,3.26c-1.66.09-3.31.27-5,.43a14.09,14.09,0,0,0-3,.42c-2.67.86.79,3,1.77,3.88C81.19,70.92,82.43,72,83.7,73a4.67,4.67,0,0,1,1.7,5.35c-.74,2.73-1.28,5.5-1.91,8.26'/></g>",
      checkpoint_svg_viewBox: "0 0 115.76 105.69",
      order: 1,
      max_order: 2,
      info: {
        map: "",
        checkpoint: [
          {
            title: "",
            number: "",
            text: "",
            style_1: null,
            style_2: null,
            gray: null,
            width: null,
            left: null,
            top: null,
            s1: null,
            s2: null,
            s3: null,
          },
        ],
        left_arrow: "",
        right_arrow: "",
        lock: null,
        unlock: null,
        condition: [
          {
            text: "",
            pass: null,
          },
        ],
      },
      star_svg:
        "<g><path class='s star-1' d='M2.37,15.87c.21-.91.44-2,.71-3.07a.8.8,0,0,0-.29-.92C2.05,11.26,1.35,10.6.62,10A1.36,1.36,0,0,1,.07,8.43a1.39,1.39,0,0,1,1.38-1c.93-.06,1.87-.17,2.8-.23a.86.86,0,0,0,.85-.59c.36-.91.77-1.8,1.15-2.71A1.34,1.34,0,0,1,7.57,3a1.36,1.36,0,0,1,1.27,1c.38.93.8,1.84,1.16,2.77a.76.76,0,0,0,.74.54c1,.06,1.95.17,2.93.26a1.38,1.38,0,0,1,1.33,1,1.35,1.35,0,0,1-.5,1.5c-.74.65-1.47,1.31-2.23,1.93a.85.85,0,0,0-.31,1c.24,1,.43,1.92.66,2.87a1.37,1.37,0,0,1-2.13,1.51c-.81-.51-1.65-1-2.45-1.51a.86.86,0,0,0-1.08,0q-1.26.81-2.58,1.53C3.36,17.84,2.32,17.18,2.37,15.87Z' /><path class='s star-2' d='M22.61,18.17c.3-1.29.62-2.82,1-4.32a1.14,1.14,0,0,0-.42-1.31c-1-.87-2-1.79-3.05-2.67a1.94,1.94,0,0,1,1.17-3.55c1.32-.09,2.63-.25,4-.33a1.19,1.19,0,0,0,1.18-.83c.51-1.29,1.1-2.54,1.63-3.81A1.85,1.85,0,0,1,29.92,0a1.9,1.9,0,0,1,1.79,1.33c.53,1.31,1.12,2.59,1.64,3.9a1.05,1.05,0,0,0,1,.76c1.37.09,2.75.23,4.12.36a1.93,1.93,0,0,1,1.16,3.49c-1,.91-2.06,1.84-3.13,2.71a1.2,1.2,0,0,0-.43,1.38c.33,1.34.61,2.69.92,4a1.88,1.88,0,0,1-.69,2.12,1.91,1.91,0,0,1-2.3,0c-1.15-.71-2.33-1.38-3.45-2.13a1.22,1.22,0,0,0-1.52,0c-1.18.76-2.39,1.49-3.63,2.16C24,20.93,22.54,20,22.61,18.17Z' /><path class='s star-3' d='M47.05,15.87c.21-.91.44-2,.71-3.07a.78.78,0,0,0-.29-.92C46.73,11.26,46,10.6,45.3,10a1.36,1.36,0,0,1-.55-1.54,1.39,1.39,0,0,1,1.38-1c.93-.06,1.87-.17,2.8-.23a.86.86,0,0,0,.85-.59c.36-.91.77-1.8,1.15-2.71a1.34,1.34,0,0,1,1.32-1,1.36,1.36,0,0,1,1.27,1c.38.93.8,1.84,1.16,2.77a.76.76,0,0,0,.74.54c1,.06,2,.17,2.93.26a1.38,1.38,0,0,1,1.33,1,1.35,1.35,0,0,1-.5,1.5c-.74.65-1.47,1.31-2.23,1.93a.85.85,0,0,0-.31,1c.24,1,.43,1.92.66,2.87a1.37,1.37,0,0,1-2.13,1.51c-.81-.51-1.65-1-2.45-1.51a.86.86,0,0,0-1.08,0q-1.26.81-2.58,1.53C48,17.84,47,17.18,47.05,15.87Z' /></g>",
      game_star_svg:
        "<g><path class='s star-1' d='M2.37,15.87c.21-.91.44-2,.71-3.07a.8.8,0,0,0-.29-.92C2.05,11.26,1.35,10.6.62,10A1.36,1.36,0,0,1,.07,8.43a1.39,1.39,0,0,1,1.38-1c.93-.06,1.87-.17,2.8-.23a.86.86,0,0,0,.85-.59c.36-.91.77-1.8,1.15-2.71A1.34,1.34,0,0,1,7.57,3a1.36,1.36,0,0,1,1.27,1c.38.93.8,1.84,1.16,2.77a.76.76,0,0,0,.74.54c1,.06,1.95.17,2.93.26a1.38,1.38,0,0,1,1.33,1,1.35,1.35,0,0,1-.5,1.5c-.74.65-1.47,1.31-2.23,1.93a.85.85,0,0,0-.31,1c.24,1,.43,1.92.66,2.87a1.37,1.37,0,0,1-2.13,1.51c-.81-.51-1.65-1-2.45-1.51a.86.86,0,0,0-1.08,0q-1.26.81-2.58,1.53C3.36,17.84,2.32,17.18,2.37,15.87Z' /><path class='s star-2' d='M22.61,18.17c.3-1.29.62-2.82,1-4.32a1.14,1.14,0,0,0-.42-1.31c-1-.87-2-1.79-3.05-2.67a1.94,1.94,0,0,1,1.17-3.55c1.32-.09,2.63-.25,4-.33a1.19,1.19,0,0,0,1.18-.83c.51-1.29,1.1-2.54,1.63-3.81A1.85,1.85,0,0,1,29.92,0a1.9,1.9,0,0,1,1.79,1.33c.53,1.31,1.12,2.59,1.64,3.9a1.05,1.05,0,0,0,1,.76c1.37.09,2.75.23,4.12.36a1.93,1.93,0,0,1,1.16,3.49c-1,.91-2.06,1.84-3.13,2.71a1.2,1.2,0,0,0-.43,1.38c.33,1.34.61,2.69.92,4a1.88,1.88,0,0,1-.69,2.12,1.91,1.91,0,0,1-2.3,0c-1.15-.71-2.33-1.38-3.45-2.13a1.22,1.22,0,0,0-1.52,0c-1.18.76-2.39,1.49-3.63,2.16C24,20.93,22.54,20,22.61,18.17Z' /><path class='s star-3' d='M47.05,15.87c.21-.91.44-2,.71-3.07a.78.78,0,0,0-.29-.92C46.73,11.26,46,10.6,45.3,10a1.36,1.36,0,0,1-.55-1.54,1.39,1.39,0,0,1,1.38-1c.93-.06,1.87-.17,2.8-.23a.86.86,0,0,0,.85-.59c.36-.91.77-1.8,1.15-2.71a1.34,1.34,0,0,1,1.32-1,1.36,1.36,0,0,1,1.27,1c.38.93.8,1.84,1.16,2.77a.76.76,0,0,0,.74.54c1,.06,2,.17,2.93.26a1.38,1.38,0,0,1,1.33,1,1.35,1.35,0,0,1-.5,1.5c-.74.65-1.47,1.31-2.23,1.93a.85.85,0,0,0-.31,1c.24,1,.43,1.92.66,2.87a1.37,1.37,0,0,1-2.13,1.51c-.81-.51-1.65-1-2.45-1.51a.86.86,0,0,0-1.08,0q-1.26.81-2.58,1.53C48,17.84,47,17.18,47.05,15.87Z' /></g>",

      //↓用來開啟關卡畫面
      checkpoint: true,
      //↓用來開啟遊戲畫面
      game: false,
      //↓用來變更遊戲內容
      options: 0,
      //↓遊戲單元顏色變換(上方選單)
      selArr: [
        {
          id: 1,
          name: "styls1",
        },
        {
          id: 2,
          name: "styls2",
        },
        {
          id: 3,
          name: "styls3",
        },
        {
          id: 4,
          name: "styls4",
        },
      ],
      //↓用來變更遊戲單元(上方選單)
      sel: 0,
      //↓用來宣告index
      checkpoint_item: 0,

      unit: "Unit1",
      game_options: [
        {
          name: "Story",
        },
        {
          name: "Letters",
        },
        {
          name: "Vocabulary",
        },
        {
          name: "SentencePattern",
        },
      ],

      //↓左邊選單
      game_menu_options: [
        {
          grayscale: false,
          s1: true,
          s2: false,
          s3: false,
          img: "/images/game/video.svg",
        },
        {
          grayscale: false,
          s1: true,
          s2: true,
          s3: true,
          img: "/images/game/movie.svg",
        },
        {
          grayscale: false,
          s1: true,
          s2: false,
          s3: false,
          img: "/images/game/mic.svg",
        },
        {
          grayscale: false,
          s1: true,
          s2: true,
          s3: false,
          img: "/images/game/game.svg",
        },
        {
          grayscale: true,
          s1: false,
          s2: false,
          s3: false,
          img: "/images/game/game.svg",
        },
      ],

      //↓百分比進度條
      percentage: 0,

      pointer: -75,

      recording_state: 0,
    };
  },
  async created() {
    await this.info_data();
    await this.loading();
  },
  methods: {
    recording_stara() {
      this.recording_state = 1;
    },
    recording_gamesStara() {
      this.percentage = 50;
      this.pointer = 0;
      this.recording_state = 2;
    },
    recording_return() {
      this.pointer = -75;
      this.recording_state = 0;
      this.percentage = 0;
    },
    off_game() {
      this.checkpoint = true;
      this.game = false;
      this.sel = 0;
      this.options = 0;
    },
    through(index) {
      this.checkpoint_item = index;
      let gray = this.info.checkpoint[this.checkpoint_item].gray;
      if (gray) {
        this.$swal("<b>錯誤</b>", "此關卡尚未解鎖", "error");
      } else {
        this.checkpoint = false;
        this.game = true;
        this.game_data(this.checkpoint_item);
      }
    },
    game_data() {
      let sel = this.sel;
      // let options = this.options;

      this.$axios
        .get("/json/game" + this.checkpoint_item + "-" + sel + ".json")
        // .get('/json/game' + this.checkpoint_item + '-' + sel + '-' + options + '.json')
        // .then(res => (this.info = res.data))
        // .then(function (res) {
        // console.log(res.data);
        // console.log('/json/game' + this.checkpoint_item + '-' + sel + '-' + options + '.json');
        // })
        .catch(function (error) {
          console.log(error);
        });
    },
    info_data() {
      let o = this.order;
      this.$axios
        .get("/json/checkpoint_" + o + ".json")
        .then((res) => (this.info = res.data))
        .catch(function (error) {
          console.log(error);
        });
    },
    left_arrow() {
      if (this.order === 1) {
        this.order = 1;
      } else {
        this.order--;
        this.info_data();
        // this.eyecatch = false;
      }
    },
    right_arrow() {
      if (this.order === this.max_order) {
        this.order = this.max_order;
      } else {
        this.order++;
        this.info_data();
        // this.eyecatch = true;
      }
    },
    styls(index) {
      this.sel = index;
      this.game_data();
    },
    optionsStyls(index) {
      let g = this.game_menu_options[index].grayscale;
      if (!g) {
        this.options = index;
        // this.game_data();
      } else {
        this.$swal("<b>錯誤</b>", "此關卡尚未解鎖", "error");
      }
    },
    loading() {
      this.$store.state.isLoading = true;
    },
  },
  computed: {
    stylsClass() {
      let className = "";
      let css = "";
      switch (this.sel) {
        case 0:
          className = "styls0";
          css = "styls0";
          break;
        case 1:
          className = "styls1";
          css = "styls1";
          break;
        case 2:
          className = "styls2";
          css = "styls2";
          break;
        case 3:
          className = "styls3";
          css = "styls3";
          break;
        default:
          break;
      }
      return {
        css: css,
        name: className,
      };
    },
    pointer_rotate() {
      return {
        transform: "rotate(" + this.pointer + "deg)",
      };
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
#game {
  // fill
  width: 100%;
  height: 900px;
  max-height: 720px;
  display: flex;
  flex-wrap: wrap;

  .game_options {
    width: 100%;
    padding-left: 185px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    // margin-bottom: 15px;
    height: 72px;

    h1 {
      font-size: 72px;
      height: 72px;

      &.styls0 {
        color: #107b9e;
      }

      &.styls1 {
        color: #17a6af;
      }

      &.styls2 {
        color: #eb9e71;
      }

      &.styls3 {
        color: #d7574e;
      }
    }

    button {
      height: 72px;
      font-size: 32px;
      padding: 0 25px;
      height: 72px;
      border: none;
      color: #fff;
      cursor: pointer;
      box-sizing: border-box;
      border-radius: 10px;

      &.styls0 {
        background-color: #107b9e;

        &.active {
          background-color: #fff;
          color: #107b9e;
          border: 5px solid #107b9e;
        }
      }

      &.styls1 {
        background-color: #17a6af;

        &.active {
          background-color: #fff;
          color: #17a6af;
          border: 5px solid #17a6af;
        }
      }

      &.styls2 {
        background-color: #eb9e71;

        &.active {
          background-color: #fff;
          color: #eb9e71;
          border: 5px solid #eb9e71;
        }
      }

      &.styls3 {
        background-color: #d7574e;

        &.active {
          background-color: #fff;
          color: #d7574e;
          border: 5px solid #d7574e;
        }
      }
    }
  }

  .game_menu {
    width: 115px;
    margin-right: 50px;

    ul {
      li {
        width: 100%;
        height: 115px;
        border-radius: 999px;
        position: relative;
        transition: 0.6s;
        cursor: pointer;
        overflow: hidden;
        background-color: transparent;

        .item {
          width: 85%;
          height: 85%;
          background-color: #107b9e;
          border-radius: 999px;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: 3px solid #fff;
        }

        img {
          max-width: 45px;
          max-height: 35px;
          margin: auto;
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 50px;
        }

        svg {
          max-width: 60px;
          margin: auto;
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 20px;
          fill: #fff;
        }

        &.styls0 {
          &.active {
            background-color: #107b9e;
          }

          .item {
            background-color: #107b9e;
          }
        }

        &.styls1 {
          &.active {
            background-color: #17a6af;
          }

          .item {
            background-color: #17a6af;
          }
        }

        &.styls2 {
          &.active {
            background-color: #eb9e71;
          }

          .item {
            background-color: #eb9e71;
          }
        }

        &.styls3 {
          &.active {
            background-color: #d7574e;
          }

          .item {
            background-color: #d7574e;
          }
        }

        &.grayscale {
          filter: grayscale(100%);

          &.active {
            background-color: transparent !important;
          }

          .item {
            background-color: #000 !important;
          }
        }

        &.s1 {
          svg {
            .star-1 {
              fill: #f5e929;
            }
          }
        }

        &.s2 {
          svg {
            .star-2 {
              fill: #f5e929;
            }
          }
        }

        &.s3 {
          svg {
            .star-3 {
              fill: #f5e929;
            }
          }
        }
      }
    }
  }

  .game_main {
    width: calc(100% - 185px);
    min-height: 570px;
    border: 5px solid #000;
    background-color: #7a7a7a;
    box-sizing: border-box;
    border-radius: 25px;
    position: relative;
    margin-left: 15px;
    margin-bottom: 50px;

    .content {
      position: absolute;
      top: 5px;
      left: 5px;
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      border: 5px solid #000;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: 15px;
      overflow: hidden;

      #progress_bar {
        position: absolute;
        left: 0;
        right: 0;
        top: 60px;
        margin: auto;
        width: 320px;

        .percentage {
          position: absolute;
          top: -45px;
          left: 0%;
          background-color: #eb9e71;
          padding: 5px;
          border-radius: 10px;
          line-height: 20px;
          transform: translateX(-50%);
          font-family: Anton, serif;
          transition: 3s;

          &::before {
            content: "";
            display: block;
            position: absolute;
            width: 7.5px;
            height: 20px;
            background-color: #eb9e71;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .baseline {
          width: 100%;
          height: 20px;
          background-color: #dcdcdc;
          margin: auto;
          border-radius: 5px;
          overflow: hidden;
          position: relative;

          .line {
            background-color: #eb9e71;
            height: 100%;
            width: 0%;
            position: absolute;
            left: 0;
            top: 0;
            transition: 3s;
          }
        }
      }

      .video,
      .movie,
      .mic {
        width: 100%;
        height: 100%;
        position: absolute;

        video {
          width: 100%;
          height: 100%;
        }

        .return,
        .sound,
        .say {
          width: 70px;
          padding-left: 0;
          padding-right: 0;
          position: absolute;
          bottom: 15px;
          cursor: pointer;
          // display: none;
        }

        .say {
          left: 15px;
        }

        .sound {
          left: 0;
          right: 0;
          margin: auto;
        }

        .return {
          right: 15px;
        }
      }

      #surface {
        .surface {
          width: 250px;
          position: absolute;
          left: calc(50% - 125px);
          margin-left: 0;
          margin-right: 0;
          bottom: 15px;
          padding-left: 0;
          padding-right: 0;
        }

        .pointer {
          width: 15px;
          position: absolute;
          bottom: 50px;
          padding-left: 0;
          padding-right: 0;
          left: calc(50% - 7.5px);
          transform-origin: center bottom;
          transform: rotate(0deg);
          // -75 -40 0 40 75
          transition: 3s;
        }
        .sound {
          left: 15px;
          right: unset;
        }
      }
    }
  }
}
</style>