<template>
  <div id="level">
    <div class="wrapper">
      <div class="identity">
        <div class="item student" :class="{'active': identity == 1}" @click="student">
          Student
        </div>
        <div class="item parent" :class="{'active': identity == 2}" @click="parent">
          Parent
        </div>
      </div>
      <h2 v-if="identity !== 2 && identity !== 0">Level</h2>
      <ul v-if="identity !== 2 && identity !== 0">
        <li :class="{'active': level == 1}" @click="this.level_1">1</li>
        <li :class="{'active': level == 2}" @click="this.level_2">2</li>
        <li :class="{'active': level == 3}" @click="this.level_3">3</li>
        <li :class="{'active': level == 4}" @click="this.level_4">4</li>
        <li :class="{'active': level == 5}" @click="this.level_5">5</li>
        <li :class="{'active': level == 6}" @click="this.level_6">6</li>
        <li :class="{'active': level == 7}" @click="this.level_7">7</li>
      </ul>
      <button v-if="identity == 1 && level !==0 || identity == 2 && level ==0" class="button">START !</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        identity: 0,
        level: 0
      };
    },
    methods: {
      student() {
        this.identity = 1
      },
      parent() {
        this.identity = 2
        this.level = 0
      },
      level_1() {
        this.level = 1
      },
      level_2() {
        this.level = 2
      },
      level_3() {
        this.level = 3
      },
      level_4() {
        this.level = 4
      },
      level_5() {
        this.level = 5
      },
      level_6() {
        this.level = 6
      },
      level_7() {
        this.level = 7
      },
    }
  };
</script>
<style scoped lang="scss">
#level {
    position: relative;
    width: 100%;
    height: 100vh;

    .wrapper {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .identity {

            width: 600px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;

            .item {
                text-align: center;
                display: block;
                width: calc(50% - 7.5px);
                height: 292.5px;
                line-height: 292.5px;
                color: #fff;
                text-decoration: none;
                font-size: 64px;
                transition: 0.6s;
                cursor: pointer;

                &.student {
                    background-color: #00AEB8;
                }

                &.parent {

                    background-color: #F2A273;
                }
                &:hover,&.active{
                    filter: brightness(50%);
                    transform: scale(1.05);
                }
            }

        }

        h2 {
            text-align: center;
            font-size: 54px;
            padding-top: 30px;
            padding-bottom: 30px;
        }

        ul {
            width: 100%;
            display: flex;

            li {
                text-align: center;
                width: calc(100% / 7);
                border: 2px solid #3A4864;
                border-right: none;
                height: 45px;
                line-height: 45px;
                color: #fff;
                font-weight: bolder;
                font-size: 24px;
                cursor: pointer;
                transition: 0.6s;

                &:nth-child(1) {
                    border-top-left-radius: 90px;
                    border-bottom-left-radius: 90px;
                    background-color: #0080A6;
                }

                &:nth-child(2){background-color: #00AEB8;}
                &:nth-child(3){background-color: #F5D096;}
                &:nth-child(4){background-color: #F2A273;}
                &:nth-child(5){background-color: #E15950;}
                &:nth-child(6){background-color: #BA547C;}

                &:nth-child(7) {
                    border-right: 2px solid #3A4864;
                    border-top-right-radius: 90px;
                    border-bottom-right-radius: 90px;
                    background-color: #0080A6;
                }

                &.active,&:hover{
                    filter: brightness(50%);
                    transform: scale(1.05);
                }
            }
        }

        .button{
            width: 100%;
            margin-top: 30px;
            height: 60px;
            background-color: #0080A6;
            border: none;
            color: #fff;
            font-weight: bolder;
            font-size: 24px;
            cursor: pointer;
            transition: 0.6s;
            &:hover{
                filter: brightness(50%);
                transform: scale(1.05);
            }
        }
    }
}
</style>