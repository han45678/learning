<template>
  <div id="draw">
  <div id="tools">
    <h2>工具栏</h2>
    <div id="header">
      <input id="color" type="color" class="colors" value="#000000">画笔颜色</input>
      <input id="bgc" type="color" class="colors" value="#ffffff">画板颜色</input>
      <input id="lineWidthSmall" class="ranges" type="range" value="0.01" min="0.002" max="0.02" step="0.001">画笔微调~<span id="text1"></span></input>
      <input id="lineWidthBig" class="ranges" type="range" value="2" min="0" max="10" step="0.01">画笔粗调~<span id="text2"></span></input>
      <input id="shadowBlur" class="ranges" type="range" value="1" min="0" max="10" step="0.01">画笔虚化~<span id="text3"></span></input>
    </div>
    <div id="footer">
      <button id="pen" class="btn selected">画笔</button>
      <button id="line" class="btn">直线</button>
      <button id="rect" class="btn">矩形</button>
      <button id="cir" class="btn">圆形</button>
      <button id="eraser" class="btn">橡皮</button>
      <button id="clear" class="btn">清空</button>
      <button id="back" class="btn">撤销</button>
      <button id="restore" class="btn">恢复</button>
    </div>
  </div>
  <canvas id="canvas" width="700" height="400"></canvas>
</div>

