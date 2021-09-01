<template>
  <div>
    <div class="cursor" :style="cursor"></div>
    <!-- navbar 功能列表 -->
    <nav class="navbar">
      <ul class="navbar-nav" :class="{ 'toggle-hide': isToggle }">
        <li class="nav-item" @click="saveCanvas">
          <i class="material-icons"> save </i>
          <a class="nav-link" :href="url" download="canvas.png">SAVE</a>
        </li>
        <li class="nav-item" @click="initCanvas">
          <i class="material-icons"> fullscreen </i>
          <a class="nav-link" href="#">CLEAR ALL</a>
        </li>
        <li class="nav-item" @click="undo">
          <i class="material-icons"> undo </i>
          <a class="nav-link" href="#">UNDO</a>
        </li>
        <li class="nav-item" @click="redo">
          <i class="material-icons"> redo </i>
          <a class="nav-link" href="#">REDO</a>
        </li>
      </ul>
    </nav>

    <!-- navbar:點選收合 -->
    <div class="navbar-toggle" @click="isToggle = !isToggle">
      <i
        class="material-icons arrow-down"
        :class="{ 'toggle-rotate': isToggle }"
      >
        arrow_forward_ios
      </i>
    </div>

    <!-- canvas -->
    <canvas ref="canvas" id="myCanvas"></canvas>

    <!-- 筆刷 icon:點選開合 -->
    <div class="brush" @click="isToggle = !isToggle">
      <i class="material-icons"> brush </i>
    </div>

    <!-- tools 工具列表 -->
    <div class="tools" :class="{ 'tools-hide': isToggle }">
      <template v-for="tool in tools">
        <div class="tools-item" @click="selectTool(tool)">
          <i :class="[tool.class, { active: tool.name === currentTool }]">
            <span v-if="tool.name === 'brush'">{{ tool.name }}</span>
          </i>
        </div>
      </template>
      <div class="tools-item">
        SIZE:
        <input
          class="item-number"
          type="number"
          min="10"
          max="100"
          step="10"
          v-model.number="lineWidth"
        />px
      </div>
      <div class="tools-item">
        <ul class="colors">
          COLOR:
          <li
            v-for="color in colors"
            :class="{ 'color-item': true, active: color === currentColor }"
            :key="color"
            :style="{ backgroundColor: color }"
            @click="colorPicker(color)"
          >
            <i class="material-icons">check</i>
          </li>
          <li class="color-item active">
            <i
              class="material-icons"
              :class="{ active: currentColor !== 'rgb(67, 69, 91)' }"
            >
              colorize
            </i>
            <div class="color-picker"></div>
          </li>
        </ul>
      </div>

      <div class="tools-toggle" @click="isToggle = !isToggle">
        <i class="material-icons arrow-down"> arrow_forward_ios </i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: ['#FFFFFF', '#000000', '#9BFFCD', '#00CC99', '#01936F'],
      tools: [{
        name: 'brush',
        class: 'material-icons brush-icon'
      }, {
        name: 'eraser',
        class: 'fas fa-eraser'
      }],
      currentColor: 'rgb(67, 69, 91)',
      currentTool: 'brush',
      random: '#42445A',
      lineWidth: 10,
      lastX: 0,
      lastY: 0,
      isDrawing: false,
      isToggle: false,
      isBrush: true,
      canvas: null,
      ctx: null,
      cursor: '',
      canvasArray: [],
      step: -1,
      url: '',
      initURL: '',
      pickr: null,
    };
  },
  mounted() {
    let vm = this;
    const pickr = Pickr.create({
      el: ".color-picker",
      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: false,
          save: true,
        },
      },
    });
    vm.pickr = pickr;

    vm.canvas = vm.$refs.canvas;
    vm.canvas.addEventListener("mousemove", vm.mouseMove);
    vm.canvas.addEventListener("mousemove", vm.cursorMove);
    vm.canvas.addEventListener("mousedown", vm.mouseDown);
    vm.canvas.addEventListener("mouseup", vm.mouseUp);
    vm.canvas.addEventListener("mouseleave", vm.mouseLeave);
    window.addEventListener("resize", vm.resizeCanvas);
    window.addEventListener("onload", vm.initCanvas);
    vm.initCanvas();
  },
  methods: {
    initCanvas() {
      let vm = this;
      vm.step = -1;
      vm.ctx = vm.canvas.getContext("2d");
      vm.initURL = vm.canvas.toDataURL();
      vm.canvas.width = window.innerWidth;
      vm.canvas.height = window.innerHeight;
      vm.ctx.lineJoin = "round";
      vm.ctx.lineCap = "round";
      vm.ctx.strokeStyle = vm.currentColor;
      vm.ctx.lineWidth = vm.lineWidth;
      vm.ctx.fillStyle = "#E8E8E8";
      vm.ctx.fillRect(0, 0, vm.canvas.width, vm.canvas.height);
      vm.pushCanvas();
    },
    resizeCanvas() {
      let vm = this;
      vm.canvas.width = window.innerWidth;
      vm.canvas.height = window.innerHeight;
      let image = new Image();
      image.src = vm.canvasArray[vm.step];
      image.onload = function () {
        vm.ctx.drawImage(image, 0, 0, vm.canvas.width, vm.canvas.height);
        vm.pushCanvas();
      };
    },
    pushCanvas() {
      let vm = this;
      vm.step++;
      if (vm.step < vm.canvasArray.length) {
        vm.canvasArray.length = vm.step;
      }
      vm.canvasArray.push(vm.canvas.toDataURL());
    },
    colorPicker(color) {
      let vm = this;
      vm.currentColor = color;
      vm.isBrush = true;
      vm.setCurrentTool();
    },
    setCurrentTool() {
      // 選取顏色後工具自動切回筆刷
      let vm = this;
      if (vm.isBrush === true) {
        vm.currentTool = "brush";
      }
    },
    selectTool(tool) {
      let vm = this;
      vm.currentTool = tool.name;
    },
    draw(e) {
      let vm = this;

      vm.ctx.beginPath();
      vm.ctx.moveTo(vm.lastX, vm.lastY);
      vm.ctx.lineTo(e.offsetX, e.offsetY);

      if (vm.currentTool === "brush") {
        vm.isBrush = true;
        vm.ctx.strokeStyle = vm.currentColor;
      } else {
        vm.isBrush = false;
        vm.ctx.strokeStyle = "#e8e8e8";
      }
      vm.ctx.lineWidth = vm.lineWidth;
      vm.ctx.lineJoin = "round";
      vm.ctx.lineCap = "round";
      vm.ctx.stroke();

      vm.lastX = e.offsetX;
      vm.lastY = e.offsetY;
    },
    mouseMove(e) {
      let vm = this;
      if (!vm.isDrawing) return;
      vm.draw(e);
    },
    mouseDown(e) {
      let vm = this;
      vm.isDrawing = true;
      vm.lastX = e.offsetX;
      vm.lastY = e.offsetY;
    },
    undo() {
      let vm = this;
      if (vm.step > 0) {
        vm.step--;
        let canvasPic = new Image();
        canvasPic.src = vm.canvasArray[vm.step];
        canvasPic.onload = () => {
          vm.ctx.drawImage(canvasPic, 0, 0);
        };
      }
      console.log(
        "undo step",
        vm.step + ":" + " length",
        vm.canvasArray.length
      );
    },
    redo() {
      let vm = this;
      if (vm.step < vm.canvasArray.length - 1) {
        vm.step++;
        let canvasPic = new Image();
        canvasPic.src = vm.canvasArray[vm.step];
        canvasPic.onload = function () {
          vm.ctx.drawImage(canvasPic, 0, 0);
        };
        console.log(
          "redo step",
          vm.step + ":" + " length",
          vm.canvasArray.length
        );
      }
    },
    mouseUp(e) {
      let vm = this;
      vm.isDrawing = false;
      vm.pushCanvas();
      console.log(
        "mouseDown step",
        vm.step + ":" + " length",
        vm.canvasArray.length
      );
    },
    mouseLeave() {
      let vm = this;
      vm.isDrawing = false;
    },
    cursorMove(e) {
      let vm = this;
      let style;
      if (vm.currentTool === "brush") {
        style = `width:${vm.lineWidth}px;height:${vm.lineWidth}px; background-color:${vm.currentColor};`;
      } else {
        style = `width:${vm.lineWidth}px;height:${vm.lineWidth}px;border:1px solid #bababa;`;
      }
      if (vm.isToggle === false) {
        vm.cursor = `top:${e.offsetY - vm.lineWidth / 2 + 80}px;left:${
          e.offsetX - vm.lineWidth / 2
        }px;${style}`;
      } else {
        vm.cursor = `top:${e.offsetY - vm.lineWidth / 2}px;left:${
          e.offsetX - vm.lineWidth / 2
        }px;${style}`;
      }
    },
    saveCanvas() {
      let vm = this;
      let data = vm.canvasArray[vm.step];
      vm.url = data;
    },
  },
  watch: {
    pickr() {
      let vm = this;
      vm.pickr.on("change", (...args) => {
        let color = args[0].toRGBA();
        vm.currentColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
        console.log(vm.currentColor);
      });
      vm.isBrush = true;
      vm.setCurrentTool();
    },
  },
};
</script>

