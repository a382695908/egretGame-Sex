/**
 *
 * @author 
 *
 */
class GameConst {
	public constructor() {
	}
    public static TitleList: string[][] = [
        ["1.你在看地图,或街上指示时,你会：","A.会有困难,而找人协助","B.把地图转过来,面对你要走的方向","C.没有任何困难"],
        ["2.你在准备一道做法复杂的菜时,一边正在播放收音机,还有朋友的来电.你会：","A.三件事同时进行","B.关掉收音机,但嘴巴和手都没有停","C.告诉朋友,你做好菜后马上回电话给他"],
        ["3.朋友要来参观你的新家,问你该怎麼走,你会：","A.画一张标示清楚的地图寄给他们,或是请别人替你说明该如何走","B.问她们有没有熟悉的地标,然后告诉他们该怎麼走","C.口头上告诉他们该怎麼走"],
        ["4.解释一个想法或概念时,你很可能会怎麼做：","A.会利用铅笔、纸和肢体语言","B.口头解释加上肢体语言","C.口头上清楚简单的解释"],
        ["5.看完一场很棒的电影回家后,你喜欢：","A.在脑海里回想电影的画面","B.把画面及角色的台词说出来","C.主要引述电影里的对话"],
        ["6.在电影院里你最喜欢坐在 ：","A.电影院的右边","B.不在意坐在哪里","C.电影院的左边"],
        ["7.一个朋友的机器出了问题,你会：","A.深表同情,并和他们讨论他们的感觉","B.介绍一个值得信任的人去修理","C.弄清楚它的构造,想帮他们修理好"],
        ["8.在不熟悉的地方,有人问你北方是哪个方向,你会：","A.坦白说你不知道","B.思考一会儿后,推测大约的方向","C.毫无困难的指出北方方向"],
        ["9.你找到一个停车位,可是空间很小,必须用倒车才能停进去,你会：","A.宁愿找另一个车位","B.试图小心的停进去","C.很顺利的倒出车停进去"],
        ["10.你在看电视时,这时电话响了,你会：","A.接电话,电视开著","B.把音量转小后才接电话","C.关掉电视,叫其他人安静后才接电话"],
        ["11.你听到一首新歌,是你喜欢的歌手唱的,通常你会：","A.听完后,你可以毫无困难的跟著唱","B.如果是首很简单的歌,听过后你可以跟著哼唱一小段","C.很难记得歌曲的旋律,但是你可以回想起部分歌词"],
        ["12.你对事情的结局如何会有强烈的预感,是藉著：","A.直觉","B.可靠的资讯和大胆的假设,才做出判断","C.事实统计数字和资料"],
        ["13.你忘了把钥匙时放在哪里,你会：","A.先做别的事等到自然想起为止","B.做别的事,但同时试著回想你把钥匙放在哪里","C.在心理回想刚刚做了哪些事,藉此想起放在何处"],
        ["14.你在饭店里,听到远处传来警报,你会：","A.指出声音来源","B.如果你够专心,可以指出声音来源","C.没办法知道声音来源"],
        ["15.你参加一个社交宴会时,有人向你介绍七八位新朋友,隔天你会：","A.可以轻易想起他们的长相","B.只能记得其中几个的长相","C.比较可能记住他们的名字"],
        ["16.你想去乡间度假时,但是你的伴侣想去海边的渡假胜地.你要怎麼说服他呢?","A.温柔地说：你喜欢乡间的悠闲,小孩和家人在乡间过得很快乐。","B.告诉他如果能去乡间渡假,你会感到很愉快,下次你会很乐意去海边","C.说出事实：乡间渡假区比较近,比较便宜,有规划适当的休闲设施"],
        ["17.规划日常生活时,通常你会：","A.列张清单,这样一来该做什麼事一目了然","B.考虑你该做哪些事","C.在心里想你会见到哪些人,会到哪些地方,以及你得处理哪些事"],
        ["18.一个朋友有了困难,他来找你商量,你会：","A.表示同情,还有你能理解他的困难","B.说事情并不如他想的严重,并加以解决","C.给他建议,或是合理的忠告,告诉 他该如何解决"],
        ["19.两个已婚的朋友有了外遇,你会如何发现：","A.你会很早就察觉","B.经过一段时间后才察觉","C.根本不会察觉"],
        ["20.你的生活态度为何?","A.交很多朋友,和周围的人和谐相处","B.友善的对待他人,但保持个人隐私","C.完成某个伟大目标,赢得别人的尊敬,名望及获得晋升"],
        ["21.如果有选择,你会喜欢什麼样的工作：","A.和可以相处的人一起工作","B.有其他同事,但也保有自己的空间","C.独自工作"],
        ["22.你喜欢读的书是：","A.小说,其他文学作品","B.报章杂志","C.非文学类,传记"],
        ["23.购物时你倾向：","A.常常是一时冲动,尤其是特殊物品","B.有个粗略的计画,可是心血来潮时也会买","C.读标签,比较价钱"],
        ["24.睡觉起床吃饭,你比较喜欢怎麼做：","A.随心所欲","B.依据一定的计画,但弹性很大","C.每天几乎有固定的时间"],
        ["25.你开始一个新的工作,认识许多新同事.其中一个打电话到家里找你,你会：","A.轻易的认出他的声音","B.谈了一会儿话后,才知道他是谁","C.无法从声音辨认他到底是谁"],
        ["26.和别人有争论时,什麼事会令你很生气：","A.沉默或是没有反应","B.他们不了解你的观 点","C.追根究底的问问题,或是提出质疑,或是评论"],
        ["27.你对学校的拼字测验以及作文课有何感觉?","A.觉得两项都很简单","B.其中一项还可以,另一项就不是很好","C.两项都不好"],
        ["28.碰到固定的舞步或是爵士舞时,你会：","A.听到音乐就会想起学过的舞步","B.只能跳一点点,大多想不起来","C.抓不准时间和旋律"],
        ["29.你擅长分辨动物的声音,并模仿动物的声音吗?","A.不太擅长","B.还可以","C.很棒"],
        ["30.一天结束后,你喜欢：","A.和朋友或家人谈谈你这一天过得如何","B.听别人谈他这一天过得如何","C.看报纸电视,不会聊天"]
    ];
    public static calculateScore(idx: number): number
    {
        if(idx == 0)
        {
            return 15;
        }else if(idx == 1)
        {
            return 5;
        }else if(idx == 2)
        {
            return -5;
        }
        return 0;
    }
    
