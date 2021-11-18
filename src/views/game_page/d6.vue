<template>
  <div id="d6">
    <!-- <div class="info">
      <div>
        <span class="label">Time:</span><span class="value">{{ time }} </span>
      </div>
      <div>
        <span class="label">Turns:</span><span class="value">{{ turns }} </span>
      </div>
    </div> -->
    <div class="cards" style="margin-top: 60px;">
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
    <div class="splash" v-if="0">
      <!-- v-if="showSplash" -->
      <div class="overlay" />
      <div class="content">
        <div class="title">You won!</div>
        <div class="score">Spend time: {{ time }}</div>
        <button class="newGame" @click="resetGame()">New game</button>
      </div>
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>
import moment from "moment";
import _ from "lodash";

let CardTypes = [
  { name: "dog", image: "../images/dog.png" },
  { name: "dog", image: "../images/dog_w.png" },
  { name: "ant", image: "../images/ant.png" },
  { name: "ant", image: "../images/ant_w.png" },
  { name: "bed", image: "../images/bed.png" },
  { name: "bed", image: "../images/bed_w.png" },
];

let shuffleCards = () => {
  let cards = [].concat(_.cloneDeep(CardTypes));
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
    time: "00:00",
    score: 0,
    mask: true,
    // gs: true,
  }),
  methods: {
    resetGame() {
      this.time = "00:00",
      this.showSplash = false;
      let cards = shuffleCards();
      this.turns = 0;
      this.score = 0;
      this.started = false;
      this.startTime = 0;

      _.each(cards, (card) => {
        card.flipped = true;
        setTimeout(() => {
          card.flipped = false;
        }, 1000);
        card.found = false;
      });

      this.cards = cards;

      // this.gs = false;
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
      this.$store.helper = true;
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
              console.log("完成")
              this.$store.commit('SET_H5_GAME_STATUS', true);
              this.$store.state.h5_game = true
              console.log(this.$store.state.h5_game)
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
// @import "compass";

@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900|Dosis:300,400,600,700,800|Droid+Sans:400,700|Lato:300,400,700,900|PT+Sans:400,700|Ubuntu:300,400,500,700|Open+Sans:400,300,600,700|Roboto:400,300,500,700,900|Roboto+Condensed:400,300,700|Open+Sans+Condensed:300,700|Work+Sans:400,300,700|Play:400,700|Maven+Pro:400,500,700,900&subset=latin,latin-ext);

$backgroundColor: #292c33;
$textColor: White;
$masterColor: #389bfe;

* {
  box-sizing: border-box;
}

html {
  background-color: $backgroundColor;
  color: $textColor;
  font-size: 16px;
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@mixin clearfix() {
  &:before,
  &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  }
}

#d6 {
  margin: 2em;
}

.info {
  text-align: center;
  border-bottom: 1px solid #555;
  font-size: 36px;
  padding-bottom: 30px;

  > div {
    display: inline-block;
    width: 200px;

    .label {
      margin-right: 5px;
    }

    .value {
      font-weight: bold;
    }
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .card {
    cursor: pointer;
    margin-top: 2em;
    position: relative;
    display: inline-block;
    width: 265px;
    height: 265px;
    transition: opacity 0.5s;

    .front,
    .back {
      box-shadow: 0px 0px 10px #969696;
      border-radius: 5px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: White;

      backface-visibility: hidden;
      transform: translateZ(0);
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .back {
      background-image: url("/images/back.png");
      background-size: 90%;
      background-position: center;
      background-repeat: no-repeat;
      font-size: 12px;
    }

    .front {
      transform: rotateY(-180deg);
      background-size: 90%;
      background-repeat: no-repeat;
      background-position: center;
    }

    &.start,
    &.flipped,
    &.found {
      .back {
        transform: rotateY(180deg);
      }

      .front {
        transform: rotateY(0deg);
      }
    }

    &.found {
      opacity: 0;
    }
  }
}

.splash {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(#000, 0.6);
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 400px !important;
    height: 200px !important;
    margin: auto;
    text-align: center;
    background-color: rgba(#333, 0.9);
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(Black, 0.8);
    padding: 1em;

    .title {
      font-size: 1.8em;
      padding: 0.5em;
      color: #fff;
    }

    .score {
      padding: 0.5em;
      color: #fff;
    }

    button {
      margin-top: 1em;
      background-color: #444;
      padding: 5px 20px;
      border-radius: 4px;
      border: 1px solid #555;
      color: White;
      font-size: 1.4em;
    }
  }
}
</style>