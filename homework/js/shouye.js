/**
 * Created by Administrator on 2017/1/16.
 */
function zhu()   //登录
{
    document.getElementById("moTai1").style.display="block";
}

//关闭登录
function close2()
{
    document.getElementById("moTai1").style.display="none";
}

function log_in()   //登录
{
    document.getElementById("moTai").style.display="block";
}

//关闭登录
function close1()
{
    document.getElementById("moTai").style.display="none";
}
function zhu_lian()
{
    document.getElementById("moTai").style.display="none";
    document.getElementById("moTai1").style.display="block";

}

//--------- 换图片-------------------
function xian()
{
    document.getElementById("xiaoyu1").style.display="block";
    document.getElementById("dayu1").style.display="block";
}
function yin()
{
    document.getElementById("xiaoyu1").style.display="none";
    document.getElementById("dayu1").style.display="none";
}


// < 的函数
arr=["images/ban0.jpg","images/ban1.jpg","images/2.jpg","images/3.jpg"];
var indexColor=0;  //下标

function xiaoyu()
{
    clearInterval(times);//暂停定时器
    indexColor--;
    if(indexColor<0)
    {
        indexColor=3;
    }
    if(indexColor>3){
        indexColor=0;
    }
    var oYuan=document.getElementById("yuan");//获取圆的节点
    for(var i=0;i<arr.length;i++)
    {
        oYuan.children[i].src="images/yuan.png";//清空圆背景
    }
    oYuan.children[indexColor].src="images/yuan-gao.png";//圆高亮
    var oBan2=document.getElementById("banner1");//获取DIV节点
    oBan2.style.backgroundImage='url('+arr[indexColor]+')';
    times=setInterval("dayu()",2000);//暂停定时器
    console.log("1",indexColor);//测试
}

// > 的函数
function dayu()
{
    clearInterval(times);  //暂停定时器
    indexColor++;
    if(indexColor>3){
        indexColor=0;
    }
    var oBan2=document.getElementById("banner1");//获取DIV节点
    var oYuan=document.getElementById("yuan");//获取圆的节点
    for(var i=0;i<4;i++)
    {
        oYuan.children[i].src="images/yuan.png";//清空圆背景
    }
    oYuan.children[indexColor].src="images/yuan-gao.png";//圆高亮
    oBan2.style.backgroundImage='url('+arr[indexColor]+')';
    times= setInterval("dayu()",2000);  //暂停定时器
    //console.log("2",indexColor);//测试
}

 var times= setInterval("dayu()",2000);//开启定时器

//手风琴--专业师资团队
var newIndex=7;//当前下标
var arr1=["images/shi1.png","images/shi2.jpg","images/shi3.jpg","images/shi4.jpg","images/shi5.jpg","images/shi6.jpg","images/shi7.jpg","images/shi_08.png"];
var arr2=["images/shi_01.jpg","images/shi_02.png","images/shi_03.png","images/shi_04.png","images/shi_05.png","images/shi_06.png","images/shi_07.png","images/shi8.jpg"];
function bian(index)
{
    var oShi=document.getElementById("why2");
    //console.log(oShi.children[index].children[1]);

    oShi.children[newIndex].children[0].src=arr2[newIndex];  //隐藏大图片，显示小图片
    oShi.children[index].children[0].src=arr1[index];        //显示大图片
    oShi.children[newIndex].children[1].style.display="none";   //隐藏文字介绍
    oShi.children[index].children[1].style.display="block";//显示文字介绍
    newIndex=index;
}

//走马灯--学员作品
    var times1= setInterval("revolve()",20);//开启定时器
function revolve()
{
    //第一个div的left变化
    var  oZuo2=document.getElementById("zuoPin2");
    var left=oZuo2.offsetLeft;
    //console.log(left);
    if(left<=-938)
    {
        left=938;
    }
    left=left-1;
    oZuo2.style.left=left+"px";
    //第二个div的left变化
    var  oZuo3=document.getElementById("zuoPin3");
    var left1=oZuo3.offsetLeft;
    //console.log(left);
    if(left1<=-938)
    {
        left1=938;
    }
    left1=left1-1;
    oZuo3.style.left=left1+"px";
}

