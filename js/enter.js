
//登录窗口
function opendl(){

   var hideobg=document.getElementById("hidebg");
   hidebg.style.display="block";  
   hidebg.style.height=document.body.clientHeight+"px";  
   document.getElementById("hidebox").style.display="block";  
}
function hide()  
{
   document.getElementById("hidebg").style.display="none";
   document.getElementById("hidebox").style.display="none";
}


//注册窗口
function openzc(){

 var hidebg2=document.getElementById("hidebg2");
   hidebg2.style.display="block"; 
   hidebg2.style.height=document.body.clientHeight+"px"; 
   document.getElementById("hidebox2").style.display="block";  
}
function hide2()  
{
   document.getElementById("hidebg2").style.display="none";
   document.getElementById("hidebox2").style.display="none";
}



function enter(){
	hide2();
	opendl();
}

//登录判断
function checkuser() {
		
         if(($('uname' )=='min'||$('uname')=='493479995@qq.com') && $('pwd') == '123' ){
           return true;
         }else {
         	alert('用户名或密码错误')


            return false;
         }
      }

      function $(id) {
        return document.getElementById(id).value;
      }
      

//电影页面
function more()  
{
	document.getElementById("movdiv1").style.display="none";
   document.getElementById("movdiv2").style.display="block";
   
   
}
function hidemore(){
	document.getElementById("movdiv2").style.display="none"
	document.getElementById("movdiv1").style.display="block";
}
