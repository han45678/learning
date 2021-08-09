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
          <div id="records">
            <div class="game_options">
              <div class="h_options" v-if="this.options === 0">
                <h1>My Level</h1>
                <div class="hoc">
                  <ul class="hoct">
                    <li class="active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25.49 29.83"
                      >
                        <g>
                          <path
                            class="cls-1"
                            d="M6.18,16.47A1.12,1.12,0,1,0,7.3,17.59,1.12,1.12,0,0,0,6.18,16.47Zm0,4.73A1.12,1.12,0,1,0,7.3,22.32,1.12,1.12,0,0,0,6.18,21.2Zm0-9.46A1.12,1.12,0,1,0,7.3,12.86,1.12,1.12,0,0,0,6.18,11.74Zm13.08.45H9.53a.67.67,0,0,0,0,1.34h9.73a.67.67,0,1,0,0-1.34Zm5.11-7.54H21.29V4a.67.67,0,0,0-.67-.67H17A4.44,4.44,0,0,0,12.75,0h0A4.44,4.44,0,0,0,8.46,3.37H4.87A.67.67,0,0,0,4.2,4v.61H1.12A1.12,1.12,0,0,0,0,5.77V28.71a1.12,1.12,0,0,0,1.12,1.12H24.37a1.12,1.12,0,0,0,1.12-1.12V5.77A1.12,1.12,0,0,0,24.37,4.65ZM10.58,2.25a3,3,0,0,1,2.16-.9h0a3.09,3.09,0,0,1,2.88,2H9.86A3,3,0,0,1,10.58,2.25Zm-5,2.46H20V6.83H5.54ZM23.25,27.59h-21V6.89h2v.62a.67.67,0,0,0,.67.67H20.62a.67.67,0,0,0,.67-.67V6.89h2Zm-4-5.94H9.53a.67.67,0,0,0,0,1.34h9.73a.67.67,0,1,0,0-1.34Zm0-4.73H9.53a.67.67,0,0,0,0,1.34h9.73a.67.67,0,0,0,0-1.34Z"
                          />
                        </g>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30.17 30.17"
                      >
                        <g>
                          <path
                            class="cls-1"
                            d="M16.34,3.85V0H13.83V3.85a11.31,11.31,0,0,0-10,10H0v2.51H3.85a11.33,11.33,0,0,0,10,10v3.84h2.51V26.33a11.35,11.35,0,0,0,10-10h3.84V13.83H26.33A11.33,11.33,0,0,0,16.34,3.85Zm7.45,10H21.24a6.29,6.29,0,0,0-4.9-4.9V6.39A8.8,8.8,0,0,1,23.79,13.83Zm-8.7,5a3.77,3.77,0,1,1,3.77-3.77A3.78,3.78,0,0,1,15.09,18.86ZM13.83,6.39V8.93a6.29,6.29,0,0,0-4.9,4.9H6.39A8.78,8.78,0,0,1,13.83,6.39Zm-7.44,10H8.93a6.32,6.32,0,0,0,4.9,4.91v2.54A8.8,8.8,0,0,1,6.39,16.34Zm10,7.45V21.25a6.32,6.32,0,0,0,4.9-4.91h2.55A8.83,8.83,0,0,1,16.34,23.79Z"
                          />
                        </g>
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33.78 32.13"
                      >
                        <g>
                          <polygon
                            class="cls-1"
                            style="
                              fill: none;
                              stroke: #fff;
                              stroke-miterlimit: 10;
                              stroke-width: 2.82px;
                            "
                            points="16.89 1.74 1.66 12.81 7.48 30.72 26.31 30.72 32.13 12.81 16.89 1.74"
                          />
                          <polyline
                            class="cls-2"
                            style="
                              fill: none;
                              stroke: #fff;
                              stroke-miterlimit: 10;
                            "
                            points="1.66 12.81 16.73 18.31 32.13 12.81"
                          />
                          <polyline
                            class="cls-2"
                            style="
                              fill: none;
                              stroke: #fff;
                              stroke-miterlimit: 10;
                            "
                            points="16.89 1.74 16.73 18.31 7.48 30.72"
                          />
                          <line
                            class="cls-2"
                            x1="26.31"
                            y1="30.72"
                            x2="16.73"
                            y2="18.31"
                          />
                        </g>
                      </svg>
                    </li>
                  </ul>
                  <ul class="hocb">
                    <li>SB</li>
                    <li class="active">PB</li>
                    <li>Reader1</li>
                    <li>Reader2</li>
                    <li>Reader3</li>
                  </ul>
                </div>
              </div>
              <div v-else-if="this.options === 1">
                <h1></h1>
              </div>
              <div v-else-if="this.options === 2">
                <h1></h1>
              </div>
              <div v-else-if="this.options === 3">
                <h1></h1>
              </div>
              <div v-else-if="this.options === 4">
                <h1></h1>
              </div>
              <div v-else-if="this.options === 5">
                <h1></h1>
              </div>
              <div v-else-if="this.options === 6">
                <h1></h1>
              </div>
            </div>
            <div class="game_menu">
              <ul>
                <li
                  v-for="(item, index) in game_menu_options"
                  @click="optionsStyls(index)"
                  :key="index"
                  :class="[
                    {
                      active: options === index,
                      styls0: item.styls0,
                      styls1: item.styls1,
                      styls2: item.styls2,
                      styls3: item.styls3,
                      styls4: item.styls4,
                    },
                  ]"
                >
                  <div class="item">
                    <img :src="item.img" alt="icon" />
                  </div>
                </li>
              </ul>
            </div>
            <div class="game_main">
              <div class="content">
                <transition type="transition" name="fade">
                  <div v-show="this.options === 0">
                    <table>
                      <thead>
                        <tr>
                          <td>Level</td>
                          <td>Time</td>
                          <td>Rank</td>
                          <td>Feedback</td>
                          <td>Certificate</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in my_level" :key="index">
                          <td>Level-{{ item.order }}</td>
                          <td>{{ item.time }}</td>
                          <td>
                            <svg
                              class="rank s1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 41.83 40.4"
                              v-html="star"
                              :class="{ active: item.s1 }"
                            ></svg>
                            <svg
                              class="rank s2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 41.83 40.4"
                              v-html="star"
                              :class="{ active: item.s2 }"
                            ></svg>
                            <svg
                              class="rank s3"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 41.83 40.4"
                              v-html="star"
                              :class="{ active: item.s3 }"
                            ></svg>
                          </td>
                          <td>
                            <img
                              class="feedback"
                              src="/images/records/f.svg"
                              alt="f"
                            />
                          </td>
                          <td>
                            <img
                              class="certificate"
                              src="/images/records/c.svg"
                              alt="c"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table v-if="0">
                      <thead>
                        <tr>
                          <td>Unit</td>
                          <td>Completed</td>
                          <td>Response</td>
                          <td>Results</td>
                          <td>Certificate</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in my_level" :key="index">
                          <td>Level-{{ item.order }}</td>
                          <td>{{ item.time }}</td>
                          <td>
                            <svg
                              class="rank s1"
                              v-html="lightn"
                              :class="{ active: item.s1 }"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 30.23 41.78"
                            ></svg>
                            <svg
                              class="rank s2"
                              v-html="lightn"
                              :class="{ active: item.s2 }"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 30.23 41.78"
                            ></svg>
                            <svg
                              class="rank s3"
                              v-html="lightn"
                              :class="{ active: item.s3 }"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 30.23 41.78"
                            ></svg>
                          </td>
                          <td>
                            <svg
                              class="rank s1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 41.83 40.4"
                              v-html="star"
                              :class="{ active: item.s1 }"
                            ></svg>
                            <svg
                              class="rank s2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 41.83 40.4"
                              v-html="star"
                              :class="{ active: item.s2 }"
                            ></svg>
                            <svg
                              class="rank s3"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 41.83 40.4"
                              v-html="star"
                              :class="{ active: item.s3 }"
                            ></svg>
                          </td>
                          <td>
                            <img
                              class="certificate"
                              src="/images/records/c.svg"
                              alt="c"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </transition>
                <transition type="transition" name="fade">
                  <div v-show="this.options === 1">2</div>
                </transition>
                <transition type="transition" name="fade">
                  <div v-show="this.options === 2">3</div>
                </transition>
                <transition type="transition" name="fade">
                  <div v-show="this.options === 3">4</div>
                </transition>
                <transition type="transition" name="fade">
                  <div v-show="this.options === 4">5</div>
                </transition>
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
      star: "<g><path class='s' d='M21.42,2s-1.91-.72-3,2.84-4.69,8-4.69,8L3.27,14.42,1.69,16.53,3.93,19l6,6.2L8.55,32l-.33,5.15,1.92,2.05L18,35l3.89-1.58,3.83,2.51,5.61,3a12.4,12.4,0,0,0,2.31-.79c.07-.2-2.7-9.71-2.7-9.71L32,25.77l2.91-3.56,3.83-3.7,1-3-4.16-2.37-5.88-.07L27.1,13l-.86-3.5L24.52,4.39Z'/><path fill='#107b9e' d='M6.59,35.84c.58-2.54,1.22-5.55,2-8.52a2.23,2.23,0,0,0-.83-2.57c-2-1.72-4-3.54-6-5.28C.38,18.31-.38,17,.19,15.18A3.82,3.82,0,0,1,4,12.47c2.61-.17,5.2-.5,7.8-.65a2.34,2.34,0,0,0,2.34-1.65c1-2.53,2.16-5,3.2-7.51A3.69,3.69,0,0,1,21,0a3.74,3.74,0,0,1,3.52,2.63c1.05,2.57,2.22,5.1,3.24,7.69a2.07,2.07,0,0,0,2,1.5c2.72.17,5.43.46,8.14.71a3.82,3.82,0,0,1,3.68,2.69,3.77,3.77,0,0,1-1.39,4.19c-2,1.79-4.06,3.63-6.17,5.35a2.36,2.36,0,0,0-.86,2.73c.65,2.64,1.19,5.31,1.81,8a3.73,3.73,0,0,1-1.35,4.19,3.77,3.77,0,0,1-4.55,0c-2.26-1.4-4.59-2.72-6.81-4.19a2.36,2.36,0,0,0-3,.05C17,37,14.61,38.43,12.17,39.76,9.34,41.29,6.45,39.46,6.59,35.84Zm2.77.46c.11,1.28.75,1.45,1.75.86,2.39-1.41,4.82-2.78,7.16-4.28A4.44,4.44,0,0,1,23.6,33c2.13,1.4,4.33,2.7,6.55,4a3.1,3.1,0,0,0,1.69.38c.94-.44,0-3.37-.17-4q-.6-2.79-1.26-5.55a4.38,4.38,0,0,1,1.52-4.82c1.32-1.09,2.61-2.21,3.89-3.35a21.86,21.86,0,0,0,2.33-2.18c.34-.4.9-.9.58-1.42-.6-1-2.87-.81-3.82-.9-1.88-.19-3.76-.35-5.64-.5a4.2,4.2,0,0,1-3.95-2.87c-1-2.48-2-4.93-3.12-7.36a3.55,3.55,0,0,0-.83-1.09c-.68-.58-1.37.39-1.66,1-1.06,2.32-2.11,4.65-3,7a4.72,4.72,0,0,1-4.62,3.28c-1.67.1-3.34.28-5,.44A14.36,14.36,0,0,0,4,15.46c-2.69.87.8,3,1.79,3.9,1.23,1.11,2.47,2.2,3.75,3.24A4.72,4.72,0,0,1,11.28,28C10.54,30.73,10,33.52,9.36,36.3Z'/></g>",
      lightn:
        "<g><polygon class='cls-1' style='fill: none; stroke: #107b9e; stroke-linecap: round; stroke-linejoin: round; stroke-width: 7px;' points='9.34 3.5 25 3.5 14.52 14.12 26.73 14.12 6.68 38.27 13.99 22.08 3.5 22.08 9.34 3.5' /><polygon class='s' points='9.34 3.5 25 3.5 14.52 14.12 26.73 14.12 6.68 38.27 13.99 22.08 3.5 22.08 9.34 3.5' /></g>",

      //↓用來開啟關卡畫面
      checkpoint: true,
      //↓用來開啟遊戲畫面
      game: false,
      //↓用來變更遊戲內容
      options: 0,
      //↓用來變更遊戲單元(上方選單)
      sel: 0,
      //↓用來宣告index
      checkpoint_item: 0,

      //↓左邊選單
      game_menu_options: [
        {
          img: "/images/records/menu0.svg",
          styls0: true,
          open: 1,
        },
        {
          img: "/images/records/menu1.svg",
          styls1: true,
          open: 1,
        },
        {
          img: "/images/records/menu2.svg",
          styls2: true,
          open: 0,
        },
        {
          img: "/images/records/menu3.svg",
          styls3: true,
          open: 0,
        },
        {
          img: "/images/records/menu4.svg",
          styls4: true,
          open: 0,
        },
      ],

      my_level: [
        {
          order: 1,
          time: "30:15:25",
          s1: true,
          s2: true,
          s3: true,
        },
        {
          order: 2,
          time: "30:15:25",
          s1: true,
          s2: true,
          s3: false,
        },
        {
          order: 3,
          time: "30:15:25",
          s1: true,
          s2: false,
          s3: false,
        },
        {
          order: 4,
          time: "30:15:25",
          s1: false,
          s2: false,
          s3: false,
        },
        {
          order: 5,
          time: "30:15:25",
          s1: false,
          s2: false,
          s3: false,
        },
        {
          order: 6,
          time: "30:15:25",
          s1: false,
          s2: false,
          s3: false,
        },
        {
          order: 7,
          time: "30:15:25",
          s1: false,
          s2: false,
          s3: false,
        },
      ],
    };
  },
  async created() {
    // await this.info_data();
    await this.loading();
  },
  methods: {
    loading() {
      this.$store.state.isLoading = true;
    },
    optionsStyls(index) {
      let open = this.game_menu_options[index].open;
      if (!open) {
        this.$swal("<b>錯誤</b>", "此關卡尚未解鎖", "error");
      } else {
        this.options = index;
      }
    },
  },
  computed: {
    // stylsClass() {
    //   let className = "";
    //   let css = "";
    //   switch (this.sel) {
    //     case 0:
    //       className = "styls0";
    //       css = "styls0";
    //       break;
    //     case 1:
    //       className = "styls1";
    //       css = "styls1";
    //       break;
    //     case 2:
    //       className = "styls2";
    //       css = "styls2";
    //       break;
    //     case 3:
    //       className = "styls3";
    //       css = "styls3";
    //       break;
    //     default:
    //       break;
    //   }
    //   return {
    //     css: css,
    //     name: className,
    //   };
    // },
  },
};
</script>

