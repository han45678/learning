(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"U1_SP_D5_1_atlas_", frames: [[0,0,1916,1108]]},
		{name:"U1_SP_D5_1_atlas_2", frames: [[0,0,1782,963]]},
		{name:"U1_SP_D5_1_atlas_3", frames: [[998,1505,161,39],[1189,1316,190,183],[466,1529,161,39],[505,1570,27,71],[466,1570,37,108],[629,1529,51,85],[1381,1328,190,183],[1742,0,70,1108],[0,0,1172,1108],[1174,0,566,1108],[998,1316,189,187],[787,1316,209,197],[466,1316,319,211],[1416,1110,327,216],[466,1110,948,204],[0,1110,464,488]]}
];


// symbols:



(lib.CachedBmp_42 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ant = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_3"]);
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


(lib.voice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(-78.95,32.85);

	this.instance_1 = new lib.CachedBmp_41();
	this.instance_1.setTransform(3.9,-55.95);

	this.instance_2 = new lib.CachedBmp_40();
	this.instance_2.setTransform(15.5,-74.25);

	this.instance_3 = new lib.CachedBmp_39();
	this.instance_3.setTransform(-55.15,-63);

	this.instance_4 = new lib.CachedBmp_33();
	this.instance_4.setTransform(-95,-91.5);

	this.instance_5 = new lib.CachedBmp_42();
	this.instance_5.setTransform(-78.95,32.85);

	this.instance_6 = new lib.CachedBmp_38();
	this.instance_6.setTransform(-95,-91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_6},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-91.5,190,183);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhI+BDGMAAAiGLMCSPAAAMAAACGLg");
	mask.setTransform(468.9139,429.425);

	// 圖層_3
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(310.05,0,0.7749,0.7749);

	this.instance_1 = new lib.CachedBmp_31();
	this.instance_1.setTransform(11,0,0.7749,0.7749);

	this.instance_2 = new lib.CachedBmp_30();
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

	// 圖片
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-143.05,-26.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// 感應區
	this.instance_1 = new lib.CachedBmp_29();
	this.instance_1.setTransform(-130.35,-18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-26.1,209,197);


(lib.answer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 感應區
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(-24.55,-55.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 圖片
	this.instance_1 = new lib.CachedBmp_27();
	this.instance_1.setTransform(-22.55,-51.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-55.4,327,216);


(lib.遊戲區 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.ChoiceW = new lib.answer2();
	this.ChoiceW.name = "ChoiceW";
	this.ChoiceW.setTransform(821.45,-21.4,1,1,0,0,0,188.1,184.5);

	this.ChoiceR = new lib.answer1();
	this.ChoiceR.name = "ChoiceR";
	this.ChoiceR.setTransform(950.65,-52.55,1,1,0,0,0,128,134.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ChoiceR},{t:this.ChoiceW}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.遊戲區, new cjs.Rectangle(503,-242.6,622.0999999999999,216), null);


// stage content:
(lib.U1_SP_D51 = function(mode,startPosition,loop) {
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
	this.PlayNoPause_Ant = new lib.voice();
	this.PlayNoPause_Ant.name = "PlayNoPause_Ant";
	this.PlayNoPause_Ant.setTransform(958,903.85);

	this.timeline.addTween(cjs.Tween.get(this.PlayNoPause_Ant).wait(1));

	// GameMultipleChoice
	this.GameMultipleChoice = new lib.遊戲區();
	this.GameMultipleChoice.name = "GameMultipleChoice";
	this.GameMultipleChoice.setTransform(1004.75,986.15,1,1,0,0,0,779.7,371.4);

	this.timeline.addTween(cjs.Tween.get(this.GameMultipleChoice).wait(1));

	// BG
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(758.35,349.55);

	this.instance_1 = new lib.ant();
	this.instance_1.setTransform(140,185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg白底
	this.instance_2 = new lib.CachedBmp_24();
	this.instance_2.setTransform(64.55,78.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg黃點
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.setTransform(1916.9,1107.1,1.2904,1.2904,180,0,0,10.3,0.9);

	this.instance_4 = new lib.ClipGroup();
	this.instance_4.setTransform(-0.9,1.1,1.2904,1.2904,0,0,0,10.3,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// bg黃底
	this.instance_5 = new lib.CachedBmp_25();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

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
		{src:"images/U1_SP_D5_1_atlas_.png?1632275471204", id:"U1_SP_D5_1_atlas_"},
		{src:"images/U1_SP_D5_1_atlas_2.png?1632275471204", id:"U1_SP_D5_1_atlas_2"},
		{src:"images/U1_SP_D5_1_atlas_3.png?1632275471205", id:"U1_SP_D5_1_atlas_3"},
		{src:"sounds/Ant.mp3?1632275471236", id:"Ant"},
		{src:"sounds/RIGHT.mp3?1632275471236", id:"RIGHT"},
		{src:"sounds/SWITCH.mp3?1632275471236", id:"SWITCH"},
		{src:"sounds/WRONG.mp3?1632275471236", id:"WRONG"}
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