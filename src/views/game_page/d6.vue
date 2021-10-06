<template>
  <div id="d6">
    <div class="info">
      <div>
        <span class="label">Time:</span><span class="value">{{ time }} </span>
      </div>
      <div>
        <span class="label">Turns:</span><span class="value">{{ turns }} </span>
      </div>
    </div>
    <div class="cards">
      <div
        class="card"
        :key="index"
        v-for="(card, index) in cards"
        :class="{ flipped: card.flipped, found: card.found }"
        @click="flipCard(card)"
      >
        <div class="back" />
        <div
          class="front"
          :style="{ backgroundImage: 'url(' + card.image + ')' }"
        />
      </div>
    </div>
    <div class="splash" v-if="showSplash">
      <div class="overlay" />
      <div class="content">
        <div class="title">You won!</div>
        <div class="score">Score: {{ score }}</div>
        <button class="newGame" @click="resetGame()">New game</button>
      </div>
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.12.0/lodash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js"></script>
<script>
let CardTypes = [
  { name: "dog", image: "./img/dog.png" },
  { name: "ant", image: "./img/ant.png" },
  { name: "bed", image: "./img/bed.png" },
  { name: "cat", image: "./img/cat.png" },
];

let shuffleCards = () => {
  let cards = [].concat(_.cloneDeep(CardTypes), _.cloneDeep(CardTypes));
  return _.shuffle(cards);
};

export default {
  data: () => ({
    showSplash: false,
    cards: [],
    started: false,
    startTime: 0,
    turns: 0,
    flipBackTimer: null,
    timer: null,
    time: "--:--",
    score: 0,
  }),
  methods: {
    resetGame() {
      this.showSplash = false;
      let cards = shuffleCards();
      this.turns = 0;
      this.score = 0;
      this.started = false;
      this.startTime = 0;

      _.each(cards, (card) => {
        card.flipped = false;
        card.found = false;
      });

      this.cards = cards;
    },

    flippedCards() {
      return _.filter(this.cards, (card) => card.flipped);
    },

    sameFlippedCard() {
      let flippedCards = this.flippedCards();
      if (flippedCards.length == 2) {
        if (flippedCards[0].name == flippedCards[1].name) return true;
      }
    },

    setCardFounds() {
      _.each(this.cards, (card) => {
        if (card.flipped) card.found = true;
      });
    },

    checkAllFound() {
      let foundCards = _.filter(this.cards, (card) => card.found);
      if (foundCards.length == this.cards.length) return true;
    },

    startGame() {
      this.started = true;
      this.startTime = moment();

      this.timer = setInterval(() => {
        this.time = moment(moment().diff(this.startTime)).format("mm:ss");
      }, 1000);
    },

    finishGame() {
      this.started = false;
      clearInterval(this.timer);
      let score =
        1000 -
        (moment().diff(this.startTime, "seconds") - CardTypes.length * 5) * 3 -
        (this.turns - CardTypes.length) * 5;
      this.score = Math.max(score, 0);
      this.showSplash = true;
    },

    flipCard(card) {
      if (card.found || card.flipped) return;

      if (!this.started) {
        this.startGame();
      }

      let flipCount = this.flippedCards().length;
      if (flipCount == 0) {
        card.flipped = !card.flipped;
      } else if (flipCount == 1) {
        card.flipped = !card.flipped;
        this.turns += 1;

        if (this.sameFlippedCard()) {
          // Match!
          this.flipBackTimer = setTimeout(() => {
            this.clearFlipBackTimer();
            this.setCardFounds();
            this.clearFlips();

            if (this.checkAllFound()) {
              this.finishGame();
            }
          }, 200);
        } else {
          // Wrong match
          this.flipBackTimer = setTimeout(() => {
            this.clearFlipBackTimer();
            this.clearFlips();
          }, 1000);
        }
      }
    },

    clearFlips() {
      _.map(this.cards, (card) => (card.flipped = false));
    },

    clearFlipBackTimer() {
      clearTimeout(this.flipBackTimer);
      this.flipBackTimer = null;
    },
  },
  created() {
    this.resetGame();
  },
};
</script>

<style scoped lang="scss">
// @import url(https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css);

#d6 {
  margin-left: auto;
  margin-right: auto;

  &.container {
    position: relative;
  }

  .color_block {
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999;

    &.active {
      display: none;
    }

    button {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
      border: 1px solid;
      border-radius: 0;
      width: 180px;
      height: 60px;
      font-size: 24px;

      &:hover {
        background-color: #fff;
        color: #28a745;
      }
    }
  }

  .row {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .item {
    width: 115px;
    height: 150px;
    margin: 7.5px;
    position: relative;
    background-color: #fff;
    border: 5px solid #fff;
    color: #000;
    font-size: 40px;
    border-radius: 10px;
    transition: 0.3s;
    transform: rotateY(-180deg);
    box-shadow: 0px 0px 15px #ccc;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgb(108, 192, 150);
      background-image: url("https://png.pngtree.com/png-clipart/20190904/original/pngtree-plaid-tile-png-image_4471399.jpg");
      background-size: cover;
      left: 0;
      right: 0;
    }

    &.pass,
    &.active,
    &.flop {
      transform: rotateY(0);
      cursor: auto;
    }

    &.pass::after,
    &.active::after,
    &.flop::after {
      display: none;
    }

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .bg-primary {
    cursor: pointer;
  }

  .bg-danger {
    cursor: auto;
  }

  button {
    margin-top: 50px;
  }

  #pass {
    position: absolute;
    z-index: 998;
    width: 80%;
    height: 30%;
    border: 15px solid #f5c000;
    transform: scale(2);
    opacity: 0;
    transition: 0.6s;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;

    /* box-shadow: 0px 0px 12px 0px #000; */

    &.active {
      pointer-events: auto;
      transform: scale(1) rotate(5deg);
      opacity: 1;
    }

    p {
      font-size: 80px;
      font-weight: bolder;
      color: #f5c000;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
  }

  #failure {
    position: absolute;
    z-index: 998;
    width: 80%;
    height: 30%;
    border: 15px solid red;
    transform: scale(2);
    opacity: 0;
    transition: 0.6s;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;

    /* box-shadow: 0px 0px 12px 0px #000; */

    &.active {
      pointer-events: auto;
      transform: rotate(25deg) scale(1);
      opacity: 1;
    }

    p {
      font-size: 80px;
      font-weight: bolder;
      color: red;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
  }
  .text-center {
    text-align: center;
  }
}
</style>