
var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
window.onscroll = function()
{
    tabsanim(),scrollani()
};


var imgbor = document.getElementsByClassName("img-bor");
var smlimg = document.getElementsByClassName("sml-img");
var logimg = document.getElementsByClassName("logimg");
var mainimg = document.getElementsByClassName("main-img");
var tt2 = document.getElementsByClassName("tt2");
var tt3 = document.getElementsByClassName("tt3");

function tabsanim() {
    if(w>= 300){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        smlimg[0].style.right="-20px";
        smlimg[0].style.opacity="1";
       
        
        mainimg[0].style.top="30px"; mainimg[0].style.left="-50px";
        mainimg[0].style.opacity="1";
      
    }
        
        
        if(w>700){
            if (document.body.scrollTop > 1372 || document.documentElement.scrollTop > 1372) {
                
                tt2[0].style.left="100px";
                tt2[0].style.top="-30px";
                   tt2[1].style.left="100px";
                tt2[1].style.top="-30px";
                
                   tt3[0].style.left="-20px";
                tt3[0].style.top="-60px";   tt3[1].style.left="-20px";
                tt3[1].style.top="-60px";
            }
        }
        
            if(w<700){
            if (document.body.scrollTop > 2020 || document.documentElement.scrollTop > 2020) {
                
                tt2[0].style.left="20px";
                tt2[0].style.top="-30px";
                   
                tt2[1].style.left="20px";
                tt2[1].style.top="-30px";
                
                   tt3[0].style.left="50px";
                tt3[0].style.top="30px";
                 tt3[1].style.left="50px";
                tt3[1].style.top="30px";
            }
        }
        
    }
}


var galaact = document.getElementsByClassName('tr-bx');
galaact[0].addEventListener('click',function(){
    gallery(1);
},false);

galaact[1].addEventListener('click',function(){
    gallery(2);
},false);

galaact[2].addEventListener('click',function(){
    gallery(3);
},false);

galaact[3].addEventListener('click',function(){
    gallery(4);
},false);
var galaimg = document.getElementsByClassName('gala-imgs');
var hil = document.getElementsByClassName('hil');
var wid = document.getElementsByClassName('wid');
var templ = document.getElementsByClassName('templ');
var hony = document.getElementsByClassName('hony');
var bbhd = document.getElementsByClassName('bb-hhd');
var towbx = document.getElementsByClassName('tr-bx1');
function gallery(g){

    if(g == 1){
        galaimg[0].style.display="flex";
        
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
        
        /*hil[0].style.background="url(images/hillc.svg)";
        */
        hony[0].classList.remove('hony1');
        wid[0].classList.remove('wid1');
        templ[0].classList.remove('templ1');

    hil[0].className="hil hil1";    
        bbhd[0].style.color="#d53132";
        galaact[0].style.borderBottom="3px solid #d53132";
        galaact[0].classList.add("tr-bx1");
     
        
       /* wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeycw.svg)";*/
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
    }
    else if(g == 2){
        galaimg[0].style.display="none";
        galaimg[1].style.display="flex";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
       hil[0].classList.remove('hil1');
        templ[0].classList.remove('templ1');
        hony[0].classList.remove('hony1');
      /*  wid[0].style.background="url(images/wildc.svg)";*/
         wid[0].className="wid wid1";
        
        bbhd[1].style.color="#d53132";
        galaact[1].style.borderBottom="3px solid #d53132";
        galaact[1].classList.add("tr-bx1");
        
       /* hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeyw.svg)";*/
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
         
    }
    else if(g == 3){
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="flex";
        galaimg[3].style.display="none";
         wid[0].classList.remove('wid1');
          hil[0].classList.remove('hil1');
          hony[0].classList.remove('hony1');
        /*templ[0].style.background="url(images/templec.svg)";*/
        templ[0].className="templ templ1";
        bbhd[2].style.color="#d53132";
        galaact[2].style.borderBottom="3px solid #d53132";
        galaact[2].classList.add("tr-bx1");
        
        /*wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        /*hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeyw.svg)";*/
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
    }
    else if(g == 4){
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="flex";
        
     /*   hony[0].style.background="url(images/honeycc.svg)";*/
        templ[0].classList.remove('templ1');
         wid[0].classList.remove('wid1');
          hil[0].classList.remove('hil1');
          
        hony[0].className="hony hony1";
        bbhd[3].style.color="#d53132";
        galaact[3].style.borderBottom="3px solid #d53132";
        galaact[3].classList.add("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        /*wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        /*hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
    }
}
gallery(1);

/*window.onscroll = function() {scrollani()};*/

  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

var ser=document.getElementsByClassName('ser-ss');
var frmimg=document.getElementsByClassName('frm-imgcon');
var hil=document.getElementsByClassName('hil');
var wid=document.getElementsByClassName('wid');
var temp=document.getElementsByClassName('templ');
var honey=document.getElementsByClassName('hony');


function scrollani() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        for(i=0;i<3;i++){
        ser[i].style.top="0px";
        ser[i].style.opacity="1";}
        
       
      
    }
    
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        hil[0].style.top="-20px";
        hil[0].style.opacity="1";
        
         wid[0].style.opacity="1";
         wid[0].style.top="0px";
            
                temp[0].style.opacity="1";
         temp[0].style.top="0px";
            
                honey[0].style.opacity="1";
         honey[0].style.top="0px";
       
      
    }
    
        if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
            frmimg[0].style.opacity="1";
       
            
        }
    
 
}


/*slider nor*/
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");

dot1.addEventListener("click",function(){
                      slde(1);},false);

dot2.addEventListener("click",function(){
                      slde(2);},false);
dot3.addEventListener("click",function(){
                      slde(3);},false);

function slde(a){
    console.log(a);
    if(a == 1){
        dot1.style.background="#da5050";
        dot1.style.border="1px solid #da5050";
        
        dot2.style.background="#454545 ";
        dot2.style.border="1px solid #454545";
        
        dot3.style.background="#454545 ";
        dot3.style.border="1px solid #454545";
        
        var secsld = document.getElementById('sec-sld');
        var firsld = document.getElementById('fir-sld');
        var tirsld = document.getElementById('tir-sld');
        secsld.style.display="none";
        firsld.style.display="block";
        tirsld.style.display="none";
        
    }
    else if(a == 2){
        dot2.style.background="#da5050";
        dot2.style.border="1px solid #da5050";
        
        dot1.style.background="#454545";
        dot1.style.border="1px solid #454545";
        
        dot3.style.background="#454545 ";
        dot3.style.border="1px solid #454545";
        
        var secsld1 = document.getElementById('sec-sld');
        var firsld1 = document.getElementById('fir-sld');
        var tirsld = document.getElementById('tir-sld');
        secsld1.style.display="block";
        firsld1.style.display="none";
         tirsld.style.display="none";
    }
      else if(a == 3){
        dot3.style.background="#da5050";
        dot3.style.border="1px solid #da5050";
        
        dot2.style.background="#454545";
        dot2.style.border="1px solid #454545";
        
        dot1.style.background="#454545 ";
        dot1.style.border="1px solid #454545";
        
        var secsld2 = document.getElementById('sec-sld');
        var firsld2 = document.getElementById('fir-sld');
          var tirsld = document.getElementById('tir-sld');
        secsld2.style.display="none";
        firsld2.style.display="none";
           tirsld.style.display="block";
    }
}
slde(1);
/*slider nor*/
