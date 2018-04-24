
var prev = document.getElementById('prev');
prev.addEventListener('click',function(){
  incre(-1);},false);

var nxt = document.getElementById('nxt');
nxt.addEventListener('click',function(){
  incre(1);
    clearInterval(xset);

},false);
 var ban = document.getElementsByClassName('ban');
var caphd = document.getElementsByClassName('hdtxt');
var j =0;

 function incre(k){
     j = j + k;
     if(j == -1){
         j = ban.length-1;
     }
     if(j == ban.length){
         j=0;
     }
    scrollImg(j);
 }
function scrollImg(z){
    ban[0].style.display="none";
    ban[1].style.display="none";
    ban[2].style.display="none";
    ban[3].style.display="none";
    ban[z].style.display="block";
    
   caphd[0].style.display="none";
    caphd[1].style.display="none";
    caphd[2].style.display="none";
     caphd[3].style.display="none";
    caphd[z].style.display="block";                              
}
scrollImg(0);
var xset= setInterval(function(){incre(1);},3000);
/*slider nor*/
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");

dot1.addEventListener("click",function(){
                      slde(1);},false);

dot2.addEventListener("click",function(){
                      slde(2);},false);

function slde(a){
    console.log(a);
    if(a == 1){
        dot1.style.background="#da5050";
        dot1.style.border="1px solid #da5050";
        
        dot2.style.background="#454545 ";
        dot2.style.border="1px solid #454545";
        
        var secsld = document.getElementById('sec-sld');
        var firsld = document.getElementById('fir-sld');
        secsld.style.display="none";
        firsld.style.display="block";
        
    }
    else if(a == 2){
        dot2.style.background="#da5050";
        dot2.style.border="1px solid #da5050";
        
        dot1.style.background="#454545";
        dot1.style.border="1px solid #454545";
        var secsld1 = document.getElementById('sec-sld');
        var firsld1 = document.getElementById('fir-sld');
        secsld1.style.display="block";
        firsld1.style.display="none";
    }
}
slde(1);
/*slider nor*/

/*testi*/
var dot11 = document.getElementById("dot11");
var dot12 = document.getElementById("dot12");
var dot13 = document.getElementById("dot13");
var dot14 = document.getElementById("dot14");
dot11.addEventListener("click",function(){
                      testi(1);},false);

dot12.addEventListener("click",function(){
                      testi(2);},false);
dot13.addEventListener("click",function(){
                      testi(3);},false);

dot14.addEventListener("click",function(){
                      testi(4);},false);

var tsval1 = document.getElementById('tsval-1');
var tsval2 = document.getElementById('tsval-2');
var tsval3 = document.getElementById('tsval-3');
var tsval4 = document.getElementById('tsval-4');

function testi(ts){
    console.log(ts);
    if(ts == 1){
        dot11.style.background="#da5050";
        dot11.style.border="1px solid #da5050";
        
        dot12.style.background="#454545 ";
        dot12.style.border="1px solid #454545";
        dot13.style.background="#454545 ";
        dot13.style.border="1px solid #454545";
        dot14.style.background="#454545 ";
        dot14.style.border="1px solid #454545";
        
        
        tsval2.style.display="none";
        tsval3.style.display="none";
        tsval4.style.display="none";
        tsval1.style.display="block";
        
    }
    else if(ts == 2){
        dot12.style.background="#da5050";
        dot12.style.border="1px solid #da5050";
        
        dot11.style.background="#454545";
        dot11.style.border="1px solid #454545";
        dot13.style.background="#454545";
        dot13.style.border="1px solid #454545";
        dot14.style.background="#454545";
        dot14.style.border="1px solid #454545";
        
        
        tsval2.style.display="block";
        tsval3.style.display="none";
        tsval4.style.display="none";
        tsval1.style.display="none";
    }
    else if(ts == 3){
        dot13.style.background="#da5050";
        dot13.style.border="1px solid #da5050";
        
        dot11.style.background="#454545";
        dot11.style.border="1px solid #454545";
        dot12.style.background="#454545";
        dot12.style.border="1px solid #454545";
        dot14.style.background="#454545";
        dot14.style.border="1px solid #454545";
        
        
        tsval2.style.display="none";
        tsval3.style.display="block";
        tsval4.style.display="none";
        tsval1.style.display="none";
    }
    else if(ts == 4){
        dot14.style.background="#da5050";
        dot14.style.border="1px solid #da5050";
        
        dot11.style.background="#454545";
        dot11.style.border="1px solid #454545";
        dot12.style.background="#454545";
        dot12.style.border="1px solid #454545";
        dot13.style.background="#454545";
        dot13.style.border="1px solid #454545";
        
        tsval2.style.display="none";
        tsval3.style.display="none";
        tsval4.style.display="block";
        tsval1.style.display="none";
    }
}
testi(1);
/*testi*/
/*gallery*/
var galaact = document.getElementsByClassName('bb-hhd');
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

galaact[4].addEventListener('click',function(){
    gallery(5);
},false);
var galaimg = document.getElementsByClassName('gala-imgs');
function gallery(g){
    if(g == 1){
        galaimg[0].style.display="flex";
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
        galaimg[4].style.display="none";
    }
    else if(g == 2){
        galaimg[0].style.display="none";
        galaimg[1].style.display="flex";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
        galaimg[4].style.display="none";
    }
    else if(g == 3){
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="flex";
        galaimg[3].style.display="none";
        galaimg[4].style.display="none";
    }
    else if(g == 4){
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="flex";
        galaimg[4].style.display="none";
    }
    else if(g == 5){
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
        galaimg[4].style.display="flex";
    }
}
gallery(1);
/*gallery*/