<style scoped lang="scss">
html,
body,
div,
span,
i,
ul,
li,
canvas,
nav {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

body {
  background-color: #e8e8e8;
  font-family: "Open Sans", sans-serif;
  height: 100vh;
  overflow-y: hidden;
}

.cursor {
  position: absolute;
  border-radius: 50%;
  cursor: crosshair;
  pointer-events: none;
}

#myCanvas {
  margin-top: -28px;
  cursor: crosshair;
}

.navbar {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: white;
}

.navbar-nav {
  width: 840px;
  text-align: center;
  font-family: helvetica;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  transition: all 0.3s;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    .material-icons,
    .nav-link {
      color: #00cc99;
    }
  }

  &:active .material-icons {
    transform: scale(1.1);
  }
}

.nav-link,
.nav-zoom {
  text-decoration: none;
  color: black;
  font-size: 20px;
}

.nav-zoom {
  width: 60px;
  margin-left: -30px;
  margin-right: -30px;
}

.nav-item,
.nav-item:nth-child(1),
.nav-item:nth-child(3),
.nav-item:nth-child(4) {
  > .material-icons {
    font-size: 48px;
    padding-right: 7px;
  }
}

.nav-item:nth-child(2) {
  > .material-icons {
    font-size: 60px;
  }
}

