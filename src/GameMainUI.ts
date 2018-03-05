/**
 *
 * @author 
 *
 */
class GameMainUI extends eui.Component{
    public startGroup:eui.Group;
    public nameTxt: eui.EditableText;
    public start: eui.Button;
    public man: eui.RadioButton;
    public woman: eui.RadioButton;
    
    public gameGroup:eui.Group;
    public list:eui.List;
    public progTxt:eui.Label;
    public titile:eui.Label;
    public Btn:eui.Button;
    public txt:eui.Label;
    public resultGroup:eui.Group;
    public resultTxt:eui.Label;
    public scoreTxt:eui.Label;
    public moreBtn: eui.Button;
    public shareBtn: eui.Button;
    public shareGroup:eui.Group;
    public submitBtn:eui.Button;
    public rankListBtn:eui.Button;
    public rankGroup:eui.Group;
    public myScroller:eui.Scroller;
    public rankList:eui.List;
    public closeBtn:eui.Button;
    
    private m_Score = 0;
    private m_curIdx = -1;
    private curSex;
    private curName;
    
	public constructor() {
    	super();
        this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this);
        this.skinName = "resource/GameMainSkin.exml";
	}
	
    protected createChildren() {
        super.createChildren();
    }
    private onComplete(): void {
       
        this.initUI();
        this.addListener();
    }
    
    private initGameData():void{
        this.startGroup.visible = false;
        this.gameGroup.visible = true;
        this.resultGroup.visible = false;
        this.m_Score = 0;
        this.m_curIdx = -1;
        this.NextTitle(null);
    }
    
    public initUI():void{
         var exml = `
            <e:Skin xmlns:e="http://ns.egret.com/eui" states="up,down" width="350" height="65"> 
            <e:Label text="{data}" textColor.down="0x43CD6A" textColor.up="0x666666" horizontalCenter="0.5" 
            verticalCenter="0" lineSpacing="2" width="350" size="24" stroke="2" strokeColor="0"/> 
            </e:Skin>`;
         this.list.dataProvider = new eui.ArrayCollection(["item1","item2","item3"]);
        this.list.itemRendererSkinName = exml;
//        this.selectedIndex = 1;//设置默认选中项
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onChange,this);
        
        this.startGroup.visible = true;
        this.gameGroup.visible = false;
        this.resultGroup.visible = false;
        this.shareGroup.visible = false;
        this.rankGroup.visible = false;
        this.nameTxt.text = "请输入您的名字";
        this.man.selected = true;
        this.curSex = 0;
    }
     private onChange(e:eui.PropertyEvent):void{
        //获取点击消息
//        console.log(this.list.selectedItem,this.list.selectedIndex);
         
    }
    
    public addListener(): void {
        this.Btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.NextTitle,this);
        this.start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStart,this);
        this.man.addEventListener(eui.UIEvent.CHANGE,this.radioChangeHandler,this);
        this.woman.addEventListener(eui.UIEvent.CHANGE,this.radioChangeHandler,this);

        this.nameTxt.addEventListener(egret.TextEvent.FOCUS_IN,this.FocusIn,this);
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShare,this);
        this.submitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSubmit,this);
        this.rankListBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGetRankList,this)

        this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.MoreGame,this)
        this.shareGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchShareGroup,this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseRank,this);
    }
    
    private onCloseRank(e:egret.TouchEvent):void{
        this.rankGroup.visible = false;
    }
    
    private onGetRankList(e:egret.TouchEvent):void
    {
        egret_4399_h5api.getRank(this.RankList,this);
    }
    
    private onSubmit(e: egret.TouchEvent): void {
        egret_4399_h5api.submitScore(this.m_Score,this.SubmitCallBack,this);
    }
    
    private SubmitCallBack(obj):void
    {
        console.log("代码:" + obj.code + ",消息:" + obj.message + ",数据:" + obj.data);
        if(obj.code == 10000) {
            console.log("上传成功");
        } else {
            console.log("上传失败");
        }
    }
    
    private onStart(e: egret.TouchEvent): void {
        if(this.nameTxt.text == "请输入您的名字") {
            NoticeUntils.showNotice("请输入您的名字！");
        } else if(this.nameTxt.text == "") {
            this.nameTxt.text = "请输入您的名字";
            NoticeUntils.showNotice("您输入的名字为空啦！");
        } else {
            this.curName = this.nameTxt.text;
            this.initGameData();
            //debug
//            egret_4399_h5api.getRank(this.RankList,this);
        }
    }
    
    private RankList(obj):void
    {
//        obj.code = 10000;
//        obj.data = [{ score: 1000,rank: 1 },{ score: 900,rank: 2 },{ score: 800,rank: 3 },{ score: 700,rank: 4 },{ score: 160,rank: 5 },
//            { score: 1000,rank: 1 },{ score: 900,rank: 2 },{ score: 800,rank: 3 },{ score: 700,rank: 4 },{ score: 160,rank: 5 },
//            { score: 1000,rank: 1 },{ score: 900,rank: 2 },{ score: 800,rank: 3 },{ score: 700,rank: 4 },{ score: 160,rank: 5 },
//            { score: 1000,rank: 1 },{ score: 900,rank: 2 },{ score: 800,rank: 3 },{ score: 700,rank: 4 },{ score: 160,rank: 5 }];
//        console.log("代码:" + obj.code + ",消息:" + obj.message + ",数据:" + obj.data);
        if(obj.code == 10000) {
            this.rankGroup.visible = true;
            var exml = `
            <e:Skin xmlns:e="http://ns.egret.com/eui" states="up,down" width="280" height="30"> 
            <e:Label text="{data}" textColor="0xffffff" textAlign="left"
            lineSpacing="1" x="40" y="5" width="240" size="20" stroke="2" strokeColor="0"/> 
            </e:Skin>`;
            this.rankList.itemRendererSkinName = exml;
            console.log("获取成功");
            var data = obj.data;
            var dataShowArr:string[] = [];
            for(var i = 0;i < data.length;i++) {
                console.log("排名:" + data[i].rank+"， 系数:" + data[i].score);
                dataShowArr.push("排名:" + data[i].rank + "， 系数:" + data[i].score);
            }
            this.rankList.dataProvider = new eui.ArrayCollection(dataShowArr);
            this.myScroller.viewport = this.rankList;
            
        } else {
            console.log("获取失败");
        }
    }
    
    private radioChangeHandler(evt: eui.UIEvent): void {
        this.curSex = evt.target.value;
        egret.log(evt.target.value);
    }

    private FocusIn(e: egret.TextEvent): void {
        this.nameTxt.text = "";
    }
    
    private NextTitle(e:egret.TouchEvent):void{
        if(this.m_curIdx != -1 && this.list.selectedIndex == -1) {
            NoticeUntils.showNotice("请你选择一个答案！");
            return;
        }
       
        this.m_Score += GameConst.calculateScore(this.list.selectedIndex); 
        console.log(this.m_Score);
        if(this.txt.text == "提交") {
            this.updateResult();
            return;
        }
        
        this.m_curIdx++;
        this.updateTitle();
    }
    private updateResult(): void {
        this.gameGroup.visible = false;
        this.resultGroup.visible = true;
        
        var resultArr:any[] = GameConst.resultDes(this.m_Score,this.curSex,this.curName);
        this.resultTxt.text = resultArr[1];
        this.scoreTxt.text = "变态系数：" + resultArr[0];
    }
   
    private updateTitle():void
    {
        var data:string[] = GameConst.TitleList[this.m_curIdx];
        this.titile.text = data[0];
        data.splice(0,1);
        this.list.dataProvider = new eui.ArrayCollection(data);
        this.list.selectedIndex = -1;
        
        if(this.m_curIdx == 29) {
            this.txt.text = "提交";
        }else{
            this.txt.text = "下一题";
        }
        this.progTxt.text = "进度："+(this.m_curIdx+1)+"/30";
    }
    
    private onTouchShareGroup(e: egret.TouchEvent): void {
        this.shareGroup.visible = false;
    }

    private onShare(e: egret.TouchEvent): void {
        this.shareGroup.visible = true;
    }
    private MoreGame(e: egret.TouchEvent): void {
        egret_4399_h5api.moreGame();
    }
}
