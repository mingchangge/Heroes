var type=true;  //控制棍子  全局变量控制着下一级棍子的再生
var index=0;   //控制墙    全局变量控制着下一级墙的再生
var level=1;
var info="游戏说明：<br/>1、该游戏为一款好玩的闯关挑战类游戏，可以锻炼玩家的判断力，提高玩家的敏捷思维能力。<br/>2、可以选择闯关模式或者挑战模式开始游戏。进入闯关模式后点击上方按钮可选择已解锁的关卡。<br/>3、闯关模式总共有十个关卡，每通过一个关卡，游戏难度会逐渐增大。如果玩家玩通关闯关模式，会获得W币奖励。<br/>4、挑战模式会计算积分，玩家可以在线存档，也可以提交自己的积分来查看自己的排行。<br/>5、本游戏引入了金币机制，即W币，初始金币为3个，玩家可以通过每日签到(+1 W币，连续签到从第二天起+2 W币)和完成每日的挑战任务(随机+7或8或9 W币)或玩通关闯关模式(随机+10或11或12 W币)来获得W币，W币可以用来购买道具。本游戏目前含有四种道具，分别是原地复活道具、水波特效道具、蝴蝶跟随鼠标特效道具和下雪特效道具。原地复活道具只可以在挑战模式使用，其它三种道具均为特效道具，每次购买后有七天使用期限，七天后需再次购买才可继续使用。";
var success=[
    '勇敢坚毅真正之才智乃刚毅之志向。 —— 拿破仑',
    '志向不过是记忆的奴隶，生气勃勃地降生，但却很难成长。 —— 莎士比亚',
    '骏马是跑出来的，强兵是打出来的。',
    '只有登上山顶，才能看到那边的风光。',
    '如果惧怕前面跌宕的山岩，生命就永远只能是死水一潭。',
    '平时没有跑发卫千米，占时就难以进行一百米的冲刺。',
    '梯子的梯阶从来不是用来搁脚的，它只是让人们的脚放上一段时间，以便让别一只脚能够再往上登。',
    '没有激流就称不上勇进，没有山峰则谈不上攀登。',
    '真正的才智是刚毅的志向。 —— 拿破仑',
    '山路曲折盘旋，但毕竟朝着顶峰延伸。',
    '只有创造，才是真正的享受，只有拚搏，才是充实的生活。',
    '敢于向黑暗宣战的人，心里必须充满光明。',
    '种子牢记着雨滴献身的叮嘱，增强了冒尖的勇气。',
    '自然界没有风风雨雨，大地就不会春华秋实。',
    '只会幻想而不行动的人，永远也体会不到收获果实时的喜悦。',
    '勤奋是你生命的密码，能译出你一部壮丽的史诗。',
    '对于攀登者来说，失掉往昔的足迹并不可惜，迷失了继续前时的方向却很危险。',
    '奋斗者在汗水汇集的江河里，将事业之舟驶到了理想的彼岸。',
    '忙于采集的蜜蜂，无暇在人前高谈阔论。',
    '勇士搏出惊涛骇流而不沉沦，懦夫在风平浪静也会溺水。'
];
var lose=['志在峰巅的攀登者，不会陶醉在沿途的某个脚印之中。',
    '海浪为劈风斩浪的航船饯行，为随波逐流的轻舟送葬。',
    '人生最重要的一点是，永远不要迷失自己。',
    '一个人承受孤独的能力有多大，他的能力就有多大。',
    '实力塑造性格，性格决定命运。',
    '普通人成功并非靠天赋，而是靠把寻常的天资发挥到不寻常的高度。',
    '对于强者，要关注他们的灵魂，对于弱者，他关注他们的生存。',
    '积极的人在每一次忧患中都看到一个机会，而消极的人则在每个机会都看到某种忧患。',
    '成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。',
    '当你感到悲哀痛苦时，最好是去学些什么东西。学习会使你永远立于不败之地。',
    '有的人一生默默无闻，有的人一生轰轰烈烈，甚至千古流芳，为什么会这样？因为默默无闻的人只是满足于现状，而不去想怎么轰轰烈烈过一生，不要求自己，去做，去行动，怎么能够成功？',
    '人性最可怜的就是：我们总是梦想着天边的一座奇妙的玫瑰园，而不去欣赏今天就开在我们窗口的玫瑰。',
    '在人生的道路上，即使一切都失去了，只要一息尚存，你就没有丝毫理由绝望。因为失去的一切，又可能在新的层次上复得。',
    '没有一劳永逸的开始；也没有无法拯救的结束。人生中，你需要把握的是：该开始的，要义无反顾地开始；该结束的，就干净利落地结束。',
    '生命的奖赏远在旅途终点，而非起点附近。我不知道要走多少步才能达到目标，踏上第一千步的时候，仍然可能遭到失败。但我不会因此放弃，我会坚持不懈，直至成功！',
    '不要认为只要付出就一定会有回报，这是错误的。学会有效地工作，这是经营自己强项的重要课程。',
    '苦心人天不负，卧薪尝胆，三千越甲可吞吴。有志者事竞成，破釜沉舟，百二秦川终属楚。',
    '生命本身是一个过程，成功与失败只是人生过程中一些小小的片段，若果把生命与成功或失败联系在一起，生命将失去本身该有的意义。',
    '我们不要哀叹生活的不幸，诅咒命运的不公。在命运面前，我们要做强者，掐住命运的咽喉，叩问命运，改变命运。',
    '努力和效果之间，永远有这样一段距离。成功和失败的唯一区别是，你能不能坚持挺过这段无法估计的距离。'];
