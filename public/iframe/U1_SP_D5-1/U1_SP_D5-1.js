(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"U1_SP_D5_1_atlas_", frames: [[466,358,161,39],[712,173,190,183],[466,399,161,39],[682,358,27,71],[904,169,37,108],[629,358,51,85],[714,358,190,183],[725,0,179,167],[714,543,190,180],[466,0,257,171],[466,173,244,154],[0,490,712,154],[0,0,464,488]]}
];


// symbols:



(lib.CachedBmp_446 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_442 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_441 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_445 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_444 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_443 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_437 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_436 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_435 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_434 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_433 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_432 = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ant = function() {
	this.initialize(ss["U1_SP_D5_1_atlas_"]);
	this.gotoAndStop(12);
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
	this.instance = new lib.CachedBmp_441();
	this.instance.setTransform(-78.95,32.85);

	this.instance_1 = new lib.CachedBmp_445();
	this.instance_1.setTransform(3.9,-55.95);

	this.instance_2 = new lib.CachedBmp_444();
	this.instance_2.setTransform(15.5,-74.25);

	this.instance_3 = new lib.CachedBmp_443();
	this.instance_3.setTransform(-55.15,-63);

	this.instance_4 = new lib.CachedBmp_437();
	this.instance_4.setTransform(-95,-91.5);

	this.instance_5 = new lib.CachedBmp_446();
	this.instance_5.setTransform(-78.95,32.85);

	this.instance_6 = new lib.CachedBmp_442();
	this.instance_6.setTransform(-95,-91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_6},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-91.5,190,183);


(lib.answer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖片
	this.instance = new lib.CachedBmp_435();
	this.instance.setTransform(-163.85,-28.55);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// 感應區
	this.instance_1 = new lib.CachedBmp_436();
	this.instance_1.setTransform(-152.9,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.8,-28.5,190,180);


(lib.answer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 感應區
	this.instance = new lib.CachedBmp_433();
	this.instance.setTransform(-24.15,-55.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 圖片
	this.instance_1 = new lib.CachedBmp_434();
	this.instance_1.setTransform(-29.2,-56.65);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-56.6,257,171);


(lib.遊戲區 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.ChoiceW = new lib.answer2();
	this.ChoiceW.name = "ChoiceW";
	this.ChoiceW.setTransform(813.9,-27.7,1,1,0,0,0,188.1,184.5);

	this.ChoiceR = new lib.answer1();
	this.ChoiceR.name = "ChoiceR";
	this.ChoiceR.setTransform(854.25,-39.35,1,1,0,0,0,128,134.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ChoiceR},{t:this.ChoiceW}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.遊戲區, new cjs.Rectangle(472.9,-229.7,473.20000000000005,167.29999999999998), null);


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
	this.PlayNoPause_Ant.setTransform(619.55,612.9,0.47,0.4699,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.PlayNoPause_Ant).wait(1));

	// GameMultipleChoice
	this.GameMultipleChoice = new lib.遊戲區();
	this.GameMultipleChoice.name = "GameMultipleChoice";
	this.GameMultipleChoice.setTransform(754.4,877.25,1,1,0,0,0,779.7,371.4);

	this.timeline.addTween(cjs.Tween.get(this.GameMultipleChoice).wait(1));

	// BG
	this.instance = new lib.CachedBmp_432();
	this.instance.setTransform(484.3,258.2);

	this.instance_1 = new lib.ant();
	this.instance_1.setTransform(78,124,0.7172,0.7172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(697.5,470,498.79999999999995,185.89999999999998);
// library properties:
lib.properties = {
	id: '2C87F68193739943B53128F02478C241',
	width: 1239,
	height: 692,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/U1_SP_D5_1_atlas_.png?1634104051726", id:"U1_SP_D5_1_atlas_"},
		{src:"sounds/Ant.mp3?1634104051774", id:"Ant"},
		{src:"sounds/RIGHT.mp3?1634104051774", id:"RIGHT"},
		{src:"sounds/SWITCH.mp3?1634104051774", id:"SWITCH"},
		{src:"sounds/WRONG.mp3?1634104051774", id:"WRONG"}
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