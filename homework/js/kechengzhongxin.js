function Course(name,classify,courseArr )
{
    this.name=name;
    this.classify=classify;
    this.course=courseArr;

}
var ke1=[["HTML+CSS基础课程","评分9.0","2819人关注"],["网页布局基础","评分8.0","249人关注"],["如何用CSS进行网页布局","评分9.1","289人关注"]];
var keArr1=new Course("HTML/CSS","前端开发",ke1);

var ke2=[["JavaScript入门篇","评分9.0","289人关注"],["JavaScript进阶篇","评分9.2","289人关注"],["JavaScript深入浅出","评分9.5","289人关注"]];
var keArr2=new Course("JavaScript","前端开发",ke2);

var ke3=[["十天精通CSS3","评分8.6","289人关注"],["CSS3实现漂亮ToolTips效果","评分9.0","289人关注"],["CSS3绚丽照片墙","评分9.0","289人关注"]];
var keArr3=new Course("CSS3","前端开发",ke3);

var ke4=[["HTML5之元素与标签结构","评分9.0","289人关注"],["HTML5音乐可视化","评分9.0","289人关注"],["HTML5离线应用实战演练","评分9.0","289人关注"]];
var keArr4=new Course("Html5","前端开发",ke4);

var ke5=[["jQuery基础篇","评分9.0","289人关注"],["jQuery基础DOM篇","评分9.0","289人关注"],["jQuery基础事件篇","评分9.0","289人关注"]];
var keArr5=new Course("jQuery","前端开发",ke5);

var ke6=[["jQuery基础篇","评分9.0","289人关注"],["AngularJS实战","评分9.0","289人关注"],["AngularJS表单验证","评分9.0","289人关注"]];
var keArr6=new Course("AngularJS","前端开发",ke6);

var ke7=[["Node.js基础（一）","评分9.0","289人关注"],["Node.js基础（二）","评分9.0","289人关注"],["node建站攻略","评分9.0","289人关注"]];
var keArr7=new Course("Node.js","前端开发",ke7);

var ke8=[["玩转Bootstrap（基础）","评分9.0","289人关注"],["基于bootstrap的网页开发","评分9.0","289人关注"],["响应式布局","评分9.0","289人关注"]];
var keArr8=new Course("Bootstrap","前端开发",ke8);

var ke9=[["Hello，移动WEB","评分9.0","289人关注"],["移动端的WEB相册","评分9.0","289人关注"],["移动优先的跨终端 Web","评分9.0","289人关注"]];
var keArr9=new Course("WebApp","前端开发",ke9);

var ke10=[["前端开发工具技巧介绍—DW篇","评分9.0","289人关注"],["前端开发工具技巧介绍—Sublime篇","评分9.0","289人关注"],["前端工程师必备的PS技能—切图篇","评分9.0","289人关注"]];
var keArr10=new Course("前端工具","前端开发",ke10);

var ke11=[["PHP入门篇","评分9.0","289人关注"],["PHP进阶篇","评分9.0","289人关注"],["PHP开发APP接口","评分9.0","289人关注"]];
var keArr11=new Course("PHP","后端开发",ke11);

var ke12=[["Java入门第一季","评分9.0","289人关注"],["Java入门第二季","评分9.0","289人关注"],["Java入门第三季","评分9.0","289人关注"]];
var keArr12=new Course("JAVA","后端开发",ke12);

var ke13=[["C语言入门","评分9.0","289人关注"],["Linux C语言结构体","评分9.0","289人关注"],["Linux C语言指针与内存","评分9.0","289人关注"]];
var keArr13=new Course("C","后端开发",ke13);

var ke14=[["C++远征之起航篇","评分9.0","289人关注"],["C++远征之离港篇","评分9.0","289人关注"],["C++远征之模板篇","评分9.0","289人关注"]];
var keArr14=new Course("C++","后端开发",ke14);

var ke15=[["Android的第一门课（入门篇）","评分9.0","289人关注"],["Android中的Http通信","评分9.0","289人关注"],["与Android Studio的第一次亲密接触","评分9.0","289人关注"]];
var keArr15=new Course("Android","移动开发",ke15);

var ke16=[["iOS基础入门之Foundation框架初体验","评分9.0","289人关注"],["iOS基础教程之界面初体验","评分9.0","289人关注"],["iOS-动画入门","评分9.0","289人关注"]];
var keArr16=new Course("iOS","移动开发",ke16);

var ke17=[["Unity3D快速入门","评分9.0","289人关注"],["Unity3D五子棋大战","评分9.0","289人关注"],["Unity 3D游戏开发之脚本系统","评分9.0","289人关注"]];
var keArr17=new Course("Unity 3D","移动开发",ke17);

