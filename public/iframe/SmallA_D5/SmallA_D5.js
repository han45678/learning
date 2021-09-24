(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SmallA_D5_atlas_", frames: [[0,0,1916,1108]]},
		{name:"SmallA_D5_atlas_2", frames: [[0,0,1782,963]]},
		{name:"SmallA_D5_atlas_3", frames: [[408,1545,62,59],[1288,1402,9,23],[1307,1372,12,35],[1288,1372,17,28],[1224,1372,62,59],[0,1110,476,433],[1742,0,70,1108],[0,0,1172,1108],[1174,0,566,1108],[1354,1256,269,144],[1361,1110,269,144],[953,1372,269,143],[0,1545,406,144],[953,1110,406,144],[953,1256,399,114],[478,1110,473,434]]}
];


// symbols:



(lib.CachedBmp_42 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["SmallA_D5_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["SmallA_D5_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.apple = function() {
	this.initialize(ss["SmallA_D5_atlas_3"]);
	this.gotoAndStop(15);
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


(lib.VoiceEEE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(-239.25,-215.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 圖層_3
	this.instance_1 = new lib.CachedBmp_45();
	this.instance_1.setTransform(188,-177.9);

	this.instance_2 = new lib.CachedBmp_44();
	this.instance_2.setTransform(191.8,-183.85);

	this.instance_3 = new lib.CachedBmp_43();
	this.instance_3.setTransform(168.85,-180.2);

	this.instance_4 = new lib.CachedBmp_38();
	this.instance_4.setTransform(155.55,-196);

	this.instance_5 = new lib.CachedBmp_42();
	this.instance_5.setTransform(155.55,-196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_5},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	// 圖層_1
	this.instance_6 = new lib.apple();
	this.instance_6.setTransform(-236.5,-217);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.2,-217,476,434.1);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhI+BDGMAAAiGLMCSPAAAMAAACGLg");
	mask.setTransform(468.9139,429.425);

	// 圖層_3
	this.instance = new lib.CachedBmp_36();
	this.instance.setTransform(310.05,0,0.7749,0.7749);

	this.instance_1 = new lib.CachedBmp_35();
	this.instance_1.setTransform(11,0,0.7749,0.7749);

	this.instance_2 = new lib.CachedBmp_34();
	this.instance_2.setTransform(11,0,0.7749,0.7749);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(11,0.1,908.3,858.6), null);


(lib.answer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 感應區
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(0.15,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 文字
	this.instance_1 = new lib.CachedBmp_31();

	this.instance_2 = new lib.CachedBmp_32();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269.2,144.2);


(lib.answer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 感應區
	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(-1.6,26.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 文字
	this.instance_1 = new lib.CachedBmp_28();
	this.instance_1.setTransform(-2.5,-3.25);

	this.instance_2 = new lib.CachedBmp_29();
	this.instance_2.setTransform(-2.5,-3.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-3.2,406,144.2);


(lib.遊戲區 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.ChoiceW = new lib.answer2();
	this.ChoiceW.name = "ChoiceW";
	this.ChoiceW.setTransform(1275.7,244.1,1,1,0,0,0,188.1,184.5);

	this.ChoiceR = new lib.answer1();
	this.ChoiceR.name = "ChoiceR";
	this.ChoiceR.setTransform(254.05,197.45,1,1,0,0,0,128,134.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ChoiceR},{t:this.ChoiceW}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.遊戲區, new cjs.Rectangle(123.6,59.6,1233.2,144.20000000000002), null);


// stage content:
(lib.SmallA_D5 = function(mode,startPosition,loop) {
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

	// voice
	this.PlayNoPause_Apple = new lib.VoiceEEE();
	this.PlayNoPause_Apple.name = "PlayNoPause_Apple";
	this.PlayNoPause_Apple.setTransform(954.5,297);

	this.timeline.addTween(cjs.Tween.get(this.PlayNoPause_Apple).wait(1));

	// GameMultipleChoice
	this.GameMultipleChoice = new lib.遊戲區();
	this.GameMultipleChoice.name = "GameMultipleChoice";
	this.GameMultipleChoice.setTransform(997.05,1008.65,1,1,0,0,0,779.7,371.4);

	this.timeline.addTween(cjs.Tween.get(this.GameMultipleChoice).wait(1));

	// bg白底
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(64.55,78.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg黃點
	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(1916.9,1107.1,1.2904,1.2904,180,0,0,10.3,0.9);

	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(-0.9,1.1,1.2904,1.2904,0,0,0,10.3,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// bg黃底
	this.instance_3 = new lib.CachedBmp_27();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(946.1,554,981.8000000000001,554.3);
// library properties:
lib.properties = {
	id: '2C87F68193739943B53128F02478C241',
	width: 1916,
	height: 1108,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SmallA_D5_atlas_.png?1632274463200", id:"SmallA_D5_atlas_"},
		{src:"images/SmallA_D5_atlas_2.png?1632274463200", id:"SmallA_D5_atlas_2"},
		{src:"images/SmallA_D5_atlas_3.png?1632274463201", id:"SmallA_D5_atlas_3"},
		{src:"sounds/Apple.mp3?1632274463222", id:"Apple"},
		{src:"sounds/RIGHT.mp3?1632274463222", id:"RIGHT"},
		{src:"sounds/SWITCH.mp3?1632274463222", id:"SWITCH"},
		{src:"sounds/WRONG.mp3?1632274463222", id:"WRONG"}
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