.nav-item:nth-child(5) {
  .material-icons {
    font-size: 48px;
    padding-right: 0px;
  }
}

.navbar-toggle {
  display: block;
  width: 56px;
  height: 56px;
  background-color: white;
  margin: 0 auto;
  margin-top: -28px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  z-index: 9999;
}

.arrow-down {
  display: block;
  font-size: 0.8rem;
  z-index: 9999;
  position: absolute;
  top: 34px;
  left: 22px;
  transform: rotate(-90deg);
  transition: all 0.3s ease-in;
  user-select: none;
  cursor: pointer;
}

.toggle-hide {
  margin-top: -80px;
}

.toggle-rotate {
  transform: rotate(90deg);
}

.tools {
  max-width: 820px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: fixed;
  bottom: 40px;
  border-radius: 40px;
  left: calc((100% - 820px) / 2);
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  user-select: none;

  > .tools-item .brush-icon,
  .tools-item .fa-eraser {
    cursor: pointer;
    font-size: 44px;
    padding-left: 40px;

    &.active {
      color: #00cc99;
    }

    &:active {
      transform: scale(1.1);
    }
  }

  > .tools-item .fa-eraser {
    padding-left: 20px;
    padding-right: 30px;
  }

  .item-number {
    width: 74px;
    height: 48px;
    background-color: #e8e8e8;
    border: none;
    border-radius: 40px;
    margin: 0 8px 0 8px;
    font-size: 20px;
    color: black;
    font-weight: bold;
    text-align: center;
    padding: 0 0 0 16px;
    overflow: hidden;
    box-sizing: border-box;
  }

  input[type="text"]:focus,
  input:focus {
    outline: none;
  }

  .tools-toggle {
    display: block;
    width: 56px;
    height: 56px;
    background-color: white;
    margin: 0 auto;
    margin-top: -80px;
    left: calc((820px - 56px) / 2);
    border-radius: 56px;
    position: absolute;
    cursor: pointer;
  }

  .arrow-down {
    display: block;
    font-size: 0.8rem;
    z-index: 9999;
    position: absolute;
    top: 8px;
    left: 22px;
    transform: rotate(90deg);
    transition: all 0.3s ease-in;
  }
}

.tools-hide {
  bottom: -120px;
}

.brush {
  width: 56px;
  height: 56px;
  border-radius: 56px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  background-color: white;
  position: fixed;
  bottom: 40px;
  left: calc((100% - 56px) / 2);
  line-height: 66px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.1);
  }
}

.colors {
  display: flex;
  align-items: center;
  padding-left: 30px;
  user-select: none;
  list-style: none;

  .material-icons {
    color: transparent;
    font-size: 1.5rem;
    line-height: 48px;
    padding-left: 12px;
    text-align: center;
  }

  .color-item {
    width: 48px;
    height: 48px;
    color: white;
    border-radius: 50%;
    margin-right: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;

    &.active {
      .material-icons {
        color: black;
      }
    }

    &:active {
      transform: scale(1.1);
    }
  }

  .color-item:nth-child(1) {
    width: 46px;
    height: 46px;
    border: 2px solid #000000;
    margin-left: 16px;
  }

  .color-item:nth-child(2) {
    &.active {
      .material-icons {
        color: white;
      }
    }
  }

  .color-item:nth-child(6) {
    width: 48px;
    height: 48px;
    z-index: 9999999999;
    display: block;
    position: relative;
    overflow: hidden;

    &.active {
      .material-icons {
        color: rgb(120, 120, 120);
        z-index: 9999;
        position: absolute;
        pointer-events: none;

        &.active {
          color: black;
        }
      }
    }
  }

  input[type="color"] {
    width: 60px;
    height: 60px;
    position: absolute;
    top: -20%;
    left: -20%;
    border: transparent;
    cursor: pointer;
    border-radius: 50%;
    border: 3px solid #ffffff;
  }

  .pickr .pcr-button:after,
  .pickr .pcr-button:before {
    position: absolute;
    content: "";
    top: -3px;
    left: 0px;
    width: 100px;
    height: 100px;
  }

  .pickr .pcr-button.clear {
    background-size: 0%;
  }

  .pickr .pcr-button {
    position: relative;
    height: 100px;
    width: 100px;
  }
}
</style>