var ke18=[["Cocos2d-x游戏开发初体验-C++篇","评分9.0","289人关注"],["Cocos2d-x游戏开发基础之Lua基础篇","评分9.0","289人关注"],["Cocos2d-x初体验之Lua篇","评分9.0","289人关注"]];
var keArr18=new Course("Cocos2d-x","移动开发",ke18);

var ke19=[["PS入门教程——新手过招","评分9.0","289人关注"],["PS大神通关教程","评分9.0","289人关注"],["PS入门基础-魔幻调色","评分9.0","289人关注"]];
var keArr19=new Course("Photoshop","图像处理",ke19);

var ke20=[["Maya3D建模攻略","评分9.0","289人关注"],["Maya-跟我学做变形金刚CG短片","评分9.0","289人关注"],["Maya基础","评分9.0","289人关注"]];
var keArr20=new Course("Maya","图像处理",ke20);

var ke21=[["Premiere魔术——图片变电影","评分9.0","289人关注"],["拍摄与剪辑“怀孕日记”","评分9.0","289人关注"],["教你玩转后期剪辑Premiere","评分9.0","289人关注"]];
var keArr21=new Course("Premiere","图像处理",ke21);

var ke22=[["与MySQL的零距离接触","评分9.0","289人关注"],["MySQL5.7版本新特性","评分9.0","289人关注"],["MySQL开发技巧","评分9.0","289人关注"]];
var keArr22=new Course("MySQL","数据处理",ke22);

var ke23=[["mongoDB入门篇","评分9.0","289人关注"],["MongoDB 2014北京大会","评分9.0","289人关注"],["MongoDB读写分离的适用性","评分9.0","289人关注"]];
var keArr23=new Course("MongoDB","数据处理",ke23);

var ke24=[["R语言入门","评分9.0","289人关注"],["R语言基础","评分9.0","289人关注"],["走近大数据之Hive入门","评分9.0","289人关注"]];
var keArr24=new Course("大数据","数据处理",ke24);

var ke25=[["OpenStack基础","评分9.0","289人关注"],["云安全的架构设计与实践之旅","评分9.0","289人关注"],["在线分布式数据库原理与实践","评分9.0","289人关注"]];
var keArr25=new Course("云计算","数据处理",ke25);

var keArr=[keArr1,keArr2,keArr3,keArr4,keArr5,keArr6,keArr7,keArr8,keArr9,keArr10,keArr11,keArr12,
keArr13,keArr14,keArr15,keArr16,keArr17,keArr18,keArr19,keArr20,keArr21,keArr22,keArr23,keArr24,keArr25];



window.onload=function ()
{

    console.log(keArr);
    //方向类的点击事件
    var oDirection=document.getElementById("cont1"); //获取方向的节点
    var index; //下标
    /*var oClassify_span=document.getElementsByClassName("con1-span");*/
    var oClassify=document.getElementById("con1-1-2");
    //console.log(oClassify);
    for(index=1;index<oDirection.children.length;index++){
        oDirection.children[index].idx=index;//添加属性值
        oDirection.children[index].onclick = function () {
            var chang=oClassify.children.length; //oClassify的长度
            for(var i=1;i<oDirection.children.length;i++){
                oDirection.children[i].children[0].style.backgroundColor="white";
                oDirection.children[i].children[0].style.color="black";
            }
            if(chang>2)  //判断是否要清空 --分类内容
            {
                for(var j=2;j<chang;j++)
                {
                    /*oClassify_span[j-2].innerHTML="";*/
                    oClassify.removeChild(oClassify.children[2]);
                }
            }
            oDirection.children[this.idx].children[0].style.backgroundColor="black";
            oDirection.children[this.idx].children[0].style.color="white";
            var dName=oDirection.children[this.idx].children[0].innerHTML; //方向所选的内容
            //console.log(dName);
            for(var a=0;a<keArr.length;a++)
            {
                var oP=document.createElement("p");
                var oSpan=document.createElement("span");
                if(keArr[a].classify==dName) //如果所点击的方向与分别相等，就输出
                {
                    oSpan.innerHTML=keArr[a].name;
                    oP.className="con1-p2";
                    oSpan.className="con1-span";
                    oP.appendChild(oSpan);
                    oClassify.appendChild(oP);
                }else if(dName=="全部")  //如果所点击的方向是全部，就全部输出
                {
                    oSpan.innerHTML=keArr[a].name;
                    oP.className="con1-p2";
                    oSpan.className="con1-span";
                    oP.appendChild(oSpan);
                    oClassify.appendChild(oP);
                }
            }

        }
    }






};