function randomSuccess(){
    return success[parseInt(Math.random()*success.length)];
}
/*<div class="dialog">
 <p></p>
 <p class="dialog-btn">
 <a href="javascript:void(0)">下一关</a>
 <a href="javascript:void(0)"></a>
 </p>
 */
//
function createSuccess(){
    if($("#divSuccess")[0]){
        $("#divSuccess p:eq(0)").html(randomSuccess());
        $("#divSuccess").show();
    }else{
        var div=$("<div id='divSuccess'></div>");
        $("body").append(div);
        div.addClass("dialog");
        var p1=$("<p></p>");
        div.append(p1);
        p1.html(randomSuccess());
        var p2=$("<p></p>");
        div.append(p2);
        p2.addClass("dialog-btn");
        var a=$("<a></a>");
        //if( $(".man img").attr("class")=="rotate"){
        //    p2.append(a);
        //    a.attr("id","play-agin");
        //    a.attr("href","javascript:void(0)");
        //    a.html("在玩一次");
        //}else{
            p2.append(a);
            a.attr("id","sucess");
            a.attr("href","javascript:void(0)");
            a.html("下一关");

        //}

    }

}
function randomLose(){
    return lose[parseInt(Math.random()*lose.length)];
}
function createLose(){
    if($("#divFailure")[0]){
        $("#divFailure p:eq(0)").html(randomLose());
        $("#divFailure").show();
    }else{
        var lose=$("<div id='divFailure'></div>");
        $("body").append(lose);
        lose.addClass("dialog");
        var p1=$("<p></p>");
        lose.append(p1);
        p1.html(randomLose());
        var p2=$("<p></P>");
        lose.append(p2);
        p2.addClass("dialog-btn");
        var a=$("<a></a>");
        p2.append(a);
        a.addClass("play-agin");
        a.html("再玩一次");
        a.attr({"id":"play-agin","href":"javascript:void(0)"});
    }
}
//.dialog p.dialog-btn a:eq(0)
$(function(){
    $("body").on("click","#play-agin",function(){
        //$(".man").removeClass("top");
        $(".container").css("left","0px");
        $(".man img").removeClass();
        $(".stick").css("width","0px").removeClass("stickDown");
        $(this).parents(".dialog").hide();
        initData();
    });
    $("body").on("click","#sucess",function(){
        var wW=$(".well").first().width();
        var mW=$(".man").width();
        $(".container").css("left","0px");
        $(".man").css("left",(wW-mW)+"px");
        $(".stick").css("left",wW+"px");
        $(this).parents(".dialog").hide();
        level++;
        $(".set-text .play-title").html("关卡"+level);
        randomWell(level+1);
        initData();
        changeBG();
    });
//    随机墙
    function randomWell(num){
        $(".well-box").empty();
        var ranLeft=0;
        var well=$("<div></div>");
        //$(".well-box").append(well);
        //well.addClass("well");
        //well.attr("style","width:100px;left:"+ranLeft+"px");
        for(var i=0;i<num;i++){
            well=$("<div></div>");
            $(".well-box").append(well);
            well.addClass("well");
            var max=100;
            var min=50;
            var ranWidth=parseFloat(Math.random()*(max-min+1)+min);
            max=$(".container").offset().top-100;
            min=10;
            var ran=parseFloat(Math.random()*(max-min+1)+min);
            well.attr("style","width:"+ranWidth+"px;left:"+ranLeft+"px");
            ranLeft+=ranWidth+ran;
        }
    }
    randomWell(2);
    initData();
    function initData(){
        index=0;
        type=true;
        var wW=$(".well").first().width();
        var mW=$(".man").width();
        $(".stick").css("left",wW+"px");
        $(".man").css("left",(wW-mW)+"px");
    }
    function changeBG(){
        var num=parseInt(Math.random()*20+1);
        $("body").removeClass().addClass("bg"+num);
    }
});