</template>
<script>
export default {
  data() {
    return {
      canvas: document.querySelector("#canvas"),
      ctx: document.querySelector("#canvas").getContext("2d"),
      isPressDown: false,
      curMode: "penMode",
      pressPos: null,
      curPos: null,
      startData: null,
      btnColor: document.querySelector("#color"),
      btnBgc: document.querySelector("#bgc"),
      lineWidthSmall: document.querySelector("#lineWidthSmall"),
      lineWidthSmallSpan: document.querySelector("#text1"),
      lineWidthBig: document.querySelector("#lineWidthBig"),
      lineWidthBigSpan: document.querySelector("#text2"),
      shadowBlur: document.querySelector("#shadowBlur"),
      shadowBlurSpan: document.querySelector("#text3"),
      btnPen: document.querySelector("#pen"),
      btnLine: document.querySelector("#line"),
      btnRect: document.querySelector("#rect"),
      btnCir: document.querySelector("#cir"),
      btnEraser: document.querySelector("#eraser"),
      btnClear: document.querySelector("#clear"),
      btnBack: document.querySelector("#back"),
      btnRestore: document.querySelector("#restore"),
    };
  },
  async created() {},
  methods: {
    getMousePos(clientX, clientY) {
      // 获取元素相对于视口位置信息
      const rect = canvas.getBoundingClientRect();
      // 返回鼠标相对于画布的坐标
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    },
    selected(ele) {
      // 获取全部模式按钮
      const buttons = document.querySelectorAll(".btn");
      // 排他
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = "btn";
      }
      // 给选中按钮高亮
      ele.className = "btn selected";
    },
    backOrRestore() {
      // 图像处理对象
      const imageOperate = {};
      // 记录每次操作后的画板图像数据集合
      imageOperate.imageDataArray = [];
      // 记录当前渲染图像数据
      imageOperate.curImageIndex = -1;
      // 图像保存
      imageOperate.save = function (data) {
        if (this.imageDataArray.length >= 20) this.imageDataArray.shift(); // 删除最久一次记录
        this.imageDataArray.push(data); // 记录
        this.curImageIndex = this.imageDataArray.length - 1;
      };
      // 图像撤销
      imageOperate.back = function () {
        this.curImageIndex--;
        if (this.curImageIndex <= 0) {
          this.curImageIndex = 0;
        }
        paint("drawMode", this.imageDataArray[this.curImageIndex]);
      };
      // 图像恢复
      imageOperate.restore = function () {
        this.curImageIndex++;
        if (this.curImageIndex >= this.imageDataArray.length) {
          this.curImageIndex = this.imageDataArray.length - 1;
        }
        paint("drawMode", this.imageDataArray[this.curImageIndex]);
      };
      // 清空记录
      imageOperate.clear = function () {
        this.imageDataArray.length = 0;
        this.curImageIndex = -1;
      };
      // 前后退执行函数
      return function (operate, imageData) {
        imageOperate[operate](imageData);
      };
    },
    paint() {
      const Mode = {};
      // 画笔模式
      Mode.penMode = function () {
        // 画线
        // ctx.moveTo(pressPos.x, pressPos.y)
        this.ctx.lineTo(this.curPos.x, this.curPos.y);
        this.ctx.stroke();
      };
      // 直线模式
      Mode.lineMode = function () {
        // 画线
        this.ctx.moveTo(this.pressPos.x, this.pressPos.y);
        this.ctx.lineTo(this.curPos.x, this.curPos.y);
        this.ctx.stroke();
      };
      // 矩形模式
      Mode.rectMode = function () {
        // 画矩形
        this.ctx.rect(
          this.pressPos.x,
          this.pressPos.y,
          this.curPos.x - this.pressPos.x,
          this.curPos.y - this.pressPos.y
        );
        this.ctx.stroke();
      };
      // 圆形模式
      Mode.cirMode = function () {
        const cx = (this.curPos.x + this.pressPos.x) / 2; // 圆心x
        const cy = (this.curPos.y + this.pressPos.y) / 2; // 圆心y
        const dx = Math.abs(this.curPos.x - this.pressPos.x); // x偏移
        const dy = Math.abs(this.curPos.y - this.pressPos.y); // y偏移
        const r = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) / 2; // 半径
        // 画圆形
        this.ctx.arc(cx, cy, r, 0, 2 * Math.PI);
        this.ctx.stroke();
      };
      // 橡皮模式
      Mode.eraserMode = function () {
        // 保存当前环境
        this.ctx.save();
        // 重置当前路径
        this.ctx.beginPath();
        // 画圆形
        this.ctx.arc(
          this.curPos.x,
          this.curPos.y,
          this.lineWidthSmall.value * 1 + this.lineWidthBig.value * 1,
          0,
          2 * Math.PI
        );
        // 裁剪擦除区
        this.ctx.clip();
        // 清除擦除区
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // 恢复之前环境
        this.ctx.restore();
      };
      // 绘制给定图像数据模式
      Mode.drawMode = function (
        data = new ImageData(this.canvas.width, this.canvas.height)
      ) {
        // 清除实时画板
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // 重绘按下时保存的画板图像
        this.ctx.putImageData(data, 0, 0);
        // 开始绘制路径
        this.ctx.beginPath();
      };
      // 返回绘制函数
      return function (mode = this.curMode, data = undefined) {
        Mode[mode](data);
      };
    },
    mouseDown() {},
    mouseMove() {
      // 绘制前操作
      switch (this.curMode) {
        // 绘制实时辅助线
        case "rectMode":
        case "cirMode":
        case "lineMode":
          this.paint("drawMode", this.startData); // 重绘之前保存图像
          break;
        // 无需绘制辅助线
        case "penMode":
        default:
          break;
      }
      // 绘制
      this.paint();
    },
    mouseUp() {
      switch (this.curMode) {
        // 画线、矩形、圆形需要鼠标抬起时绘制
        case "lineMode":
        case "rectMode":
        case "cirMode":
          this.paint();
          break;
        case "penMode":
        case "eraserMode":
        default:
          break;
      }
    },
    draw(state) {
      switch (state) {
        case "down":
          this.mouseDown();
          break;
        case "move":
          this.mouseMove();
          break;
        case "up":
          this.mouseUp();
          break;
        default:
          break;
      }
    },
    init() {
      this.ctx.strokeStyle = this.btnColor.value;
      this.canvas.style.backgroundColor = "#ffffff";
      this.ctx.shadowColor = this.btnColor.value;
      this.ctx.lineWidth =
        this.lineWidthSmall.value * 1 + this.lineWidthBig.value * 1;
      this.ctx.shadowBlur = this.shadowBlur.value;
      this.lineWidthSmallSpan.innerHTML = this.lineWidthSmall.value;
      this.lineWidthBigSpan.innerHTML = this.lineWidthBig.value;
      this.shadowBlurSpan.innerHTML = this.shadowBlur.value;

      this.backOrRestore(
        "save",
        this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
      );
    },

    // 註冊
    register_btnColor() {
      // 设置虚化颜色
      this.ctx.shadowColor = this.btnColor.value;
      // 设置画笔颜色
      this.ctx.strokeStyle = this.btnColor.value;
    },
    register_btnBgc() {
      this.canvas.style.backgroundColor = this.btnBgc.value;
    },
    register_lineWidthSmall() {
      this.ctx.lineWidth =
        this.lineWidthSmall.value * 1 + this.lineWidthBig.value * 1;
      this.lineWidthSmallSpan.innerHTML = this.lineWidthSmall.value;
    },
    register_lineWidthBig() {
      this.ctx.lineWidth =
        this.lineWidthSmall.value * 1 + this.lineWidthBig.value * 1;
      this.lineWidthBigSpan.innerHTML = this.lineWidthBig.value;
    },
    register_shadowBlur() {
      // 设置画笔虚化值
      this.ctx.shadowBlur = this.shadowBlur.value * 1;
      // 显示虚化值
      this.shadowBlurSpan.innerHTML = this.shadowBlur.value;
    },

    // 點擊事件
    click_btnPen(e) {
      this.selected(this.btnPen);
      this.curMode = "penMode";
    },
    click_btnLine(e) {
      this.selected(this.btnLine);
      this.curMode = "lineMode";
    },
    click_btnRect(e) {
      this.selected(this.btnRect);
      this.curMode = "rectMode";
    },
    click_btnCir(e) {
      this.selected(this.btnCir);
      this.curMode = "cirMode";
    },
    click_btnEraser(e) {
      this.selected(this.btnEraser);
      this.curMode = "eraserMode";
    },
    click_btnClear(e) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.backOrRestore("clear");
      this.backOrRestore(
        "save",
        this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
      );
    },
    click_btnBack(e) {
      this.backOrRestore("back");
    },
    click_btnRestore(e) {
      this.backOrRestore("restore");
    },

    // 滑過事件
    mousedown_canvas(e) {
      this.pressPos = this.curPos = this.getMousePos(e.clientX, e.clientY);
      this.startData = this.ctx.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.isPressDown = true;
      this.ctx.beginPath();
      this.draw("down");
    },
    mousemove_canvas(e) {
      if (this.isPressDown) {
        this.curPos = this.getMousePos(e.clientX, e.clientY);
        this.draw("move");
      }
    },
    mouseup_canvas(e) {
      this.curPos = this.getMousePos(e.clientX, e.clientY);
      this.isPressDown = false;
      this.draw("up");
      this.ctx.save();
      const imageData = this.ctx.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.backOrRestore("save", imageData);
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
* {
  border: 0;
  margin: 0;
  // user-select: none;: none;
}

html:root {
  font-size: 16px;
}

#draw {
  position: relative;
  font-size: 0.625rem;
  width: 50rem;
  height: 25rem;
  background-color: rgb(82, 231, 12);
}

#tools {
  text-align: center;
  position: absolute;
  width: 6.25rem;
  height: 100%;
}

#header {
  background-color: rgb(55, 205, 224);
  height: 52%;
}

#footer {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  top: 15.625rem;
  width: 6.25rem;
  height: 35%;
  background-color: rgb(184, 72, 20);
}

.btn {
  margin: 0.3rem;
  box-shadow: 0 0 3px 1px inset;
}

#canvas {
  position: relative;
  margin-left: 6.25rem;
  box-shadow: 0 0 5px 5px inset;
}

input {
  margin: 0.3125rem;
}

.colors {
  width: 40%;
  height: 1.25rem;
}

.ranges {
  width: 90%;
}

.selected {
  background-color: rgb(166, 255, 0);
}

#clear:active,
#back:active,
#restore:active {
  background-color: rgb(166, 255, 0);
}
</style>