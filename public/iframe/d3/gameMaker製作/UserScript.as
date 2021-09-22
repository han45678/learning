BtnSoundClass
KeyBoardClass
GMClassHitGameAutoTypeB01
GMClassHitGameAutoTypeB02
GMClassHitGameAutoTypeB03
GMClassHitGameAutoTypeB04
GMClassRightMC
GMClassWrongMC
GMClassRightMC0
GMClassWrongMC0
GMClassRightMC2
GMClassWrongMC2
GMTitleA01
GMTitleB01
GMTitleC01
GMTitleA00
GMTitleB00
GMTitleC00
GMTitleA0
GMTitleB0
GMTitleC0
GMToolBarA01
MulitiBreakLineA01

[Embed(source = "C:/Users/NXUSER/Desktop/ACT/libs/小C_工作區域 1.png")]public var PNG202109071605253:Class;
[Embed(source = "C:/Users/NXUSER/Desktop/ACT/libs/box.png")]public var PNG20210907160638:Class;
[Embed(source = "C:/Users/NXUSER/Desktop/ACT/libs/B_工作區域 1.png")]public var PNG202109071605261:Class;
[Embed(source = "C:/Users/NXUSER/Desktop/ACT/libs/A_工作區域 1.png")]public var PNG20210907160526:Class;
[Embed(source = "C:/Users/NXUSER/Desktop/ACT/libs/小A_工作區域 1.png")]public var PNG202109071605251:Class;
[Embed(source = "C:/Users/NXUSER/Desktop/ACT/libs/C_工作區域 1.png")]public var PNG202109071605262:Class;
[Embed(source = "C:/Users/NXUSER/Desktop/ACT/libs/小D_工作區域 1.png")]public var PNG202109071605254:Class;
[Embed(source = "C:/Users/NXUSER/Desktop/ACT/libs/D_工作區域 1.png")]public var PNG20210907160525:Class;
[Embed(source = "C:/Users/NXUSER/Desktop/ACT/libs/小B_工作區域 1.png")]public var PNG202109071605252:Class;

