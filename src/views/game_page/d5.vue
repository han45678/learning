<template>
  <div
    id="animation_container"
    style="
      background-color: rgba(255, 227, 63, 1);
      width: 1916px;
      height: 1108px;
    "
  >
    <canvas
      id="canvas"
      width="1916"
      height="1108"
      style="
        position: absolute;
        display: none;
        background-color: rgba(255, 227, 63, 1);
      "
    />
    <div
      id="dom_overlay_container"
      style="
        pointer-events: none;
        overflow: hidden;
        width: 1916px;
        height: 1108px;
        position: absolute;
        left: 0px;
        top: 0px;
        display: none;
      "
    />
  </div>
  <div
    id="_preload_div_"
    style="
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      height: 1108px;
      width: 1916px;
      text-align: center;
    "
  >
    <span style="display: inline-block; height: 100%; vertical-align: middle" />
    <img
      src="images/_preloader.gif?1629781476426"
      style="vertical-align: middle; max-height: 100%"
    >
  </div>
</template>

<script src="js/createjs.min.js"></script>
<script src='js/SSDK.js'></script>
<script src="js/U1_Story_D1.js"></script>
<script>

export default {
  data: () => ({
    useMarqueeDebug: true,
    pageUseWebGL: true,
    canvas: "",
    stage: "",
    exportRoot: "",
    anim_container: "",
    dom_overlay_container: "",
    fnStartAnimation: "",
    anim_id: "",
  }),
  methods: {
    getHtmlhrefValue(varname) {
      if (window) {
        const url = decodeURI(window.location.href);
        const qparts = url.split("?");
        if (qparts.length <= 1) {
          return undefined;
        }
        const query = qparts[1];
        const vars = query.split("&");
        let value = undefined;
        let i;
        for (i = 0; i < vars.length; i++) {
          const parts = vars[i].split("=");
          if (parts[0] == varname) {
            value = parts[1];
            break;
          }
        }
        if (value !== undefined) {
          value = unescape(value);
          value.replace(/\+/g, " ");
        }
        return value;
      }
    },
    init() {
      this.anim_id = this.anim_id || Object.keys(AdobeAn.compositions)[0];
      this.canvas = document.getElementById("canvas");
      this.anim_container = document.getElementById("animation_container");
      this.dom_overlay_container = document.getElementById("dom_overlay_container");
      createjs.MotionGuidePlugin.install();
      if (false) {
        var comp = AdobeAn.getComposition("2C87F68193739943B53128F02478C241");
        var lib = comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.installPlugin(createjs.Sound);
        loader.addEventListener("fileload", function (evt) {
          handleFileLoad(evt, comp);
        });
        loader.addEventListener("complete", function (evt) {
          handleComplete(evt, comp);
        });
      } else {
        var comp = AdobeAn.getComposition(this.anim_id);
        var lib = comp.getLibrary();
        var loader = new createjs.LoadQueue(true, "", "Anonymous");
        loader.addEventListener("fileload", function (evt) {
          handleFileLoad(evt, comp);
        });
        loader.addEventListener("complete", function (evt) {
          handleComplete(evt, comp);
        });
        loader.setMaxConnections(6);
        loader.installPlugin(createjs.Sound);
      }
      lib.extraSendChannelFunc = lib_test;
      var lib = comp.getLibrary();
      var i,
        max = lib.properties.manifest.length;
      var filter_manifest = [];
      for (i = 0; i < max; i++) {
        if (lib.properties.manifest[i].src.indexOf(".mp3") === -1) {
          filter_manifest.push(lib.properties.manifest[i]);
        }
      }
      var close_mp3_preload = true;
      if (close_mp3_preload) {
        if (filter_manifest.length !== 0) {
          loader.loadManifest(filter_manifest);
        } else {
          handleComplete({}, comp);
        }
      } else {
        if (lib.properties.manifest.length !== 0) {
          loader.loadManifest(lib.properties.manifest);
        } else {
          handleComplete({}, comp);
        }
      }
    },
    handleFileLoad(evt, comp) {
			var images = comp.getImages();
			if (evt && (evt.item.type == "image")) {
				images[evt.item.id] = evt.result;
			}

			function handleFileLoad(evt, comp) {}
		},

		handleComplete(evt, comp) {
			if (pageUseWebGL) {
				(comp.getLibrary().Stage = function (canvas) {
					let options = {
						transparent: true,
						antialias: false,
						premultiply: true
					};
					createjs.StageGL.call(this, canvas, options);
				}).prototype = p = new createjs.StageGL();
				AdobeAn.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
					let lastW, lastH, lastS = 1;
					window.addEventListener('resize', resizeCanvas);
					resizeCanvas();

					function resizeCanvas() {
						let w = lib.properties.width,
							h = lib.properties.height;
						let iw = window.innerWidth,
							ih = window.innerHeight;
						let pRatio = window.devicePixelRatio || 1,
							xRatio = iw / w,
							yRatio = ih / h,
							sRatio = 1;
						if (isResp) {
							if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
								sRatio = lastS;
							} else if (!isScale) {
								if (iw < w || ih < h)
									sRatio = Math.min(xRatio, yRatio);
							} else if (scaleType == 1) {
								sRatio = Math.min(xRatio, yRatio);
							} else if (scaleType == 2) {
								sRatio = Math.max(xRatio, yRatio);
							}
						}
						domContainers[0].width = w * pRatio * sRatio;
						domContainers[0].height = h * pRatio * sRatio;
						domContainers.forEach(function (container) {
							container.style.width = w * sRatio + 'px';
							container.style.height = h * sRatio + 'px';
						});
						stage.setClearColor("rgba(255,255,255,1.0)");
						stage.scaleX = pRatio * sRatio;
						stage.scaleY = pRatio * sRatio;
						lastW = iw;
						lastH = ih;
						lastS = sRatio;
						stage.tickOnUpdate = false;
						stage.updateViewport(canvas.width, canvas.height);
						stage.tickOnUpdate = true;
						stage.update();
					}
				};
				canvas.style.backgroundColor = 'rgba(255, 255, 255, 0.00)';
			}
			
			var lib = comp.getLibrary();
			var ss = comp.getSpriteSheet();
			var queue = evt.target;
			var ssMetadata = lib.ssMetadata;
			for (i = 0; i < ssMetadata.length; i++) {
				ss[ssMetadata[i].name] = new createjs.SpriteSheet({
					"images": [queue.getResult(ssMetadata[i].name)],
					"frames": ssMetadata[i].frames
				})
			}
			var preloaderDiv = document.getElementById("_preload_div_");
			preloaderDiv.style.display = 'none';
			canvas.style.display = 'block';
			exportRoot = new lib.筆順配對();
			stage = new lib.Stage(canvas);
			preloaderDiv.style.display = 'inline-block';
			canvas.style.display = 'none';
			stage.preventSelection = false;
			fnStartAnimation = function () {
				stage.addChild(exportRoot);
				createjs.Ticker.framerate = lib.properties.fps;
				createjs.Ticker.addEventListener("tick", stage);
			}
			AdobeAn.makeResponsive(true, 'both', true, 1, [canvas, preloaderDiv, anim_container, dom_overlay_container]);
			AdobeAn.compositionLoaded(lib.properties.id);
			fnStartAnimation();
		},
		callDelayPageInitComplete() {
			var preloaderDiv = document.getElementById("_preload_div_");
			preloaderDiv.style.display = 'none';
			canvas.style.display = 'block';
		},
		playSound(id, loop) {
			alert('有影格音檔:' + id + ' 存在，請清除');
		}
  },
  mounted() {
    if (getHtmlhrefValue("pageUseWebGL") !== undefined) {
      this.pageUseWebGL =
        getHtmlhrefValue("pageUseWebGL") === "false" ? false : true;
    }
  },
  created() {},
};
</script>

<style scoped lang="scss">
#animation_container {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#_preload_div_ {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100% !important;
  height: 100% !important;
}
#animation_container {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
</style>