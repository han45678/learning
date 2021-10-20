(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SmallA_D10_atlas_", frames: [[873,0,123,119],[998,0,123,119],[1869,0,21,56],[1753,0,30,85],[1711,0,40,67],[1789,0,64,351],[0,0,301,368],[1653,0,56,76],[1533,0,58,76],[1349,0,90,90],[1441,0,90,90],[1593,0,58,76],[0,379,1446,37],[303,0,305,333],[1123,0,109,88],[741,0,130,136],[610,0,129,142],[1234,0,113,81],[1855,0,12,342],[303,335,1484,42],[0,418,1448,6]]}
];


// symbols:



(lib.CachedBmp_487 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_486 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_485 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_484 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_483 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_482 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_481 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_478 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_475 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_480 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_479 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_472 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_471 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_470 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_469 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_468 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_467 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_466 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_465 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_464 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_463 = function() {
	this.initialize(ss["SmallA_D10_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.btn_音檔字彙 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ICON
	this.instance = new lib.CachedBmp_485();
	this.instance.setTransform(3.95,-28.2);

	this.instance_1 = new lib.CachedBmp_484();
	this.instance_1.setTransform(13.1,-42.65);

	this.instance_2 = new lib.CachedBmp_483();
	this.instance_2.setTransform(-42.65,-33.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(2));

	// bg
	this.instance_3 = new lib.CachedBmp_486();
	this.instance_3.setTransform(-61.45,-59.25);

	this.instance_4 = new lib.CachedBmp_487();
	this.instance_4.setTransform(-61.45,-59.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,-59.2,123,119);


(lib.ans22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.CachedBmp_482();
	this.instance.setTransform(-32.05,-152.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-152.3,64,351);


(lib.ans11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.CachedBmp_481();
	this.instance.setTransform(-128.2,-164.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.2,-164.1,301,368);


(lib.startPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.instance = new lib.CachedBmp_478();
	this.instance.setTransform(-26.1,-41.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 圖層_1
	this.instance_1 = new lib.CachedBmp_479();
	this.instance_1.setTransform(-45,-45);

	this.instance_2 = new lib.CachedBmp_480();
	this.instance_2.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.btn_Q02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.instance = new lib.CachedBmp_475();
	this.instance.setTransform(-27.15,-41.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 圖層_1
	this.instance_1 = new lib.CachedBmp_479();
	this.instance_1.setTransform(-45,-45);

	this.instance_2 = new lib.CachedBmp_480();
	this.instance_2.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.btn_Q01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.instance = new lib.CachedBmp_472();
	this.instance.setTransform(-27.15,-41.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 圖層_1
	this.instance_1 = new lib.CachedBmp_479();
	this.instance_1.setTransform(-45,-45);

	this.instance_2 = new lib.CachedBmp_480();
	this.instance_2.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.遊戲區 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 順序點1
	this.Start_1 = new lib.startPoint();
	this.Start_1.name = "Start_1";
	this.Start_1.setTransform(717.1,388,0.4747,0.4747,0,0,0,1,0.8);

	this.End_1 = new lib.btn_Q01();
	this.End_1.name = "End_1";
	this.End_1.setTransform(716.65,558.45,0.4747,0.4747);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.End_1},{t:this.Start_1}]}).wait(1));

	// 順序點2
	this.Start_2 = new lib.startPoint();
	this.Start_2.name = "Start_2";
	this.Start_2.setTransform(738.2,313.5,0.4747,0.4747,0,0,0,1,0.8);

	this.End_2 = new lib.btn_Q02();
	this.End_2.name = "End_2";
	this.End_2.setTransform(737.8,653,0.4747,0.4747,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.End_2},{t:this.Start_2}]}).wait(1));

	// flash0_ai
	this.Line_2 = new lib.ans22();
	this.Line_2.name = "Line_2";
	this.Line_2.setTransform(761.45,460.35);

	this.Line_1 = new lib.ans11();
	this.Line_1.name = "Line_1";
	this.Line_1.setTransform(558.7,460.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Line_1},{t:this.Line_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.遊戲區, new cjs.Rectangle(695.3,291.8,63.80000000000007,382.49999999999994), null);


// stage content:
(lib.SmallA_D10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var instance = new SSDK.GameBook(createjs, an, this, lib.properties.id);
		instance.init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// GameGuideSeqConnect
	this.GameGuideSeqConnect_AlphabetA = new lib.遊戲區();
	this.GameGuideSeqConnect_AlphabetA.name = "GameGuideSeqConnect_AlphabetA";
	this.GameGuideSeqConnect_AlphabetA.setTransform(8.5,11.6,1,1,0,0,0,8.5,11.6);

	this.timeline.addTween(cjs.Tween.get(this.GameGuideSeqConnect_AlphabetA).wait(1));

	// 音檔播放
	this.PlayNoPause_PhonicsA = new lib.btn_音檔字彙();
	this.PlayNoPause_PhonicsA.name = "PlayNoPause_PhonicsA";
	this.PlayNoPause_PhonicsA.setTransform(57,91.4,0.7662,0.7662);

	this.timeline.addTween(cjs.Tween.get(this.PlayNoPause_PhonicsA).wait(1));

	// bg
	this.instance = new lib.CachedBmp_471();
	this.instance.setTransform(-102.55,1);

	this.instance_1 = new lib.CachedBmp_470();
	this.instance_1.setTransform(437.05,312.8);

	this.instance_2 = new lib.CachedBmp_469();
	this.instance_2.setTransform(620.3,553.95);

	this.instance_3 = new lib.CachedBmp_468();
	this.instance_3.setTransform(439.3,507.05);

	this.instance_4 = new lib.CachedBmp_467();
	this.instance_4.setTransform(439.3,315);

	this.instance_5 = new lib.CachedBmp_466();
	this.instance_5.setTransform(620.85,316.1);

	this.instance_6 = new lib.CachedBmp_465();
	this.instance_6.setTransform(731.2,314.45);

	this.instance_7 = new lib.CachedBmp_464();
	this.instance_7.setTransform(-140.45,653.7);

	this.instance_8 = new lib.CachedBmp_463();
	this.instance_8.setTransform(-97.6,316.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(479.1,347,871.3000000000001,348.70000000000005);
// library properties:
lib.properties = {
	id: '2C87F68193739943B53128F02478C241',
	width: 1239,
	height: 692,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SmallA_D10_atlas_.png?1634105475033", id:"SmallA_D10_atlas_"},
		{src:"sounds/AlphabetA.mp3?1634105475076", id:"AlphabetA"},
		{src:"sounds/PhonicsA.mp3?1634105475076", id:"PhonicsA"},
		{src:"sounds/RIGHT.mp3?1634105475076", id:"RIGHT"},
		{src:"sounds/SWITCH.mp3?1634105475076", id:"SWITCH"},
		{src:"sounds/WRONG.mp3?1634105475076", id:"WRONG"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2C87F68193739943B53128F02478C241'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;