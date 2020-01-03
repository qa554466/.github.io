/**
 * Created by Administrator on 2017/1/19.
 */
//已购买
function button3()
{
    var button1=document.getElementById("content1").children[0];
    var button2=document.getElementById("content1").children[1];
    button1.style.marginTop="0";
    button1.style.backgroundColor="#13598c";
    button2.style.marginTop="6px";
    button2.style.backgroundColor="#DDDDDD";
    document.getElementById("guo").style.display="none";
}
//待付款
function button4()
{
    var button1=document.getElementById("content1").children[0];
    var button2=document.getElementById("content1").children[1];
    button2.style.marginTop="0";
    button2.style.backgroundColor="#13598c";
    button1.style.marginTop="6px";
    button1.style.backgroundColor="#DDDDDD";
    document.getElementById("guo").style.display="block";
}

//课程、订单、记录切换
function course(){
    document.getElementById("content1").style.display="none";
    document.getElementById("content2").style.display="none";
    document.getElementById("content-course").style.display="block";
    document.getElementById("indent1").style.backgroundImage="url('')";
    document.getElementById("indent").style.color="black";

}

//在学、想学、学完标签页切换
function commonButton(number)
{
    var oButton=document.getElementById("course");
    var oCourse=document.getElementById("content-course");
    for(var i=0;i<oButton.children.length;i++)                  //清空样式
    {
        oButton.children[i].style.backgroundColor="#DDDDDD";
        oButton.children[i].style.marginTop="6px";
        oButton.children[i].style.color="black";
        oCourse.children[i+1].style.display="none";
    }
    oButton.children[number].style.backgroundColor="#13598c";
    oButton.children[number].style.marginTop="0";
    oButton.children[number].style.color="white";
    var name="course"+(number+1);    //要切换到哪一页的id名称
    //console.log(name);
    document.getElementById(name).style.display="block"; //页显示
}

//头像遮罩效果
function headPhoto()
{
    var oTou=document.getElementsByClassName("course1-tou");
    console.log(oTou);
    oTou[0].style.backgroundImage="url('images/xue-tou-y.png')";
}
function headPhoto_out()
{
    var oTou=document.getElementsByClassName("course1-tou");
    oTou[0].style.backgroundImage="url('images/xue-tou.png')";
}

window.onload=function(){

    var oCondition=document.getElementById("condition");
    var oContent=document.getElementById("content-nei");
    //console.log(oCondition.children.length);
    for(var i=0;i<oCondition.children.length;i++){
        oCondition.children[i].idx=i;
        oCondition.children[i].onclick=function(){
            for(var j=0;j<oCondition.children.length;j++)
            {
                oCondition.children[j].style.backgroundSize="100% 100%";
                //console.log(oCondition.children[j]);
                oCondition.children[j].children[0].style.backgroundImage='url("")';
                oCondition.children[j].style.backgroundImage='url("")';
                oCondition.children[j].style.color="black";
                oContent.children[j].style.display="none";

            }
            this.style.backgroundSize="100% 100%";
            this.style.backgroundImage='url("images/ding.jpg")';
            this.style.color="white";
            oContent.children[this.idx].style.display="block";
        };
       /* oCondition.children[i].onmouseover=function(){
            this.style.backgroundSize="100% 100%";
            this.style.backgroundImage='url("images/ding.jpg")';
            this.style.color="white";
        };
        oCondition.children[i].onmouseout=function(){
            this.style.backgroundSize="100% 100%";
            this.style.backgroundImage='url("")';
            this.style.color="black";
        }*/
    }





};