/**
 *
 * @author 
 *
 */
class NoticeUntils {
    public static stage;
    public static stageHei;
    public static stageWid;
    
	public constructor() {
    	
	}
    private static _instance: NoticeUntils;
    static get instance(): NoticeUntils {
        return this._instance || (this._instance = new NoticeUntils);
    }
    
    public static showNotice(content:string):void
    {
        var txt = new eui.Label;
        txt.size = 20;
        txt.text = content;
        txt.textColor = 0xff0000;
        this.stage.addChild(txt);
        txt.x = (this.stageWid - txt.textWidth)/2;
        txt.y = this.stageHei - 70;
        var m_tween = egret.Tween.get(txt);
        m_tween.to({y: this.stageHei/2,alpha:0},1500).call( function()
            { 
                txt.parent.removeChild(txt);
            } );
    }
    
    public static showNoticeByClick(content: string): void {
        var txt = new eui.Label;
        txt.size = 22;
        txt.stroke = 4;
        txt.strokeColor = 0x000000;
        txt.text = content;
        txt.textColor = 0xff0000;
        this.stage.addChild(txt);
        txt.x = (this.stageWid - txt.textWidth) / 2;
        txt.y = this.stageHei/2 + 100;
        var m_tween = egret.Tween.get(txt);
        m_tween.to({ y: this.stageHei / 2,alpha: 0 },1500).call(function() {
            txt.parent.removeChild(txt);
        });
    }
}