//移入时，走马灯暂停
function pause()
{
    clearInterval(times1); //走马灯暂停
}
function start()
{
    times1= setInterval("revolve()",20);//开启定时器
}

//密码验证函数
function yanpwd(name,name1)
{
    var pwd=document.getElementById(name).value;
    if(pwd==""){
        document.getElementById(name1).innerHTML="密码不能为空";
        document.getElementById(name1).style.color="red";
        return 0;
    }
    var reg="^[a-zA-Z][a-zA-Z0-9]{5,17}$";
    var re1=new RegExp(reg);
    if(!re1.test(pwd))
    {
        document.getElementById(name1).innerHTML="以字母开头，长度在5~18之间";
        document.getElementById(name1).style.color="red";
        return 0;
    }else{
        document.getElementById(name1).innerHTML="输入正确";
        document.getElementById(name1).style.color="blue";
        return 1;
    }
}

//账号验证函数
function yanUser(name,name1)
{
    var userID=document.getElementById(name).value;
    var reg=new RegExp("^[A-Za-z0-9]{3,}$");
    if(reg.test(userID))
    {
        document.getElementById(name1).style.color="blue";
        document.getElementById(name1).innerHTML="输入正确";

    }
    else{
        document.getElementById(name1).innerHTML="账号至少3位数，只能是数字或字母";
        document.getElementById(name1).style.color="red";
    }
}


