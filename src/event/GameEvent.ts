/**
 *
 * @author 
 *
 */
class GameEvent extends egret.Event{
    public static GAME_COLSE: string = "GAME_COLSE";
    public static GAME_SURE: string = "GAME_SURE";
    public static GAME_BACK: string = "GAME_BACK";
    
    /**
     * 数据
     */
    public params:any;
    public constructor(type:string, param:any = null,bubbles:boolean=false, cancelable:boolean=false)
    {
        super(type,bubbles,cancelable);
        this.params = param;
    }
}