<style scoped lang="scss">
#records {
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
    }

    .h_options {
      width: 100%;
      display: flex;
      h1 {
        width: 300px;
      }
      .hoc {
        width: calc(100% - 300px);
        .hoct {
          width: 100%;
          text-align: right;
          li {
            display: inline-block;
            width: 35px;
            height: 35px;
            line-height: 35px;
            background-color: #17a6af;
            position: relative;
            border-radius: 999px;
            margin-left: 10px;
            cursor: pointer;
            svg {
              max-height: 20px;
              max-width: 20px;
              padding: 0;
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              fill: #fff;
            }
            &.active {
              background-color: #107b9e;
              svg {
                fill: #fffbc7;
              }
            }
          }
        }
        .hocb {
          margin-top: 5px;
          width: 100%;
          background-color: #17a6af;
          border-radius: 10px;
          li {
            color: #fff;
            line-height: 40px;
            display: inline-block;
            width: 20%;
            text-align: center;
            font-size: 20px;
            cursor: pointer;
            &.active {
              color: #fffbc7;
              background-color: #107b9e;
            }
          }
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
          max-width: 40px;
          max-height: 40px;
          margin: auto;
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
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

        &.styls4 {
          &.active {
            background-color: #a87ba7;
          }

          .item {
            background-color: #a87ba7;
          }
        }
      }
    }
  }

  .game_main {
    width: calc(100% - 185px);
    min-height: 570px;
    box-sizing: border-box;
    position: relative;
    margin-left: 15px;
    margin-bottom: 50px;

    .content {
      position: absolute;
      top: 5px;
      left: 5px;
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      box-sizing: border-box;
      overflow: hidden;

      table {
        margin-top: 15px;
        border-spacing: 0px 5px;
        border-collapse: unset;
        width: 100%;
        text-align: center;
        thead {
          tr {
            border-radius: 5px;
            width: 100%;
            font-size: 20px;
            line-height: 45px;
            color: #fff;

            td {
              background-color: #107b9e;
              &:first-child {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
              }
              &:last-child {
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
              }
            }
          }
        }
        tbody {
          tr {
            cursor: pointer;
            &:nth-child(odd) {
              td {
                background-color: #d8ebf5;
              }
            }
            &:nth-child(even) {
              td {
                background-color: #bdd7f0;
              }
            }
            td {
              line-height: 45px;
              .rank {
                width: 30px;
                height: 30px;
                position: relative;
                top: 8px;
                margin-left: 2.5px;
                margin-right: 2.5px;
              }
              .feedback {
                width: 30px;
                position: relative;
                top: 8px;
              }
              .certificate {
                height: 25px;
                position: relative;
                top: 8px;
                width: unset;
              }
              &:first-child {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
              }
              &:last-child {
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
              }
            }
            &:hover {
              td {
                background-color: #107b9e !important;
                color: #fff !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>