window.onload=function()
{
    //圆点的变化
    var oYuan=document.getElementById("yuan");//获取圆的节点
    var index; //圆下标
    var oBan2=document.getElementById("banner1");//获取DIV节点
    for(index=0;index<arr.length;index++)
    {
        oYuan.children[index].idx=index;   //添加属性值
        oYuan.children[index].onmouseover=function(){
            clearInterval(times);  //暂停定时器
            for(var i=0;i<arr.length;i++)
            {
                oYuan.children[i].src="images/yuan.png";//清空圆背景
            }
            oYuan.children[this.idx].src="images/yuan-gao.png";//圆高亮
            oBan2.style.backgroundImage="url("+arr[this.idx]+")";
            indexColor=this.idx;
            times= setInterval("dayu()",2000);  //暂停定时器
        };

    }
    //登录框
    document.getElementById("user").onblur=function(){
        document.getElementById("user1").innerHTML="";
        this.style.border="1px solid #c6d8f2";
    };
    //登录密码
    document.getElementById("pwd").onblur=function(){
        document.getElementById("pwd1").innerHTML="";
        this.style.border="1px solid #c6d8f2";
    };
    //注册框1
    document.getElementById("user2").onblur=function(){
    yanUser("user2","user3");
    };
    //注册密码框1
    document.getElementById("pwd2").onblur=function(){
        yanpwd("pwd2","pwd3");
    };
    //注册密码框2
    document.getElementById("pwd4").onblur=function(){
        var pwd1=document.getElementById("pwd2").value;
        var pwd2=document.getElementById("pwd4").value;
        if(pwd1==pwd2)
        {
            document.getElementById("pwd5").innerHTML="密码正确";
            document.getElementById("pwd5").style.color="blue";
        }else{

            document.getElementById("pwd5").innerHTML="密码不一致";
            document.getElementById("pwd5").style.color="red";
        }
        if(pwd2=="")
        {
            document.getElementById("pwd5").innerHTML="密码不能为空";
            document.getElementById("pwd5").style.color="red";
        }
    };

    //邮箱
    document.getElementById("you").onblur=function(){
        var you=document.getElementById("you").value;
        var zhen="^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$";
        var re1=new RegExp(zhen);
        var en=document.getElementsByClassName("en-ys1");
        if(re1.test(you))
        {
            en[7].style.color="blue";
            en[7].innerHTML="邮箱号正确";
        }
        else{
            en[7].style.color="red";
            en[7].innerHTML="邮箱号错误";
        }
};
//本地存储数组
    function User(userID,pwd,email){
        this.userID=userID;
        this.password=pwd;
        this.email=email;
    }
    var arrUser=[new User('user',123,"123@qq.com"),new User("HF1611",1611,"123@qq.com")];
    console.log(arrUser[0].email);
    if(localStorage.user!==undefined)  //判断是否存在user本地数组
    {
        arrUser=JSON.parse(localStorage.user); //取出
    }else{
        localStorage.user=JSON.stringify(arrUser);//本地存储
        arrUser=JSON.parse(localStorage.user);
    }
    //注册按钮
    document.getElementById("deLu1").onclick=function(){
        var user=document.getElementById("user2").value;
        var pwd=document.getElementById("pwd2").value;
        var pwd1=document.getElementById("pwd4").value;
        var email=document.getElementById("you").value;
        if(user=="" || user.length<=2)
        {
            document.getElementById("user3").style.color="red";
            document.getElementById("user3").innerHTML="账号不能为空，至少3位";
            return;
        }
        if(yanpwd("pwd2","pwd3")==0){
            return;
        }
        if(pwd1==pwd)
        {
            document.getElementById("pwd5").innerHTML="密码正确";
            document.getElementById("pwd5").style.color="blue";
        }else{

            document.getElementById("pwd5").innerHTML="密码不一致";
            document.getElementById("pwd5").style.color="red";
            return;
        }
        for(var i=0;i<arrUser.length;i++)
        {
            //console.log(arrUser);
            if(user==arrUser[i].userID)
            {
                document.getElementById("user2").value="";
                document.getElementById("user3").innerHTML="账号已存在,请更换";
                document.getElementById("user3").style.color="red";
                document.getElementById("pwd2").value="";
                document.getElementById("pwd4").value="";
                document.getElementById("you").value="";
                break;
            }
        }
        if(i==arrUser.length)
        {
            arrUser.push(new User(user,pwd,email));
            localStorage.user=JSON.stringify(arrUser);//本地存储
            document.getElementById("moTai1").style.display="none";
            document.getElementById("moTai").style.display="block";

            //alert("注册成功");
        }

    };
    //是否在线
    if(localStorage.onliner!==undefined)
    {
        document.getElementById("nav-2-2").style.display="none";
        document.getElementById("username").style.display="inline-block";
        document.getElementById("name").innerHTML="你好："+localStorage.onliner;
    }
    //退出
    document.getElementById("exit").onclick=function(){
        localStorage.removeItem("onliner");
        location.reload();//刷新
    };
    //登录按钮
    document.getElementById("deLu").onclick=function(){
        var user=document.getElementById("user").value;
        var pwd=document.getElementById("pwd").value;
        if(user=="")
        {
            document.getElementById("user").style.borderColor= "#f25d8e";
            document.getElementById("user1").style.color="red";
            document.getElementById("user1").innerHTML="账号不能为空";
            return;
        }
        if(pwd=="")
        {
            document.getElementById("pwd").style.borderColor= "#f25d8e";
            document.getElementById("pwd1").style.color="red";
            document.getElementById("pwd1").innerHTML="请输入密码";
            return;
        }
        for(var i=0;i<arrUser.length;i++)
        {
            if(user==arrUser[i].userID && pwd==arrUser[i].password)
            {
                //登录成功
                document.getElementById("moTai").style.display="none";
                document.getElementById("nav-2-2").style.display="none";
                document.getElementById("username").style.display="inline-block";
                localStorage.onliner=user;
                document.getElementById("name").innerHTML="你好："+localStorage.onliner;
                return;
            }
        }
        if(i==arrUser.length)
        {
            document.getElementById("pwd1").style.color="red";
            document.getElementById("pwd1").innerHTML="账号或密码错误";
            //alert("登录失败");
        }
    };

};
