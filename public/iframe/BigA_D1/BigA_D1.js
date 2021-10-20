(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BigA_D1_atlas_", frames: [[363,541,324,124],[733,0,273,100],[689,541,324,124],[733,102,182,100],[885,295,78,76],[733,320,78,76],[1008,0,13,36],[965,295,19,54],[885,204,26,43],[917,200,87,93],[917,102,91,96],[1020,38,2,11],[1008,38,10,10],[1008,50,10,10],[733,204,150,114],[0,541,361,299],[679,667,294,64],[363,667,314,87],[0,0,731,539]]}
];


// symbols:



(lib.CachedBmp_156 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_154 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_152 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_151 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_150 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_149 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_148 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_147 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_146 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_145 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_144 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["BigA_D1_atlas_"]);
	this.gotoAndStop(18);
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


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvyLoIAA3PIflAAIAAXPg");
	mask.setTransform(101.35,74.9);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.2775,0.2779);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.3,0.5,202.2,148.8), null);


(lib.Drop_A00 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.CachedBmp_156();
	this.instance.setTransform(-162.05,-61.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop_A00, new cjs.Rectangle(-162,-61.9,324,124), null);


(lib.Drag_A1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 文字
	this.instance = new lib.CachedBmp_154();
	this.instance.setTransform(-136.25,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 底圖
	this.instance_1 = new lib.CachedBmp_155();
	this.instance_1.setTransform(-162.05,-61.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drag_A1, new cjs.Rectangle(-162,-61.9,324,124), null);


(lib.Drag_A0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.CachedBmp_152();
	this.instance.setTransform(-90.75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層_1
	this.instance_1 = new lib.CachedBmp_155();
	this.instance_1.setTransform(-162.05,-61.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drag_A0, new cjs.Rectangle(-162,-61.9,324,124), null);


(lib.btn_音檔字彙 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ICON
	this.instance = new lib.CachedBmp_149();
	this.instance.setTransform(2.55,-17.95);

	this.instance_1 = new lib.CachedBmp_148();
	this.instance_1.setTransform(8.35,-27.15);

	this.instance_2 = new lib.CachedBmp_147();
	this.instance_2.setTransform(-27.2,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(2));

	// bg
	this.instance_3 = new lib.CachedBmp_150();
	this.instance_3.setTransform(-39.25,-37.8);

	this.instance_4 = new lib.CachedBmp_151();
	this.instance_4.setTransform(-39.25,-37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-37.8,78,76);


(lib.遊戲區 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.Drop_A0 = new lib.Drop_A00();
	this.Drop_A0.name = "Drop_A0";
	this.Drop_A0.setTransform(476.2,402.4);

	this.Drag_A1 = new lib.Drag_A1();
	this.Drag_A1.name = "Drag_A1";
	this.Drag_A1.setTransform(1178.35,295.55);

	this.Drag_A0 = new lib.Drag_A0();
	this.Drag_A0.name = "Drag_A0";
	this.Drag_A0.setTransform(1178.35,157.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Drag_A0},{t:this.Drag_A1},{t:this.Drop_A0}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.遊戲區, new cjs.Rectangle(314.2,96,1026.1,368.5), null);


// stage content:
(lib.BigA_D1 = function(mode,startPosition,loop) {
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

	// VOICE
	this.PlayNoPause_Ant = new lib.btn_音檔字彙();
	this.PlayNoPause_Ant.name = "PlayNoPause_Ant";
	this.PlayNoPause_Ant.setTransform(431.85,214.35,0.8802,0.8802,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.PlayNoPause_Ant).wait(1));

	// GameDragDrop
	this.instance = new lib.CachedBmp_138();
	this.instance.setTransform(908.6,206.4);

	this.instance_1 = new lib.CachedBmp_137();
	this.instance_1.setTransform(898.5,195.05);

	this.GameDragDrop = new lib.遊戲區();
	this.GameDragDrop.name = "GameDragDrop";
	this.GameDragDrop.setTransform(570.1,499.3,1,1,0,0,0,696.1,305.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.GameDragDrop},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 圖層_2
	this.instance_2 = new lib.CachedBmp_139();
	this.instance_2.setTransform(872.4,272.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// flash0_ai
	this.instance_3 = new lib.CachedBmp_146();
	this.instance_3.setTransform(1013.6,18.95);

	this.instance_4 = new lib.CachedBmp_145();
	this.instance_4.setTransform(1011.35,17.45);

	this.instance_5 = new lib.CachedBmp_144();
	this.instance_5.setTransform(1106.25,0);

	this.instance_6 = new lib.CachedBmp_144();
	this.instance_6.setTransform(1001.65,0);

	this.instance_7 = new lib.CachedBmp_142();
	this.instance_7.setTransform(1102,8);

	this.instance_8 = new lib.CachedBmp_141();
	this.instance_8.setTransform(997.45,8);

	this.instance_9 = new lib.CachedBmp_140();
	this.instance_9.setTransform(980.2,5.35);

	this.instance_10 = new lib.ClipGroup();
	this.instance_10.setTransform(320.55,277.2,3.1628,3.1628,0,0,0,101.6,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(618.7,346,614.7,312.20000000000005);
// library properties:
lib.properties = {
	id: '2C87F68193739943B53128F02478C241',
	width: 1239,
	height: 692,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BigA_D1_atlas_.png?1634027562776", id:"BigA_D1_atlas_"},
		{src:"sounds/Ant.mp3?1634027562808", id:"Ant"},
		{src:"sounds/RIGHT.mp3?1634027562808", id:"RIGHT"},
		{src:"sounds/WRONG.mp3?1634027562808", id:"WRONG"}
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