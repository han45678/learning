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
              <div class="h_options" v-if="options === 0">
                <h1 style="color: #107b9e">My Level</h1>
                <div class="hoc" v-if="level_text">
                  <ul class="hoct">
                    <li
                      :class="{ active: this.level_content_info_state === 1 }"
                      @click="level_content_info_state = 1"
                    >
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
                    <li
                      :class="{ active: this.level_content_info_state === 2 }"
                      @click="b_chart"
                    >
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
                    <li
                      :class="{ active: this.level_content_info_state === 3 }"
                      @click="s_chart"
                    >
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
                    <li @click="unit = 1" :class="{ active: unit === 1 }">SB</li>
                    <li @click="unit = 2" :class="{ active: unit === 2 }">PB</li>
                    <li @click="unit = 3" :class="{ active: unit === 3 }">Reader1</li>
                    <li @click="unit = 4" :class="{ active: unit === 4 }">Reader2</li>
                    <li @click="unit = 5" :class="{ active: unit === 5 }">Reader3</li>
                  </ul>
                </div>
              </div>
              <div v-if="options === 1">
                <h1 style="color: #17a6af">My Tasks</h1>
              </div>
              <div v-if="options === 2">
                <h1 style="color: #a87ba7">My Achievement</h1>
                <!-- <h1 style="color: #b66444">ToDay {{ to_day }}</h1> -->
              </div>
              <div v-if="options === 3">
                <h1 style="color: #d7574e">My Calendar</h1>
              </div>
              <div v-if="options === 4">
                <h1 style="color: #b66444">My Lessons</h1>
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
                <div v-show="options === 0">
                  <table v-if="!this.level_text">
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
                      <tr
                        v-for="(item, index) in my_level"
                        :key="index"
                        @click="level_content(index)"
                      >
                        <td>Level-{{ item.order }}</td>
                        <td>{{ item.time }}</td>
                        <td>
                          <svg
                            class="rank s1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 41.83 40.4"
                            v-html="star"
                            :class="{ active: item.s1 }"
                          />
                          <svg
                            class="rank s2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 41.83 40.4"
                            v-html="star"
                            :class="{ active: item.s2 }"
                          />
                          <svg
                            class="rank s3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 41.83 40.4"
                            v-html="star"
                            :class="{ active: item.s3 }"
                          />
                        </td>
                        <td>
                          <img
                            class="feedback"
                            src="images/records/f.svg"
                            alt="f"
                          />
                        </td>
                        <td>
                          <img
                            class="certificate"
                            src="images/records/c.svg"
                            alt="c"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    v-if="
                      this.level_text && this.level_content_info_state === 1
                    "
                  >
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
                      <tr
                        v-for="(item, index) in level_content_info"
                        :key="index"
                      >
                        <td>{{ item.unit }}</td>
                        <td :class="{ rt: item.completed < 60 }">
                          {{ item.completed }}%
                        </td>
                        <td>
                          <svg
                            class="rank s1"
                            v-html="lightn"
                            :class="{ active: item.l1 }"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30.23 41.78"
                          />
                          <svg
                            class="rank s2"
                            v-html="lightn"
                            :class="{ active: item.l2 }"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30.23 41.78"
                          />
                          <svg
                            class="rank s3"
                            v-html="lightn"
                            :class="{ active: item.l3 }"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30.23 41.78"
                          />
                        </td>
                        <td>
                          <svg
                            class="rank s1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 41.83 40.4"
                            v-html="star"
                            :class="{ active: item.s1 }"
                          />
                          <svg
                            class="rank s2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 41.83 40.4"
                            v-html="star"
                            :class="{ active: item.s2 }"
                          />
                          <svg
                            class="rank s3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 41.83 40.4"
                            v-html="star"
                            :class="{ active: item.s3 }"
                          />
                        </td>
                        <td>
                          <button class="active" v-if="item.certificate === 1">
                            Report
                          </button>
                          <button v-else-if="item.certificate === 2">
                            Challenge
                          </button>
                          <button v-else>Mistakes</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    id="big_chart"
                    :class="{
                      active:
                        this.level_text && this.level_content_info_state === 2,
                    }"
                    v-show="
                      this.level_text && this.level_content_info_state === 2
                    "
                  >
                    <!-- 大圖表 -->
                    <div class="big_chart_content">
                      <canvas id="bc" />
                    </div>
                  </div>
                  <div
                    id="small_chart"
                    v-show="
                      this.level_text && this.level_content_info_state === 3
                    "
                  >
                    <!-- 小圖表 -->
                    <div class="small_chart_content">
                      <div class="item">
                        <div class="item_content">
                          <canvas id="bc_s1" />
                        </div>
                      </div>
                      <div class="item">
                        <div class="item_content">
                          <canvas id="bc_s2" />
                        </div>
                      </div>
                      <div class="item">
                        <div class="item_content">
                          <canvas id="bc_s3" />
                        </div>
                      </div>
                      <div class="item">
                        <div class="item_content">
                          <canvas id="bc_s4" />
                        </div>
                      </div>
                      <div class="item">
                        <div class="item_content">
                          <canvas id="bc_s5" />
                        </div>
                      </div>
                      <div class="item">
                        <div class="item_content">
                          <canvas id="bc_s6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    v-if="
                      this.level_text && this.level_content_info_state === 1
                    "
                    id="back"
                    @click="back"
                  >
                    back
                  </button>
                </div>
                <div v-show="options === 1">
                  <div id="task" class="tasks">
                    <div id="time_checklist">
                      <div class="task_head freeze">
                        <div class="item" />
                        <div class="item">Sign Up</div>
                        <div class="item">Time</div>
                        <div class="item">Activities</div>
                      </div>

                      <div class="task_body">
                        <div
                          class="row"
                          v-for="(item, index) in task"
                          :key="index"
                        >
                          <div class="item">
                            {{ item.week }}
                          </div>
                          <div class="item">
                            <img
                              v-if="item.sign"
                              src="images/records/bulb.svg"
                              alt="img"
                            />
                          </div>
                          <div class="item">
                            {{ item.time }}
                          </div>
                          <div class="item">
                            {{ item.activities }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="weekly">
                      <div class="weekly_head freeze">
                        <div class="item">Weekly Tasks</div>
                        <div class="item">Rewards</div>
                      </div>
                      <div class="weekly_body">
                        <div
                          class="row"
                          v-for="(item, index) in weekly"
                          :key="index"
                        >
                          <div class="item">
                            <div class="medal">
                              <img
                                v-if="item.medal === 1"
                                src="images/records/gold.svg"
                                alt="img"
                              />
                              <img
                                v-else-if="item.medal === 2"
                                src="images/records/silver.svg"
                                alt="img"
                              />
                              <img
                                v-else-if="item.medal === 3"
                                src="images/records/bronze.svg"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div class="item">
                            <h3>{{ item.name }}</h3>
                            <p>{{ item.content1 }}</p>
                            <p>{{ item.content2 }}</p>
                            <div class="schedule">
                              <div class="photo">
                                <div
                                  class="strip"
                                  :style="'width:' + item.schedule + '%'"
                                />
                              </div>
                              <div class="text">{{ item.schedule }}%</div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="award">
                              <img
                                v-if="item.currency_value === 1"
                                src="images/records/gold_s.svg"
                                alt="img"
                              />
                              <img
                                v-if="item.currency_value === 2"
                                src="images/records/silver_s.svg"
                                alt="img"
                              />
                              <span>{{ item.currency }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="options === 4">
                  <div id="timetable">
                    <table v-if="!this.add_schedule">
                      <thead>
                        <tr>
                          <td>Lesson</td>
                          <td>Date</td>
                          <td>Overdue</td>
                          <td>Go</td>
                        </tr>
                      </thead>
                      <!-- 目前的課表 -->
                      <tbody v-if="curriculum">
                        <!-- curriculum && !current_class.length === 0 -->
                        <tr>
                          <td>SB3 / Unit1 / Story</td>
                          <td>6/1</td>
                          <td>
                            <img src="images/records/overdue.svg" alt="img" />
                          </td>
                          <td>
                            <img src="images/records/go.svg" alt="img" />
                          </td>
                        </tr>
                      </tbody>

                      <!-- 如果已經排課過了今天又沒課 -->
                      <tbody
                        v-else-if="curriculum && current_class.length === 0"
                      >
                        <tr>
                          <td
                            colspan="4"
                            style="
                              padding-left: 0;
                              text-align: center;
                              height: 150px;
                              line-height: 150px;
                            "
                          >
                            No Results
                          </td>
                        </tr>
                      </tbody>

                      <!-- 如果一開始就沒選課過 -->
                      <tbody v-else-if="!curriculum && !add_schedule">
                        <tr>
                          <td
                            colspan="4"
                            style="
                              padding-left: 0;
                              text-align: center;
                              height: 150px;
                              line-height: 150px;
                            "
                          >
                            <img
                              @click="add_schedule = true"
                              style="
                                width: 80px;
                                max-height: unset;
                                padding-top: 65px;
                              "
                              src="images/records/add.svg"
                              alt="img"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="add_schedule" v-if="add_schedule">
                      <h3>My Schedule Helper</h3>
                      <h4>How many days per week?</h4>
                      <div class="choice">
                        <button
                          v-for="(item, index) in timetable.week"
                          :key="index"
                          @click="tw(index)"
                          :class="{ active: timetable_week === item.item }"
                        >
                          {{ item.item }}
                        </button>
                      </div>
                      <h4>How many classes per day?</h4>
                      <div class="choice">
                        <button
                          v-for="(item, index) in timetable.classes"
                          :key="index"
                          @click="tc(index)"
                          :class="{ active: timetable_classes === item.item }"
                        >
                          {{ item.item }}
                        </button>
                      </div>
                      <button
                        @click="
                          curriculum = true;
                          add_schedule = false;
                        "
                      >
                        Let's do it!
                      </button>
                      <!--@click="curriculum = true" add_schedule = false-->
                    </div>
                  </div>
                </div>
                <div v-show="options === 3">
                  <!-- <vc-calendar is-expanded /> -->
                  <img
                    style="padding: 0; max-width: 925px"
                    src="images/calendar.png"
                    alt="calendar"
                  />
                </div>
                <div v-show="options === 2">
                  <div id="task" class="calendar">
                    <div id="weekly" style="width: 100%">
                      <div class="weekly_head freeze">
                        <div class="item">Weekly Tasks</div>
                        <div class="item">Rewards</div>
                      </div>
                      <div class="weekly_body">
                        <div
                          class="row"
                          v-for="(item, index) in weekly"
                          :key="index"
                        >
                          <div class="item">
                            <div class="medal">
                              <img
                                v-if="item.medal === 1"
                                src="images/records/gold.svg"
                                alt="img"
                              />
                              <img
                                v-else-if="item.medal === 2"
                                src="images/records/silver.svg"
                                alt="img"
                              />
                              <img
                                v-else-if="item.medal === 3"
                                src="images/records/bronze.svg"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div class="item">
                            <h3>{{ item.name }}</h3>
                            <p>{{ item.content1 }}</p>
                            <p>{{ item.content2 }}</p>
                            <div class="schedule">
                              <div class="photo">
                                <div
                                  class="strip"
                                  :style="'width:' + item.schedule + '%'"
                                />
                              </div>
                              <div class="text">{{ item.schedule }}%</div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="award">
                              <img
                                v-if="item.currency_value === 1"
                                src="images/records/gold_s.svg"
                                alt="img"
                              />
                              <img
                                v-if="item.currency_value === 2"
                                src="images/records/silver_s.svg"
                                alt="img"
                              />
                              <span>{{ item.currency }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
import Vue from "vue";
import Chart from "chart.js/auto";

export default {
  components: {
    VueLoading,
    VueHeader,
    VueFooter,
  },
  data() {
    return {
      level_text: false,
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
          img: "images/records/menu0.svg",
          styls0: true,
          open: true,
        },
        {
          img: "images/records/menu1.svg",
          styls1: true,
          open: true,
        },
        {
          img: "images/records/menu4.svg",
          styls4: true,
          open: true,
        },
        {
          img: "images/records/menu3.svg",
          styls3: true,
          open: true,
        },
        {
          img: "images/records/menu2.svg",
          styls2: true,
          open: true,
        },
      ],

      my_level: [],

      level_content_info: [],

      level_content_info_state: 1,

      task: [],

      weekly: [],

      chart_info: [],

      to_day: "",

      timetable: {
        classes: [
          {
            item: "1",
          },
          {
            item: "2",
          },
          {
            item: "3",
          },
          {
            item: "4",
          },
          {
            item: "5",
          },
          {
            item: "6",
          },
        ],
        week: [
          {
            item: "MON",
          },
          {
            item: "TUE",
          },
          {
            item: "WED",
          },
          {
            item: "THU",
          },
          {
            item: "FRI",
          },
          {
            item: "SAT",
          },
          {
            item: "SUN",
          },
        ],
      },
      timetable_week: "MON",
      timetable_classes: "1",

      // 課表
      curriculum: false,
      add_schedule: false,
      current_class: [],

      //單元
      unit: 1,
    };
  },
  mounted() {
    this.$axios
      .get("json/chart01.json")
      .then((res) => {
        this.chart_info = res.data;
      })
      .catch(function (error) {
        console.log(error);
        Vue.swal("<b>錯誤</b>", "目前無資料", "error");
      });
  },
  async created() {
    await this.level();
    await this.loading();
    await this.my_task();
    await this.my_weekly();
    await this.is_to_day();
  },
  methods: {
    b_chart() {
      this.level_content_info_state = 2;

      const data = {
        labels: this.chart_info.bc.labels,
        datasets: [
          {
            label: "all",
            data: this.chart_info.bc.data,
            fill: true,
            backgroundColor: "rgba(26, 237, 146, 0.6)",
            borderColor: "rgb(26, 237, 146)",
            pointBackgroundColor: "rgb(60, 171, 123)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(60, 171, 123)",
          },
        ],
      };
      const config = {
        type: "radar",
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      };
      const chart = new Chart("bc", config);
      console.log(chart);
    },
    s_chart() {
      this.level_content_info_state = 3;

      const data_s1 = {
        labels: this.chart_info.cc1.labels,
        datasets: [
          {
            label: "All",
            data: this.chart_info.cc1.data,
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
        ],
      };
      const config_s1 = {
        type: "radar",
        data: data_s1,
        options: {
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      };
      const chart_s1 = new Chart("bc_s1", config_s1);
      console.log(chart_s1);

      const data_s2 = {
        labels: this.chart_info.cc2.labels,
        datasets: [
          {
            label: "All",
            data: this.chart_info.cc2.data,
            fill: true,
            backgroundColor: "rgba(207, 61, 21, 0.6)",
            borderColor: "rgb(207, 61, 21)",
            pointBackgroundColor: "rgb(207, 61, 21)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(207, 61, 21)",
          },
        ],
      };
      const config_s2 = {
        type: "radar",
        data: data_s2,
        options: {
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      };
      const chart_s2 = new Chart("bc_s2", config_s2);
      console.log(chart_s2);

      const data_s3 = {
        labels: this.chart_info.cc3.labels,
        datasets: [
          {
            label: "All",
            data: this.chart_info.cc3.data,
            fill: true,
            backgroundColor: "rgba(237, 218, 12, 0.2)",
            borderColor: "rgb(237, 218, 12)",
            pointBackgroundColor: "rgb(237, 218, 12)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(237, 218, 12)",
          },
        ],
      };
      const config_s3 = {
        type: "radar",
        data: data_s3,
        options: {
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      };
      const chart_s3 = new Chart("bc_s3", config_s3);
      console.log(chart_s3);

      const data_s4 = {
        labels: this.chart_info.cc4.labels,
        datasets: [
          {
            label: "All",
            data: this.chart_info.cc4.data,
            fill: true,
            backgroundColor: "rgba(0, 38, 255, 0.2)",
            borderColor: "rgb(0, 38, 255)",
            pointBackgroundColor: "rgb(0, 38, 255)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(0, 38, 255)",
          },
        ],
      };
      const config_s4 = {
        type: "radar",
        data: data_s4,
        options: {
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      };
      const chart_s4 = new Chart("bc_s4", config_s4);
      console.log(chart_s4);

      const data_s5 = {
        labels: this.chart_info.cc5.labels,
        datasets: [
          {
            label: "All",
            data: this.chart_info.cc5.data,
            fill: true,
            backgroundColor: "rgba(255, 0, 255, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 0, 255)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 0, 255)",
          },
        ],
      };
      const config_s5 = {
        type: "radar",
        data: data_s5,
        options: {
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      };
      const chart_s5 = new Chart("bc_s5", config_s5);
      console.log(chart_s5);

      const data_s6 = {
        labels: this.chart_info.cc6.labels,
        datasets: [
          {
            label: "All",
            data: this.chart_info.cc6.data,
            fill: true,
            backgroundColor: "rgba(0, 156, 5, 0.2)",
            borderColor: "rgb(0, 156, 5)",
            pointBackgroundColor: "rgb(0, 156, 5)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(0, 156, 5)",
          },
        ],
      };
      const config_s6 = {
        type: "radar",
        data: data_s6,
        options: {
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      };
      const chart_s6 = new Chart("bc_s6", config_s6);
      console.log(chart_s6);
    },
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
    level() {
      this.$axios
        .get("json/my_level.json")
        .then((res) => (this.my_level = res.data))
        .catch(function (error) {
          console.log(error);
        });
    },
    back() {
      this.level_text = false;
      this.level_content_info = [];
      this.level_content_info_state = 1;
    },
    level_content(index) {
      let o = this.my_level[index].order;
      this.$axios
        .get("json/level_content_info" + o + ".json")
        .then((res) => {
          this.level_content_info = res.data;
          this.level_text = true;
        })
        .catch(function (error) {
          console.log(error);
          Vue.swal("<b>錯誤</b>", "目前無資料", "error");
        });
    },
    addData() {
      this.dataset.push(this.dataentry);
      this.labels.push(this.datalabel);
      this.datalabel = "";
      this.dataentry = "";
    },
    my_task() {
      this.$axios
        .get("json/task.json")
        .then((res) => (this.task = res.data))
        .catch(function (error) {
          console.log(error);
        });
    },
    my_weekly() {
      this.$axios
        .get("json/weekly.json")
        .then((res) => (this.weekly = res.data))
        .catch(function (error) {
          console.log(error);
        });
    },
    no() {
      Vue.swal("<b>錯誤</b>", "目前尚未開放", "error");
    },
    is_to_day() {
      let fullDate = new Date();
      let yyyy = fullDate.getFullYear();
      let MM =
        fullDate.getMonth() + 1 >= 10
          ? fullDate.getMonth() + 1
          : "0" + (fullDate.getMonth() + 1);
      let dd =
        fullDate.getDate() < 10 ? "0" + fullDate.getDate() : fullDate.getDate();
      let today = yyyy + "" + MM + "" + dd;
      this.to_day = today;
    },
    tw(index) {
      this.timetable_week = this.timetable.week[index].item;
    },
    tc(index) {
      this.timetable_classes = this.timetable.classes[index].item;
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
#records {
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
          max-width: 55px;
          max-height: 55px;
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
        margin-top: 0px;
        border-spacing: 0px 5px;
        border-collapse: unset;
        width: 100%;
        text-align: center;
        thead {
          tr {
            border-radius: 5px;
            width: 100%;
            font-size: 26px;
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
            font-size: 26px;
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
                top: 3px;
                margin-left: 2.5px;
                margin-right: 2.5px;
              }
              .feedback {
                width: 30px;
                position: relative;
                top: 3px;
              }
              .certificate {
                height: 25px;
                position: relative;
                top: 3px;
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
              &.rt {
                color: #d7574e;
              }
              button {
                background-color: #d7574e;
                border: none;
                color: #fff;
                font-size: 18px;
                line-height: 30px;
                padding-left: 15px;
                padding-right: 15px;
                border-radius: 5px;
                position: relative;
                top: -5px;
                &.active {
                  background-color: #107b9e;
                }
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

      #back {
        display: block;
        margin: 15px auto 0 auto;
        background-color: #17a6af;
        border: 3px solid #17a6af;
        width: 120px;
        line-height: 40px;
        font-size: 24px;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: #fff;
          color: #17a6af;
        }
      }

      #task {
        display: flex;
        justify-content: space-between;
        #time_checklist,
        #weekly {
          width: calc(50% - 7.5px);
          overflow-y: auto;
          max-height: 574px;
          .task_head,
          .weekly_head {
            width: 100%;
            display: flex;
            background-color: #107b9e;
            color: #fff;
            line-height: 60px;
            font-size: 26px;
            justify-content: space-between;
            border-radius: 15px;
            .item {
              width: calc((100% - 80px) / 3 - 2.5px);
              text-align: center;
              &:nth-child(1) {
                width: 80px;
              }
            }
          }
          .weekly_head {
            background-color: #d7574e;
            .item {
              width: 50%;
              &:nth-child(1) {
                width: 50%;
                text-align: left;
                padding-left: 30px;
              }
              &:nth-child(2) {
                width: 50%;
                text-align: right;
                padding-right: 30px;
              }
            }
          }
          .task_body,
          .weekly_body {
            color: #107b9e;
            background-color: transparent;
            margin-top: 2.5px;
            .row {
              display: flex;
              justify-content: space-between;
              border-radius: 15px;
              overflow: hidden;
              .item {
                width: calc((100% - 80px) / 3 - 2.5px);
                background-color: #d8ebf5;
                margin: 2.5px;
                line-height: 45px;
                font-size: 26px;
                text-align: center;
                &:nth-child(1) {
                  width: 89.659px;
                }

                img {
                  padding: 0;
                  width: 30px;
                  position: relative;
                  top: 7px;
                }
              }
            }
          }
          .weekly_body {
            .row {
              background-color: #f0cd96;
              border-radius: 99px;
              padding: 10px;
              box-sizing: border-box;
              margin-top: 5px;
              margin-bottom: 5px;
              .item {
                background-color: transparent;
                // width: 50%;
                color: #a33f39;
                line-height: 88px;
                width: 88px;
                margin: 0;
                &:nth-child(2) {
                  width: calc(100% - 160px);
                  text-align: left;
                  padding-left: 15px;
                  padding-right: 15px;
                  box-sizing: border-box;
                  h3 {
                    line-height: 1.4;
                    font-size: 26px;
                  }
                  p {
                    font-size: 14px;
                    line-height: 1.2;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  }
                  .schedule {
                    display: flex;
                    margin-top: 5px;
                    .photo {
                      width: calc(100% - 50px);
                      line-height: 15px;
                      height: 15px;
                      background-color: #fff9b1;
                      border-radius: 99px;
                      overflow: hidden;
                      position: relative;
                      .strip {
                        background-color: #643410;
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 100%;
                      }
                    }
                    .text {
                      font-size: 14.5px;
                      width: 50px;
                      text-align: right;
                      line-height: 1;
                      font-family: Anton, serif;
                    }
                  }
                }
                .medal {
                  background-color: #fffabe;
                  border-radius: 99px;
                  position: relative;
                  img {
                    width: 50px;
                    max-height: 50px;
                    top: 12.5px;
                  }
                }
                .award {
                  line-height: 1;
                  img {
                    width: 50px;
                  }
                  span {
                    display: block;
                    margin-top: 10px;
                    font-family: Anton, serif;
                  }
                }
              }
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
        &.tasks {
          #time_checklist,
          #weekly {
            .task_head,
            .weekly_head {
              background-color: rgb(23, 166, 175);
            }
            .task_body,
            .weekly_body {
              // background-color: #d7fdff;
              .row {
                background-color: #d7fdff;
              }
            }
          }
        }
        &.calendar {
          #time_checklist,
          #weekly {
            width: calc(50% - 7.5px);
            overflow-y: auto;
            max-height: 574px;
            .task_head,
            .weekly_head {
              background-color: #7d308e;
            }
            .task_body,
            .weekly_body {
              // background-color: #d7fdff;
              .row {
                background-color: #d2c3e0;
                .item {
                  color: #7e318f;
                  .medal {
                    background-color: #e8e6f3;
                  }
                  &.item:nth-child(2) {
                    .schedule {
                      .photo {
                        background-color: #e8e6f3;
                        .strip {
                          background-color: #7d308e;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      #big_chart,
      #small_chart {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
        box-sizing: border-box;
        border: 5px solid #107b9e;
        border-radius: 15px;
        .big_chart_content,
        .small_chart_content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 574px;
          height: 574px;
        }
        .small_chart_content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          width: 100%;
          .item {
            height: 250px;
            width: 250px;
            position: relative;
            .item_content {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
              height: 100%;
              padding-top: 20px;
            }
          }
        }
      }

      #timetable {
        table {
          thead {
            tr {
              td {
                background-color: #b66444;
                &:nth-child(1) {
                  text-align: left;
                  width: 65%;
                  padding-left: 30px;
                }
              }
            }
          }
          tbody {
            tr {
              color: #b66444;
              &:nth-child(odd) {
                td {
                  background-color: #f0cd96;
                }
              }
              &:nth-child(even) {
                td {
                  background-color: #eb9e71;
                }
              }
              &:hover {
                td {
                  background-color: #b66444 !important;
                  color: #fff !important;
                }
              }
              td {
                img {
                  width: 35px;
                  max-height: 35px;
                  position: relative;
                  top: 5px;
                }
                &:nth-child(1) {
                  text-align: left;
                  width: 65%;
                  padding-left: 30px;
                }
              }
            }
          }
        }
        .add_schedule {
          min-height: 574px;
          background-color: #f0cd96;
          border-radius: 15px;
          padding: 30px;
          h3 {
            font-size: 64px;
            color: #b66444;
          }
          h4 {
            margin-top: 15px;
            font-size: 32px;
            color: #b66444;
          }
          .choice {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            padding-bottom: 30px;
            button {
              width: 13%;
              margin-top: 0;
            }
          }
          button {
            margin-top: 15px;
            background-color: #b66444;
            border: 3px solid transparent;
            color: #fff;
            line-height: 45px;
            width: 100%;
            font-size: 20px;
            border-radius: 10px;
            cursor: pointer;
            &.active,
            &:hover {
              background-color: #7a2917;
            }
          }
        }
      }
    }
  }
}
</style>
