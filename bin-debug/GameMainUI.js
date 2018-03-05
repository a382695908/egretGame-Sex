/**
 *
 * @author
 *
 */
var GameMainUI = (function (_super) {
    __extends(GameMainUI, _super);
    function GameMainUI() {
        _super.call(this);
        this.m_Score = 0;
        this.m_curIdx = -1;
        this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
        this.skinName = "resource/GameMainSkin.exml";
    }
    var d = __define,c=GameMainUI,p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    p.onComplete = function () {
        this.initUI();
        this.addListener();
    };
    p.initGameData = function () {
        this.startGroup.visible = false;
        this.gameGroup.visible = true;
        this.resultGroup.visible = false;
        this.m_Score = 0;
        this.m_curIdx = -1;
        this.NextTitle(null);
    };
    p.initUI = function () {
        var exml = "\n            <e:Skin xmlns:e=\"http://ns.egret.com/eui\" states=\"up,down\" width=\"350\" height=\"65\"> \n            <e:Label text=\"{data}\" textColor.down=\"0x43CD6A\" textColor.up=\"0x666666\" horizontalCenter=\"0.5\" \n            verticalCenter=\"0\" lineSpacing=\"2\" width=\"350\" size=\"24\" stroke=\"2\" strokeColor=\"0\"/> \n            </e:Skin>";
        this.list.dataProvider = new eui.ArrayCollection(["item1", "item2", "item3"]);
        this.list.itemRendererSkinName = exml;
        //        this.selectedIndex = 1;//设置默认选中项
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChange, this);
        this.startGroup.visible = true;
        this.gameGroup.visible = false;
        this.resultGroup.visible = false;
        this.shareGroup.visible = false;
        this.rankGroup.visible = false;
        this.nameTxt.text = "请输入您的名字";
        this.man.selected = true;
        this.curSex = 0;
    };
    p.onChange = function (e) {
        //获取点击消息
        //        console.log(this.list.selectedItem,this.list.selectedIndex);
    };
    p.addListener = function () {
        this.Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.NextTitle, this);
        this.start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
        this.man.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);
        this.woman.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);
        this.nameTxt.addEventListener(egret.TextEvent.FOCUS_IN, this.FocusIn, this);
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
        this.submitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubmit, this);
        this.rankListBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetRankList, this);
        this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.MoreGame, this);
        this.shareGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchShareGroup, this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseRank, this);
    };
    p.onCloseRank = function (e) {
        this.rankGroup.visible = false;
    };
    p.onGetRankList = function (e) {
        egret_4399_h5api.getRank(this.RankList, this);
    };
    p.onSubmit = function (e) {
        egret_4399_h5api.submitScore(this.m_Score, this.SubmitCallBack, this);
    };
    p.SubmitCallBack = function (obj) {
        console.log("代码:" + obj.code + ",消息:" + obj.message + ",数据:" + obj.data);
        if (obj.code == 10000) {
            console.log("上传成功");
        }
        else {
            console.log("上传失败");
        }
    };
    p.onStart = function (e) {
        if (this.nameTxt.text == "请输入您的名字") {
            NoticeUntils.showNotice("请输入您的名字！");
        }
        else if (this.nameTxt.text == "") {
            this.nameTxt.text = "请输入您的名字";
            NoticeUntils.showNotice("您输入的名字为空啦！");
        }
        else {
            this.curName = this.nameTxt.text;
            this.initGameData();
        }
    };
    p.RankList = function (obj) {
        //        obj.code = 10000;
        //        obj.data = [{ score: 1000,rank: 1 },{ score: 900,rank: 2 },{ score: 800,rank: 3 },{ score: 700,rank: 4 },{ score: 160,rank: 5 },
        //            { score: 1000,rank: 1 },{ score: 900,rank: 2 },{ score: 800,rank: 3 },{ score: 700,rank: 4 },{ score: 160,rank: 5 },
        //            { score: 1000,rank: 1 },{ score: 900,rank: 2 },{ score: 800,rank: 3 },{ score: 700,rank: 4 },{ score: 160,rank: 5 },
        //            { score: 1000,rank: 1 },{ score: 900,rank: 2 },{ score: 800,rank: 3 },{ score: 700,rank: 4 },{ score: 160,rank: 5 }];
        //        console.log("代码:" + obj.code + ",消息:" + obj.message + ",数据:" + obj.data);
        if (obj.code == 10000) {
            this.rankGroup.visible = true;
            var exml = "\n            <e:Skin xmlns:e=\"http://ns.egret.com/eui\" states=\"up,down\" width=\"280\" height=\"30\"> \n            <e:Label text=\"{data}\" textColor=\"0xffffff\" textAlign=\"left\"\n            lineSpacing=\"1\" x=\"40\" y=\"5\" width=\"240\" size=\"20\" stroke=\"2\" strokeColor=\"0\"/> \n            </e:Skin>";
            this.rankList.itemRendererSkinName = exml;
            console.log("获取成功");
            var data = obj.data;
            var dataShowArr = [];
            for (var i = 0; i < data.length; i++) {
                console.log("排名:" + data[i].rank + "， 系数:" + data[i].score);
                dataShowArr.push("排名:" + data[i].rank + "， 系数:" + data[i].score);
            }
            this.rankList.dataProvider = new eui.ArrayCollection(dataShowArr);
            this.myScroller.viewport = this.rankList;
        }
        else {
            console.log("获取失败");
        }
    };
    p.radioChangeHandler = function (evt) {
        this.curSex = evt.target.value;
        egret.log(evt.target.value);
    };
    p.FocusIn = function (e) {
        this.nameTxt.text = "";
    };
    p.NextTitle = function (e) {
        if (this.m_curIdx != -1 && this.list.selectedIndex == -1) {
            NoticeUntils.showNotice("请你选择一个答案！");
            return;
        }
        this.m_Score += GameConst.calculateScore(this.list.selectedIndex);
        console.log(this.m_Score);
        if (this.txt.text == "提交") {
            this.updateResult();
            return;
        }
        this.m_curIdx++;
        this.updateTitle();
    };
    p.updateResult = function () {
        this.gameGroup.visible = false;
        this.resultGroup.visible = true;
        var resultArr = GameConst.resultDes(this.m_Score, this.curSex, this.curName);
        this.resultTxt.text = resultArr[1];
        this.scoreTxt.text = "变态系数：" + resultArr[0];
    };
    p.updateTitle = function () {
        var data = GameConst.TitleList[this.m_curIdx];
        this.titile.text = data[0];
        data.splice(0, 1);
        this.list.dataProvider = new eui.ArrayCollection(data);
        this.list.selectedIndex = -1;
        if (this.m_curIdx == 29) {
            this.txt.text = "提交";
        }
        else {
            this.txt.text = "下一题";
        }
        this.progTxt.text = "进度：" + (this.m_curIdx + 1) + "/30";
    };
    p.onTouchShareGroup = function (e) {
        this.shareGroup.visible = false;
    };
    p.onShare = function (e) {
        this.shareGroup.visible = true;
    };
    p.MoreGame = function (e) {
        egret_4399_h5api.moreGame();
    };
    return GameMainUI;
}(eui.Component));
egret.registerClass(GameMainUI,'GameMainUI');
//# sourceMappingURL=GameMainUI.js.map