private function initUserLib():void{
	_vResourceTypeMap["PNG202109071605253"] = "PNG";
	_vResourceTypeMap["PNG20210907160638"] = "PNG";
	_vResourceTypeMap["PNG202109071605261"] = "PNG";
	_vResourceTypeMap["PNG20210907160526"] = "PNG";
	_vResourceTypeMap["PNG202109071605251"] = "PNG";
	_vResourceTypeMap["PNG202109071605262"] = "PNG";
	_vResourceTypeMap["PNG202109071605254"] = "PNG";
	_vResourceTypeMap["PNG20210907160525"] = "PNG";
	_vResourceTypeMap["PNG202109071605252"] = "PNG";
	_vResourceTypeMap["GMTITLED0"] = "AUTO";
	_vResourceTypeMap["GMTITLED01"] = "AUTO";
	_vResourceTypeMap["GMTITLEA0"] = "AUTO";
	_vResourceTypeMap["GMTITLEA00"] = "AUTO";
	_vResourceTypeMap["GMCLASSHITGAMEAUTOTYPEB01"] = "AUTO";
	_vResourceTypeMap["GMTITLEC00"] = "AUTO";
	_vResourceTypeMap["GMTOOLBARA01"] = "AUTO";
	_vResourceTypeMap["GMTITLEE01"] = "AUTO";
	_vResourceTypeMap["GMCLASSHITGAMEAUTOTYPEB03"] = "AUTO";
	_vResourceTypeMap["GMTITLEE0"] = "AUTO";
	_vResourceTypeMap["GMCLASSHITGAMEAUTOTYPEB04"] = "AUTO";
	_vResourceTypeMap["KEYBOARDCLASS"] = "KEYBOARD";
	_vResourceTypeMap["GMTITLEE00"] = "AUTO";
	_vResourceTypeMap["GMTITLEA01"] = "AUTO";
	_vResourceTypeMap["NXFLEXTEXTFILED"] = "FLEXTEXT";
	_vResourceTypeMap["GMTITLED00"] = "AUTO";
	_vResourceTypeMap["BTNSOUNDCLASS"] = "AUTO";
	_vResourceTypeMap["GMCLASSHITGAMEAUTOTYPEB02"] = "AUTO";
	_vResourceTypeMap["GMTITLEC01"] = "AUTO";
	_vResourceTypeMap["GMTITLEB0"] = "AUTO";
	_vResourceTypeMap["GMTITLEC0"] = "AUTO";
	_vResourceTypeMap["GMTITLEB01"] = "AUTO";
	_vResourceTypeMap["GMTITLEB00"] = "AUTO";
	_vResourceTypeMap["FLIPAUTO"] = "AUTO";

	_vPageSize = 1;
	_vSoundCount= 2;
	_vPageIntroSoundStatus = 2;
	_vPageMenuTitle = "";
	_vPageData[0] = {
		type: "Type5",
		bgColor:  0xFFFFFF,
		bgWidth: 1024,
		bgHeight: 768,
		bgWidth2: 1024,
		bgHeight2: 768,
		bgWidth3: 1024,
		bgHeight3: 768,
		mulitSoundBtnVisible:  true,
		mulitCheckBtnVisible:  true,
		borderMaskShow:  false,
		mulitUserBreakLine:{ resource:"MulitiBreakLineA01" ,x:1022,y:384,scaleX:1, scaleY:1 ,x2:1022,y2:384,scaleX2:1, scaleY2:1,x3:1022,y3:384,scaleX3:1, scaleY3:1},
		winMC:{ resource:"GMClassRightMC0" ,x:510,y:384,scaleX:1, scaleY:1,x2:510,y2:384,scaleX2:1, scaleY2:1,x3:510,y3:384,scaleX3:1, scaleY3:1},
		faultMC:{ resource:"GMClassWrongMC0" ,x:510,y:384,scaleX:1, scaleY:1,x2:510,y2:384,scaleX2:1, scaleY2:1,x3:510,y3:384,scaleX3:1, scaleY3:1},
		sound:{ resource:"" ,x:32,y:112,scaleX:1, scaleY:1,x2:32,y2:112,scaleX2:1, scaleY2:1,x3:32,y3:112,scaleX3:1, scaleY3:1},
		layout:["U20210907160642","U20210907160649","U20210907160650","U20210907160651","U20210907160700","U20210907160703","U20210907160704","U20210907160705","U20210907161027","U20210907161035","U20210907161043","U20210907161046","U20210907161100","U202109071611001","U202109071611002","U202109071611003"],
		activeMC:["U20210907161035","U20210907161046","U20210907161043","U20210907161027"],
		activeMCP:["U202109071611001","U202109071611003","U20210907161100","U202109071611002"],
		activeRightSets:[["U20210907161046"],["U20210907161027"],["U20210907161043"],["U20210907161035"]],
		baseMC:["U20210907160704","U20210907160705","U20210907160700","U20210907160650","U20210907160651","U20210907160642","U20210907160703","U20210907160649"],
		U20210907160642:[{ resource:"PNG20210907160526" ,x:867.45,y:190.15,originX:-187,originY:-209,scaleX:0.4556024968624115,scaleY:0.4556024968624115,sound:"",x2:867.45,y2:190.15,scaleX2:0.4556024968624115,scaleY2:0.4556024968624115,x3:867.45,y3:190.15,scaleX3:0.4556024968624115,scaleY3:0.4556024968624115 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:374,textHeight:418,textWidth2:374,textHeight2:418,textWidth3:374,textHeight3:418,chinaCode:false,group:0}],
		U20210907160649:[{ resource:"PNG202109071605261" ,x:412.75,y:190.15,originX:-187,originY:-209,scaleX:0.4556024968624115,scaleY:0.4556024968624115,sound:"",x2:412.75,y2:190.15,scaleX2:0.4556024968624115,scaleY2:0.4556024968624115,x3:412.75,y3:190.15,scaleX3:0.4556024968624115,scaleY3:0.4556024968624115 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:374,textHeight:418,textWidth2:374,textHeight2:418,textWidth3:374,textHeight3:418,chinaCode:false,group:0}],
		U20210907160650:[{ resource:"PNG202109071605262" ,x:640.05,y:190.15,originX:-187,originY:-209,scaleX:0.4556024968624115,scaleY:0.4556024968624115,sound:"",x2:640.05,y2:190.15,scaleX2:0.4556024968624115,scaleY2:0.4556024968624115,x3:640.05,y3:190.15,scaleX3:0.4556024968624115,scaleY3:0.4556024968624115 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:374,textHeight:418,textWidth2:374,textHeight2:418,textWidth3:374,textHeight3:418,chinaCode:false,group:0}],
		U20210907160651:[{ resource:"PNG20210907160525" ,x:185.45,y:190.15,originX:-187,originY:-209,scaleX:0.4556024968624115,scaleY:0.4556024968624115,sound:"",x2:185.45,y2:190.15,scaleX2:0.4556024968624115,scaleY2:0.4556024968624115,x3:185.45,y3:190.15,scaleX3:0.4556024968624115,scaleY3:0.4556024968624115 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:374,textHeight:418,textWidth2:374,textHeight2:418,textWidth3:374,textHeight3:418,chinaCode:false,group:0}],
		U20210907160700:[{ resource:"PNG202109071605251" ,x:407.1,y:637.5,originX:-187,originY:-209,scaleX:0.4556024968624115,scaleY:0.4556024968624115,sound:"",x2:407.1,y2:637.5,scaleX2:0.4556024968624115,scaleY2:0.4556024968624115,x3:407.1,y3:637.5,scaleX3:0.4556024968624115,scaleY3:0.4556024968624115 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:374,textHeight:418,textWidth2:374,textHeight2:418,textWidth3:374,textHeight3:418,chinaCode:false,group:0}],
		U20210907160703:[{ resource:"PNG202109071605252" ,x:646.1,y:637.5,originX:-187,originY:-209,scaleX:0.4556024968624115,scaleY:0.4556024968624115,sound:"",x2:646.1,y2:637.5,scaleX2:0.4556024968624115,scaleY2:0.4556024968624115,x3:646.1,y3:637.5,scaleX3:0.4556024968624115,scaleY3:0.4556024968624115 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:374,textHeight:418,textWidth2:374,textHeight2:418,textWidth3:374,textHeight3:418,chinaCode:false,group:0}],
		U20210907160704:[{ resource:"PNG202109071605253" ,x:168.1,y:637.5,originX:-187,originY:-209,scaleX:0.4556024968624115,scaleY:0.4556024968624115,sound:"",x2:168.1,y2:637.5,scaleX2:0.4556024968624115,scaleY2:0.4556024968624115,x3:168.1,y3:637.5,scaleX3:0.4556024968624115,scaleY3:0.4556024968624115 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:374,textHeight:418,textWidth2:374,textHeight2:418,textWidth3:374,textHeight3:418,chinaCode:false,group:0}],
		U20210907160705:[{ resource:"PNG202109071605254" ,x:885.1,y:637.5,originX:-187,originY:-209,scaleX:0.4556024968624115,scaleY:0.4556024968624115,sound:"",x2:885.1,y2:637.5,scaleX2:0.4556024968624115,scaleY2:0.4556024968624115,x3:885.1,y3:637.5,scaleX3:0.4556024968624115,scaleY3:0.4556024968624115 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:374,textHeight:418,textWidth2:374,textHeight2:418,textWidth3:374,textHeight3:418,chinaCode:false,group:0}],
		U20210907161027:[{ resource:"PNG20210907160638" ,x:151.55,y:306.15,originX:-50,originY:-50,scaleX:0.37561947107315063,scaleY:0.37561947107315063,sound:"",x2:151.55,y2:306.15,scaleX2:0.37561947107315063,scaleY2:0.37561947107315063,x3:151.55,y3:306.15,scaleX3:0.37561947107315063,scaleY3:0.37561947107315063 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:100,textHeight:100,textWidth2:100,textHeight2:100,textWidth3:100,textHeight3:100,chinaCode:undefined,group:0}],
		U20210907161035:[{ resource:"PNG20210907160638" ,x:397.55,y:306.15,originX:-50,originY:-50,scaleX:0.37561947107315063,scaleY:0.37561947107315063,sound:"",x2:397.55,y2:306.15,scaleX2:0.37561947107315063,scaleY2:0.37561947107315063,x3:397.55,y3:306.15,scaleX3:0.37561947107315063,scaleY3:0.37561947107315063 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:100,textHeight:100,textWidth2:100,textHeight2:100,textWidth3:100,textHeight3:100,chinaCode:undefined,group:0}],
		U20210907161043:[{ resource:"PNG20210907160638" ,x:643.55,y:306.15,originX:-50,originY:-50,scaleX:0.37561947107315063,scaleY:0.37561947107315063,sound:"",x2:643.55,y2:306.15,scaleX2:0.37561947107315063,scaleY2:0.37561947107315063,x3:643.55,y3:306.15,scaleX3:0.37561947107315063,scaleY3:0.37561947107315063 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:100,textHeight:100,textWidth2:100,textHeight2:100,textWidth3:100,textHeight3:100,chinaCode:undefined,group:0}],
		U20210907161046:[{ resource:"PNG20210907160638" ,x:861.55,y:306.15,originX:-50,originY:-50,scaleX:0.37561947107315063,scaleY:0.37561947107315063,sound:"",x2:861.55,y2:306.15,scaleX2:0.37561947107315063,scaleY2:0.37561947107315063,x3:861.55,y3:306.15,scaleX3:0.37561947107315063,scaleY3:0.37561947107315063 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:100,textHeight:100,textWidth2:100,textHeight2:100,textWidth3:100,textHeight3:100,chinaCode:undefined,group:0}],
		U20210907161100:[{ resource:"PNG20210907160638" ,x:168.55,y:532.15,originX:-50,originY:-50,scaleX:0.37561947107315063,scaleY:0.37561947107315063,passType:"ONE",sound:"",x2:168.55,y2:532.15,scaleX2:0.37561947107315063,scaleY2:0.37561947107315063,x3:168.55,y3:532.15,scaleX3:0.37561947107315063,scaleY3:0.37561947107315063 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:100,textHeight:100,textWidth2:100,textHeight2:100,textWidth3:100,textHeight3:100,chinaCode:undefined,group:0}],
		U202109071611001:[{ resource:"PNG20210907160638" ,x:414.55,y:532.15,originX:-50,originY:-50,scaleX:0.37561947107315063,scaleY:0.37561947107315063,passType:"ONE",sound:"",x2:414.55,y2:532.15,scaleX2:0.37561947107315063,scaleY2:0.37561947107315063,x3:414.55,y3:532.15,scaleX3:0.37561947107315063,scaleY3:0.37561947107315063 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:100,textHeight:100,textWidth2:100,textHeight2:100,textWidth3:100,textHeight3:100,chinaCode:undefined,group:0}],
		U202109071611002:[{ resource:"PNG20210907160638" ,x:660.55,y:532.15,originX:-50,originY:-50,scaleX:0.37561947107315063,scaleY:0.37561947107315063,passType:"ONE",sound:"",x2:660.55,y2:532.15,scaleX2:0.37561947107315063,scaleY2:0.37561947107315063,x3:660.55,y3:532.15,scaleX3:0.37561947107315063,scaleY3:0.37561947107315063 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:100,textHeight:100,textWidth2:100,textHeight2:100,textWidth3:100,textHeight3:100,chinaCode:undefined,group:0}],
		U202109071611003:[{ resource:"PNG20210907160638" ,x:878.55,y:532.15,originX:-50,originY:-50,scaleX:0.37561947107315063,scaleY:0.37561947107315063,passType:"ONE",sound:"",x2:878.55,y2:532.15,scaleX2:0.37561947107315063,scaleY2:0.37561947107315063,x3:878.55,y3:532.15,scaleX3:0.37561947107315063,scaleY3:0.37561947107315063 ,text:"" ,fontName:"Consolas" ,fontAlign:"center" ,fontSize:12 ,fontMaxSize:12 ,fontColor:0 ,letterSpacing:0,textWidth:100,textHeight:100,textWidth2:100,textHeight2:100,textWidth3:100,textHeight3:100,chinaCode:undefined,group:0}],
		end:0
	}
}
[Embed(source = "../Font/Consolas.ttf", fontName = "Consolas", embedAsCFF = "false",unicodeRange="")]public var Consolas:Class;
[Embed(source = "../Font/DFYuanStd-W5.otf", fontName = "DFYuanStd", embedAsCFF = "false",unicodeRange="")]public var DFYuanStd:Class;
[Embed(source = "../Font/FZXiYuan-M01.TTF", fontName = "FZXiYuan", embedAsCFF = "false",unicodeRange="")]public var FZXiYuan:Class;
[Embed(source = "../Font/AVGARDMI.TTF", fontName = "AVGARDMI", embedAsCFF = "false",unicodeRange="")]public var AVGARDMI:Class;
[Embed(source = "../Font/AVGARDM.TTF", fontName = "AVGARDM", embedAsCFF = "false",unicodeRange="")]public var AVGARDM:Class;
[Embed(source = "../Font/RBAvant_Garde_Medium_BT.ttf", fontName = "RBAvant", embedAsCFF = "false",unicodeRange="")]public var RBAvant:Class;
 private function createInstance():void{
 	Font.registerFont(Consolas);
		 Font.registerFont(DFYuanStd);
 	Font.registerFont(FZXiYuan);
 	Font.registerFont(AVGARDMI);
 	Font.registerFont(AVGARDM);
		Font.registerFont(RBAvant);
	_mIntroInstance = new GMTitleA0();
	_mToolBar = new GMToolBarA01();
}