    public static resultDes(score:number,curSex:number,curName:string):any[]
    {
        var xi:number = 0;
        var str:string = "亲爱的"+curName+":首先你是"+(curSex == 0 ? "男生":"女生")+",";
        if(curSex == 0)//男
        {
            if(score < 0)
            {
                xi = Math.floor(5*(-1*score)/150);
                xi = xi + 5;
                if(xi >= 7.25)
                {
                    str += ("变态系数尽然是:" + xi +"，怀疑你是不是真正意思上的男生了，你大脑构造与别人完全不同,同在地球上生活是你们唯一的共同点。");
                }else{
                    str += ("变态系数:" + xi + "，你大脑构造与别人完全不同,同在地球上生活是你们唯一的共同点。");
                }
            }else if(score <= 150){
                var ratio: number = score / 150;
                xi = Math.ceil(ratio*2.5);
                str += "恭喜!您属于正常人群，睾丸素分泌指数" + Math.ceil(100 * (1 - ratio)) +"%,有很强的逻辑观念、分析能力、说话技巧,很自律,也很有组织,不容易受到情绪的影响。";
            }else if(score <= 180)
            {
                xi = 5;
                str += "你的思考方式拥有两性的特质。你对男女都没有偏见,并在解决问题方面,反应会比较灵活,找出最佳的解决方法。不管男性或女性,你都可以成为他们的好友。";
            }else if(score <= 360){
                xi = 9.99;
                str += "哈哈哈，发现你是同性恋的机率为"+Math.ceil(20+(100*((score - 180)/180)))+"%。";
            }else 
            {
                xi = 10;
                str += "一般对纯变态没啥好说的！";
            }
        }else//女
        {
            if(score < 0)
            {
                xi = 10;
                str += "一般对纯变态没啥好说的！";
            }else if(score <= 150){
                xi = 9.99;
                str += "哈哈哈，发现你是同性恋的机率为" + Math.ceil(20+(100 * ((150 + score) / 150))) + "%。";
            }else if(score <= 180){
                xi = 5;
                str += "你的思考方式拥有两性的特质。你对男女都没有偏见,并在解决问题方面,反应会比较灵活,找出最佳的解决方法。不管男性或女性,你都可以成为他们的好友。";
            }else if(score < 300)
            {
                var ratio: number = (score - 180) / 120;
                xi = Math.ceil(ratio * 2.5);
                str += "恭喜!您属于正常人群，清纯女人味指数" + Math.ceil(100 * (1 - ratio)) + "%,富有创意,有音乐艺术方面的天份，你会凭直觉与感觉做决定，并擅长从很少的资讯判断问题。";
            }else 
            {
                xi = Math.floor(5 * (score-300) / 150);
                xi = xi + 5;
                if(xi >= 7.25) {
                    str += ("变态系数尽然是:" + xi + "，怀疑你是不是真正意思上的女生了，你大脑构造与别人完全不同,同在地球上生活是你们唯一的共同点。");
                } else {
                    str += ("变态系数:" + xi + "，你大脑构造与别人完全不同,同在地球上生活是你们唯一的共同点。");
                }
            }
        }
        return [xi,str];
        //1.多数男性的分数会分布在 0-180 分之间  多数女性的分数会分布在 150- 300 分之间。
//2.偏男性化的大脑,分数会低于150分.分数越接近0分就越男性化,睾丸素的分泌也越多
// .......他们有很强的逻辑观念、分析能力、说话技巧,很自律,也很有组织,不容易受到情绪的影响.要是女性得到很低的分数,那她很可能有女同性恋的倾向。
//3.分数高过180分的,就是很女性化的人.分数越高,大脑就越女性化。
//富有创意,有音乐艺术方面的天份.他们会凭直觉与感觉做决定,并擅长从很少的资讯判断问题.分数高过180分的男人,他们是同性恋的机率也越高。
//4.分数低于0分的男性或高于300分的女性,他们大脑的构造是完全不同的,同在地球上生活是他们唯一的共同点。
//5.分数在150分到180分之间的人,他的思考方式拥有两性的特质..他对男女都没有偏见,并在解决问题方面,反应会比较灵活,找出最佳的解决方法.不管男性或女性,他都可以成为他们的好友。
    }
}
