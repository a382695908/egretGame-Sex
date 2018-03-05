/**
 *
 * @author
 *
 */
var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent(type, param, bubbles, cancelable) {
        if (param === void 0) { param = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
        this.params = param;
    }
    var d = __define,c=GameEvent,p=c.prototype;
    GameEvent.GAME_COLSE = "GAME_COLSE";
    GameEvent.GAME_SURE = "GAME_SURE";
    GameEvent.GAME_BACK = "GAME_BACK";
    return GameEvent;
}(egret.Event));
egret.registerClass(GameEvent,'GameEvent');
//# sourceMappingURL=GameEvent.js.map