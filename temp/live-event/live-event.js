//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var carhd= document.getElementById('carhd');
         var carp= document.getElementById('carp');
           var emg= document.getElementsByClassName('emg');
         var overlay= document.getElementsByClassName('overlay');

function portfullf(){
carhd.style.left="0px";
    carhd.style.opacity="1";
    carp.style.left="0px";
    carp.style.opacity="1";
    overlay[0].style.left="100%";
    emg[0].style.boxShadow="15px 20px 50px 0px rgba(20, 20, 20, 0.2)";

}

portfullf();

    });




var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);


var wswit= document.getElementsByClassName('wswit');

var wsin= document.getElementsByClassName('wsin');

var why1=document.getElementsByClassName('why1');




function wswitch(n){
    
    wsin[0].style.backgroundColor="#fcfcfc";
     wsin[1].style.backgroundColor="#fcfcfc";
     wsin[2].style.backgroundColor="#fcfcfc";
      wsin[3].style.backgroundColor="#fcfcfc";
      wsin[4].style.backgroundColor="#fcfcfc";
     

wsin[n].style.backgroundColor="#25c485";
       why1[0].style.display="none";
    why1[1].style.display="none";
    why1[2].style.display="none"
     why1[3].style.display="none"
     why1[4].style.display="none"
    
    why1[n].style.display="flex";
    

}


if(w<599){
wswitch(0);
}
wswit[0].addEventListener('click',function() {wswitch(0);}, false);

wswit[1].addEventListener('click',function() {wswitch(1);}, false);

wswit[2].addEventListener('click',function() {wswitch(2);}, false);

wswit[3].addEventListener('click',function() {wswitch(3);}, false);
wswit[4].addEventListener('click',function() {wswitch(4);}, false);





var group= document.getElementsByClassName('group');
var reghd= document.getElementById('reghd');
var regp= document.getElementById('regp');
var regmg= document.getElementById('regmg');


var workcon= document.getElementsByClassName('work_con');

var whya= document.getElementsByClassName('why');


window.onscroll = function() {scrollani()};
  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
function scrollani() {
    /* build*/

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
group[0].style.opacity="1";
        group[0].style.top="0px";
 

        
      }
   if(w>900){
      if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
reghd.style.opacity="1";
          regp.style.opacity="1";
          regmg.style.opacity="1";
        
          regmg.style.top="0px";
        regp.style.top="0px";
        reghd.style.top="0px";
        
      }}
   
       if(w<900){
      if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
reghd.style.opacity="1";
          regp.style.opacity="1";
          regmg.style.opacity="1";
        
          regmg.style.top="0px";
        regp.style.top="0px";
        reghd.style.top="0px";
        
      }}
   
    
       if(w>200){
      if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
workcon[0].style.opacity="1";
     
        
          workcon[0].style.top="0px";

        
      }}

    
       if(w>600){
      if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {

          whya[0].style.backgroundPosition="0% 100px";
     

        
      }}






}































































var pl1pics= document.getElementsByClassName('pl1pics');
var pright=document.getElementsByClassName('right');
var pleft=document.getElementsByClassName('left');
var pl1m= document.getElementsByClassName('pl1m');
var pvmovlr=0;
var pvmovlr_l4=0;
var pvmovlr_l5=0;
var pvmovlr_l2=0;
var pvmovlr_l12=0;
var pvmov=0;
var pvmov_l4=0;
var pvmov_l5=0;
var pvmov_l2=0;
var pvmov_l12=0;




//////////////////desktop section////////////////////////

// layer 3//
//arrow and delay section//
//pleft arrow
function fplpress(p,pch){
    pvmovlr=p+pvmovlr;
    //right

    if(pch==1){

         pright[0].className='right prpress';
    pright[0].style.zIndex='-1'; pright[0].style.backgroundSize='98%';


     if((pvmovlr>-4)&(pvmovlr<4)){

         setTimeout( function(){vprpress_reset();},200);  }
         if(pvmovlr>3){
         setTimeout( function(){vprpress_reset();},1000); 
             pvmovlr=3;  }}

    function vprpress_reset(){
     pright[0].style.zIndex='0';
    pright[0].className='right';
    pright[0].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft[0].style.zIndex='-1';
    pleft[0].className='left plpress';
    pleft[0].style.backgroundSize='98%';


             if((pvmovlr>-4)&(pvmovlr<4)){
 setTimeout( function(){vplpress_reset();},200);
             }


        if(pvmovlr<-3){

         setTimeout( function(){vplpress_reset();},1000);
             pvmovlr=-3;
      }


}}


function vplpress_reset(){

    pleft[0].className='left';
    pleft[0].style.backgroundSize='100%';
     pleft[0].style.zIndex='0';
}
//left


pleft[0].addEventListener('click',function(){fplpress(-1,0);}, false);
pright[0].addEventListener('click',function(){fplpress(+1,1);}, false);
//arrow and delay section//


function pmovr(n)
{
    pvmov=pvmov+n;
    if(pvmov>3)
        {pvmov=3;
        pl1pics[0].className='pl1pics pl1right';
             setTimeout( function(){pl1rreset();},1200);
        }

    function pl1rreset(){ pl1pics[0].className='pl1pics';}

    if(pvmov<-3)
        {pvmov=-3;

pl1pics[0].className='pl1pics pl1left';
             setTimeout( function(){pl1rreset();},1200);
        }
    if(pvmov==1){
    pl1pics[0].style.left='-33.0%';}

   if(pvmov==2){
    pl1pics[0].style.left='-66.0%';}
     if(pvmov==3){
    pl1pics[0].style.left='-99.0%';}


    if(pvmov==0){
    pl1pics[0].style.left='0%';}
    if(pvmov==-1){
    pl1pics[0].style.left='33.0%';}

   if(pvmov==-2){
    pl1pics[0].style.left='66.0%';}
     if(pvmov==-3){
    pl1pics[0].style.left='99%';}



}
pright[0].addEventListener('click',function(){pmovr(+1);}, false);
pleft[0].addEventListener('click',function(){pmovr(-1);}, false);
// layer 3//



// layer 4//
//arrow and delay section//
//pleft arrow
function fplpress_l4(p,pch){
    pvmovlr=p+pvmovlr;
    //right

    if(pch==1){

         pright[1].className='right prpress';
    pright[1].style.zIndex='-1'; pright[1].style.backgroundSize='98%';


     if((pvmovlr>-4)&(pvmovlr<4)){

         setTimeout( function(){vprpress_reset_l4();},200);  }
         if(pvmovlr>3){
         setTimeout( function(){vprpress_reset_l4();},1000); 
             pvmovlr=3;  }}

    function vprpress_reset_l4(){
     pright[1].style.zIndex='0';
    pright[1].className='right';
    pright[1].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft[1].style.zIndex='-1';
    pleft[1].className='left plpress';
    pleft[1].style.backgroundSize='98%';


             if((pvmovlr>-4)&(pvmovlr<4)){
 setTimeout( function(){vplpress_reset_l4();},200);
             }


        if(pvmovlr<-3){

         setTimeout( function(){vplpress_reset_l4();},1000);
             pvmovlr=-3;
      }


}}
function vplpress_reset_l4(){

    pleft[1].className='left';
    pleft[1].style.backgroundSize='100%';
     pleft[1].style.zIndex='0';
}
//left


pleft[1].addEventListener('click',function(){fplpress_l4(-1,0);}, false);
pright[1].addEventListener('click',function(){fplpress_l4(+1,1);}, false);
//arrow and delay section//


function pmovr_l4(n)
{
    pvmov_l4=pvmov_l4+n;
    if(pvmov_l4>3)
        {pvmov_l4=3;
        pl1pics[1].className='pl1pics pl1right';
             setTimeout( function(){pl1rreset();},1200);
        }

    function pl1rreset(){ pl1pics[1].className='pl1pics';}

    if(pvmov_l4<-3)
        {pvmov_l4=-3;

pl1pics[1].className='pl1pics pl1left';
             setTimeout( function(){pl1rreset();},1200);
        }
    if(pvmov_l4==1){
    pl1pics[1].style.left='-33.0%';}

   if(pvmov_l4==2){
    pl1pics[1].style.left='-66.0%';}
     if(pvmov_l4==3){
    pl1pics[1].style.left='-99.0%';}


    if(pvmov_l4==0){
    pl1pics[1].style.left='-00%';}
    if(pvmov_l4==-1){
    pl1pics[1].style.left='33.0%';}

   if(pvmov_l4==-2){
    pl1pics[1].style.left='66.0%';}
     if(pvmov_l4==-3){
    pl1pics[1].style.left='99%';}



}
pright[1].addEventListener('click',function(){pmovr_l4(+1);}, false);
pleft[1].addEventListener('click',function(){pmovr_l4(-1);}, false);
// layer 4//







// layer 5//
//arrow and delay section//
//pleft arrow
function fplpress_l5(p,pch){
    pvmovlr=p+pvmovlr;
    //right

    if(pch==1){

         pright[2].className='right prpress';
    pright[2].style.zIndex='-1'; pright[2].style.backgroundSize='98%';


     if((pvmovlr>-4)&(pvmovlr<4)){

         setTimeout( function(){vprpress_reset_l5();},200);  }
         if(pvmovlr>3){
         setTimeout( function(){vprpress_reset_l5();},1000); 
             pvmovlr=3;  }}

    function vprpress_reset_l5(){
     pright[2].style.zIndex='0';
    pright[2].className='right';
    pright[2].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft[2].style.zIndex='-1';
    pleft[2].className='left plpress';
    pleft[2].style.backgroundSize='98%';


             if((pvmovlr>-4)&(pvmovlr<4)){
 setTimeout( function(){vplpress_reset_l5();},200);
             }


        if(pvmovlr<-3){

         setTimeout( function(){vplpress_reset_l5();},1000);
             pvmovlr=-3;
      }


}}
function vplpress_reset_l5(){

    pleft[2].className='left';
    pleft[2].style.backgroundSize='100%';
     pleft[2].style.zIndex='0';
}
//left


pleft[2].addEventListener('click',function(){fplpress_l5(-1,0);}, false);
pright[2].addEventListener('click',function(){fplpress_l5(+1,1);}, false);
//arrow and delay section//


function pmovr_l5(n)
{
    pvmov_l5=pvmov_l5+n;
    if(pvmov_l5>3)
        {pvmov_l5=3;
        pl1pics[2].className='pl1pics pl1right';
             setTimeout( function(){pl1rreset();},1200);
        }

    function pl1rreset(){ pl1pics[2].className='pl1pics';}

    if(pvmov_l5<-3)
        {pvmov_l5=-3;

pl1pics[2].className='pl1pics pl1left';
             setTimeout( function(){pl1rreset();},1200);
        }
    if(pvmov_l5==1){
    pl1pics[2].style.left='-33.3%';}

   if(pvmov_l5==2){
    pl1pics[2].style.left='-66.6%';}
     if(pvmov_l5==3){
    pl1pics[2].style.left='-99.9%';}


    if(pvmov_l5==0){
    pl1pics[2].style.left='00%';}
    if(pvmov_l5==-1){
    pl1pics[2].style.left='33.3%';}

   if(pvmov_l5==-2){
    pl1pics[2].style.left='66.6%';}
     if(pvmov_l5==-3){
    pl1pics[2].style.left='99%';}



}
pright[2].addEventListener('click',function(){pmovr_l5(+1);}, false);
pleft[2].addEventListener('click',function(){pmovr_l5(-1);}, false);
// layer 5//






// layer 2//
//arrow and delay section//
//pleft arrow
function fplpress_l2(p,pch){
    pvmovlr=p+pvmovlr;
    //right

    if(pch==1){

         pright[3].className='right prpress';
    pright[3].style.zIndex='-1'; pright[3].style.backgroundSize='98%';


     if((pvmovlr>-4)&(pvmovlr<4)){

         setTimeout( function(){vprpress_reset_l2();},200);  }
         if(pvmovlr>3){
         setTimeout( function(){vprpress_reset_l2();},1000); 
             pvmovlr=3;  }}

    function vprpress_reset_l2(){
     pright[3].style.zIndex='0';
    pright[3].className='right';
    pright[3].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft[3].style.zIndex='-1';
    pleft[3].className='left plpress';
    pleft[3].style.backgroundSize='98%';


             if((pvmovlr>-4)&(pvmovlr<4)){
 setTimeout( function(){vplpress_reset_l2();},200);
             }


        if(pvmovlr<-3){

         setTimeout( function(){vplpress_reset_l2();},1000);
             pvmovlr=-3;
      }


}}
function vplpress_reset_l2(){

    pleft[3].className='left';
    pleft[3].style.backgroundSize='100%';
     pleft[3].style.zIndex='0';
}
//left


pleft[3].addEventListener('click',function(){fplpress_l2(-1,0);}, false);
pright[3].addEventListener('click',function(){fplpress_l2(+1,1);}, false);
//arrow and delay section//


function pmovr_l2(n)
{
    pvmov_l2=pvmov_l2+n;
    if(pvmov_l2>3)
        {pvmov_l2=3;
        pl1pics[3].className='pl1pics pl2right';
             setTimeout( function(){pl1rreset();},1200);
        }

    function pl1rreset(){ pl1pics[3].className='pl1pics';}

    if(pvmov_l2<-3)
        {pvmov_l2=-3;

pl1pics[3].className='pl1pics pl2left';
             setTimeout( function(){pl1rreset();},1200);
        }
    if(pvmov_l2==1){
    pl1pics[3].style.left='-33%';}

   if(pvmov_l2==2){
    pl1pics[3].style.left='-66%';}
    if(pvmov_l2==3){
    pl1pics[3].style.left='-99%';}


    if(pvmov_l2==0){
    pl1pics[3].style.left='-0%';}
    if(pvmov_l2==-1){
    pl1pics[3].style.left='33%';}

   if(pvmov_l2==-2){
    pl1pics[3].style.left='66%';}
 if(pvmov_l2==-3){
    pl1pics[3].style.left='99%';}




}
pright[3].addEventListener('click',function(){pmovr_l2(+1);}, false);
pleft[3].addEventListener('click',function(){pmovr_l2(-1);}, false);
// layer 2//



//////////////*********////////////////

// layer 1//
//arrow and delay section//
//pleft arrow
/*
function fplpress_l12(p,pch){
    pvmovlr=p+pvmovlr;
    //right

    if(pch==1){

         pright[4].className='right prpress';
    pright[4].style.zIndex='-1'; pright[4].style.backgroundSize='98%';


     if((pvmovlr>-4)&(pvmovlr<4)){

         setTimeout( function(){vprpress_reset_l12();},200);  }
         if(pvmovlr>3){
         setTimeout( function(){vprpress_reset_l12();},1000); 
             pvmovlr=3;  }}

    function vprpress_reset_l12(){
     pright[4].style.zIndex='0';
    pright[4].className='right';
    pright[4].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft[4].style.zIndex='-1';
    pleft[4].className='left plpress';
    pleft[4].style.backgroundSize='98%';


             if((pvmovlr>-4)&(pvmovlr<4)){
 setTimeout( function(){vplpress_reset_l12();},200);
             }


        if(pvmovlr<-3){

         setTimeout( function(){vplpress_reset_l12();},1000);
             pvmovlr=-3;
      }


}}
function vplpress_reset_l12(){

    pleft[4].className='left';
    pleft[4].style.backgroundSize='100%';
     pleft[4].style.zIndex='0';
}
//left


pleft[4].addEventListener('click',function(){fplpress_l12(-1,0);}, false);
pright[4].addEventListener('click',function(){fplpress_l12(+1,1);}, false);
//arrow and delay section//


function pmovr_l12(n)
{
    pvmov_l12=pvmov_l12+n;
    if(pvmov_l12>3)
        {pvmov_l12=3;
        pl1pics[4].className='pl1pics pl2right';
             setTimeout( function(){pl1rreset();},1200);
        }

    function pl1rreset(){ pl1pics[4].className='pl1pics';}

    if(pvmov_l12<-3)
        {pvmov_l12=-3;

pl1pics[4].className='pl1pics pl2left';
             setTimeout( function(){pl1rreset();},1200);
        }
    if(pvmov_l12==1){
    pl1pics[4].style.left='-33%';}

   if(pvmov_l12==2){
    pl1pics[4].style.left='-66%';}
   if(pvmov_l12==3){
    pl1pics[4].style.left='-99%';}


    if(pvmov_l12==0){
    pl1pics[4].style.left='0%';}
    if(pvmov_l12==-1){
    pl1pics[4].style.left='33%';}

   if(pvmov_l12==-2){
    pl1pics[4].style.left='66%';}
      if(pvmov_l12==-3){
    pl1pics[4].style.left='99%';}




}
pright[4].addEventListener('click',function(){pmovr_l12(+1);}, false);
pleft[4].addEventListener('click',function(){pmovr_l12(-1);}, false);*/
// layer 1//

////////////////**********////////////////////






/////////////////desktop section//////////////////////////////


////////////////mobile section///////////////////////////////


var pright_m=document.getElementsByClassName('right_m');
var pleft_m=document.getElementsByClassName('left_m');

// layer 3 // 
//arrow and delay section//

function fplpress_m(p,pch){
    pvmovlr=p+pvmovlr;
    //right

    if(pch==1){

         pright_m[0].className='right_m prpress_m';
    pright_m[0].style.zIndex='-1'; pright_m[0].style.backgroundSize='98%';


     if((pvmovlr>-4)&(pvmovlr<4)){

         setTimeout( function(){vprpress_reset_m();},200);  }
         if(pvmovlr>3){
         setTimeout( function(){vprpress_reset_m();},1000); 
             pvmovlr=3;  }}

    function vprpress_reset_m(){
     pright_m[0].style.zIndex='0';
    pright_m[0].className='right_m';
    pright_m[0].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft_m[0].style.zIndex='-1';
    pleft_m[0].className='left_m plpress_m';
    pleft_m[0].style.backgroundSize='98%';


             if((pvmovlr>-4)&(pvmovlr<4)){
 setTimeout( function(){vplpress_reset_m();},200);
             }


        if(pvmovlr<-3){

         setTimeout( function(){vplpress_reset_m();},1000);
             pvmovlr=-3;
      }


}}
function vplpress_reset_m(){

    pleft_m[0].className='left_m';
    pleft_m[0].style.backgroundSize='100%';
     pleft_m[0].style.zIndex='0';
}
//left


pleft_m[0].addEventListener('click',function(){fplpress_m(-1,0);}, false);
pright_m[0].addEventListener('click',function(){fplpress_m(+1,1);}, false);
//arrow and delay section//



function pmovr_m(n)
{
    pvmov=pvmov+n;
    if(pvmov>4)
        {pvmov=4;
        pl1pics[0].className='pl1pics pl1right_m';
             setTimeout( function(){pl1rreset();},1200);
        }

    function pl1rreset(){ pl1pics[0].className='pl1pics';}

    if(pvmov<-4)
        {pvmov=-4;

pl1pics[0].className='pl1pics pl1left_m';
             setTimeout( function(){pl1rreset();},1200);
        }
    if(pvmov==1){
    pl1pics[0].style.left='-101%';}

   if(pvmov==2){
    pl1pics[0].style.left='-202%';}
     if(pvmov==3){
    pl1pics[0].style.left='-302%';}
     if(pvmov==4){
    pl1pics[0].style.left='-403%';}

if(pvmov==0){
    pl1pics[0].style.left='0%';}

    
    if(pvmov==-1){
    pl1pics[0].style.left='100%';}

   if(pvmov==-2){
    pl1pics[0].style.left='201%';}
     if(pvmov==-3){
    pl1pics[0].style.left='301%';}
     if(pvmov==-4){
    pl1pics[0].style.left='402%';}



}
pright_m[0].addEventListener('click',function(){pmovr_m(+1);}, false);
pleft_m[0].addEventListener('click',function(){pmovr_m(-1);}, false);
// layer 3 //


// layer 4 // 
//arrow and delay section//

function fplpress_m_l4(p,pch){
    pvmovlr_l4=p+pvmovlr_l4;
    //right

    if(pch==1){

         pright_m[1].className='right_m prpress_m';
    pright_m[1].style.zIndex='-1'; pright_m[1].style.backgroundSize='98%';


     if((pvmovlr_l4>-4)&(pvmovlr_l4<4)){

         setTimeout( function(){vprpress_reset_m_l4();},200);  }
         if(pvmovlr_l4>3){
         setTimeout( function(){vprpress_reset_m_l4();},1000); 
             pvmovlr_l4=3;  }}

    function vprpress_reset_m_l4(){
     pright_m[1].style.zIndex='0';
    pright_m[1].className='right_m';
    pright_m[1].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft_m[1].style.zIndex='-1';
    pleft_m[1].className='left_m plpress_m';
    pleft_m[1].style.backgroundSize='98%';


             if((pvmovlr_l4>-4)&(pvmovlr_l4<4)){
 setTimeout( function(){vplpress_reset_m_l4();},200);
             }


        if(pvmovlr_l4<-3){

         setTimeout( function(){vplpress_reset_m_l4();},1000);
             pvmovlr_l4=-3;
      }


}}
function vplpress_reset_m_l4(){

    pleft_m[1].className='left_m';
    pleft_m[1].style.backgroundSize='100%';
     pleft_m[1].style.zIndex='0';
}
//left


pleft_m[1].addEventListener('click',function(){fplpress_m_l4(-1,0);}, false);
pright_m[1].addEventListener('click',function(){fplpress_m_l4(+1,1);}, false);
//arrow and delay section//



function pmovr_m_l4(n)
{
    pvmov_l4=pvmov_l4+n;
    if(pvmov_l4>4)
        {pvmov_l4=4;
        pl1pics[1].className='pl1pics pl1right_m';
             setTimeout( function(){pl1rreset_l4();},1200);
        }

    function pl1rreset_l4(){ pl1pics[1].className='pl1pics';}

    if(pvmov_l4<-4)
        {pvmov_l4=-4;

pl1pics[1].className='pl1pics pl1left_m';
             setTimeout( function(){pl1rreset_l4();},1200);
        }
    if(pvmov_l4==1){
    pl1pics[1].style.left='-101%';}

   if(pvmov_l4==2){
    pl1pics[1].style.left='-202%';}
     if(pvmov_l4==3){
    pl1pics[1].style.left='-302%';}
     if(pvmov_l4==4){
    pl1pics[1].style.left='-403%';}

if(pvmov_l4==0){
    pl1pics[1].style.left='-0%';}

    
    if(pvmov_l4==-1){
    pl1pics[1].style.left='100%';}

   if(pvmov_l4==-2){
    pl1pics[1].style.left='201%';}
     if(pvmov_l4==-3){
    pl1pics[1].style.left='301%';}
     if(pvmov_l4==-4){
    pl1pics[1].style.left='402%';}



}
pright_m[1].addEventListener('click',function(){pmovr_m_l4(+1);}, false);
pleft_m[1].addEventListener('click',function(){pmovr_m_l4(-1);}, false);
// layer 4 //




// layer 5 // 
//arrow and delay section//

function fplpress_m_l5(p,pch){
    pvmovlr_l5=p+pvmovlr_l5;
    //right

    if(pch==1){

         pright_m[2].className='right_m prpress_m';
    pright_m[2].style.zIndex='-1'; pright_m[2].style.backgroundSize='98%';


     if((pvmovlr_l5>-4)&(pvmovlr_l5<4)){

         setTimeout( function(){vprpress_reset_m_l5();},200);  }
         if(pvmovlr_l5>3){
         setTimeout( function(){vprpress_reset_m_l5();},1000); 
             pvmovlr_l5=3;  }}

    function vprpress_reset_m_l5(){
     pright_m[2].style.zIndex='0';
    pright_m[2].className='right_m';
    pright_m[2].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft_m[2].style.zIndex='-1';
    pleft_m[2].className='left_m plpress_m';
    pleft_m[2].style.backgroundSize='98%';


             if((pvmovlr_l5>-4)&(pvmovlr_l5<4)){
 setTimeout( function(){vplpress_reset_m_l5();},200);
             }


        if(pvmovlr_l5<-3){

         setTimeout( function(){vplpress_reset_m_l5();},1000);
             pvmovlr_l5=-3;
      }


}}
function vplpress_reset_m_l5(){

    pleft_m[2].className='left_m';
    pleft_m[2].style.backgroundSize='100%';
     pleft_m[2].style.zIndex='0';
}
//left


pleft_m[2].addEventListener('click',function(){fplpress_m_l5(-1,0);}, false);
pright_m[2].addEventListener('click',function(){fplpress_m_l5(+1,1);}, false);
//arrow and delay section//



function pmovr_m_l5(n)
{
    pvmov_l5=pvmov_l5+n;
    if(pvmov_l5>4)
        {pvmov_l5=4;
        pl1pics[2].className='pl1pics pl1right_m';
             setTimeout( function(){pl1rreset_l5();},1200);
        }

    function pl1rreset_l5(){ pl1pics[2].className='pl1pics';}

    if(pvmov_l5<-4)
        {pvmov_l5=-4;

pl1pics[2].className='pl1pics pl1left_m';
             setTimeout( function(){pl1rreset_l5();},1200);
        }
    if(pvmov_l5==1){
    pl1pics[2].style.left='-101%';}

   if(pvmov_l5==2){
    pl1pics[2].style.left='-202%';}
     if(pvmov_l5==3){
    pl1pics[2].style.left='-302%';}
     if(pvmov_l5==4){
    pl1pics[2].style.left='-403%';}

if(pvmov_l5==0){
    pl1pics[2].style.left='-0%';}

    
    if(pvmov_l5==-1){
    pl1pics[2].style.left='100%';}

   if(pvmov_l5==-2){
    pl1pics[2].style.left='201%';}
     if(pvmov_l5==-3){
    pl1pics[2].style.left='301%';}
     if(pvmov_l5==-4){
    pl1pics[2].style.left='402%';}



}
pright_m[2].addEventListener('click',function(){pmovr_m_l5(+1);}, false);
pleft_m[2].addEventListener('click',function(){pmovr_m_l5(-1);}, false);
// layer 5 //





// layer 2 // 
//arrow and delay section//

function fplpress_m_l2(p,pch){
    pvmovlr_l2=p+pvmovlr_l2;
    //right

    if(pch==1){

         pright_m[3].className='right_m prpress_m';
    pright_m[3].style.zIndex='-1'; pright_m[3].style.backgroundSize='98%';


     if((pvmovlr_l2>-4)&(pvmovlr_l2<4)){

         setTimeout( function(){vprpress_reset_m_l2();},200);  }
         if(pvmovlr_l2>3){
         setTimeout( function(){vprpress_reset_m_l2();},1000); 
             pvmovlr_l2=3;  }}

    function vprpress_reset_m_l2(){
     pright_m[3].style.zIndex='0';
    pright_m[3].className='right_m';
    pright_m[3].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft_m[3].style.zIndex='-1';
    pleft_m[3].className='left_m plpress_m';
    pleft_m[3].style.backgroundSize='98%';


             if((pvmovlr_l2>-4)&(pvmovlr_l2<4)){
 setTimeout( function(){vplpress_reset_m_l2();},200);
             }


        if(pvmovlr_l2<-3){

         setTimeout( function(){vplpress_reset_m_l2();},1000);
             pvmovlr_l2=-3;
      }


}}
function vplpress_reset_m_l2(){

    pleft_m[3].className='left_m';
    pleft_m[3].style.backgroundSize='100%';
     pleft_m[3].style.zIndex='0';
}
//left


pleft_m[3].addEventListener('click',function(){fplpress_m_l2(-1,0);}, false);
pright_m[3].addEventListener('click',function(){fplpress_m_l2(+1,1);}, false);
//arrow and delay section//



function pmovr_m_l2(n)
{
    pvmov_l2=pvmov_l2+n;
    if(pvmov_l2>4)
        {pvmov_l2=4;
        pl1pics[3].className='pl1pics pl1right_m_p';
             setTimeout( function(){pl1rreset_l2();},1200);
        }

    function pl1rreset_l2(){ pl1pics[3].className='pl1pics';}

    if(pvmov_l2<-4)
        {pvmov_l2=-4;

pl1pics[3].className='pl1pics pl1left_m_p';
             setTimeout( function(){pl1rreset_l2();},1200);
        }
    if(pvmov_l2==1){
    pl1pics[3].style.left='-101%';}

   if(pvmov_l2==2){
    pl1pics[3].style.left='-202%';}
     if(pvmov_l2==3){
    pl1pics[3].style.left='-302%';}
     if(pvmov_l2==4){
    pl1pics[3].style.left='-403%';}

if(pvmov_l2==0){
    pl1pics[3].style.left='-0%';}

    
    if(pvmov_l2==-1){
    pl1pics[3].style.left='100%';}

   if(pvmov_l2==-2){
    pl1pics[3].style.left='201%';}
     if(pvmov_l2==-3){
    pl1pics[3].style.left='301%';}
     if(pvmov_l2==-4){
    pl1pics[3].style.left='402%';}



}
pright_m[3].addEventListener('click',function(){pmovr_m_l2(+1);}, false);
pleft_m[3].addEventListener('click',function(){pmovr_m_l2(-1);}, false);
// layer 2 //





/////////**************/////////////

// layer 1 // 
//arrow and delay section//
/*
function fplpress_m_l12(p,pch){
    pvmovlr_l12=p+pvmovlr_l12;
    //right

    if(pch==1){

         pright_m[4].className='right_m prpress_m';
    pright_m[4].style.zIndex='-1'; pright_m[4].style.backgroundSize='98%';


     if((pvmovlr_l12>-4)&(pvmovlr_l12<4)){

         setTimeout( function(){vprpress_reset_m_l12();},200);  }
         if(pvmovlr_l12>3){
         setTimeout( function(){vprpress_reset_m_l12();},1000); 
             pvmovlr_l12=3;  }}

    function vprpress_reset_m_l12(){
     pright_m[4].style.zIndex='0';
    pright_m[4].className='right_m';
    pright_m[4].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft_m[4].style.zIndex='-1';
    pleft_m[4].className='left_m plpress_m';
    pleft_m[4].style.backgroundSize='98%';


             if((pvmovlr_l12>-4)&(pvmovlr_l12<4)){
 setTimeout( function(){vplpress_reset_m_l12();},200);
             }


        if(pvmovlr_l12<-3){

         setTimeout( function(){vplpress_reset_m_l12();},1000);
             pvmovlr_l12=-3;
      }


}}
function vplpress_reset_m_l12(){

    pleft_m[4].className='left_m';
    pleft_m[4].style.backgroundSize='100%';
     pleft_m[4].style.zIndex='0';
}
//left


pleft_m[4].addEventListener('click',function(){fplpress_m_l12(-1,0);}, false);
pright_m[4].addEventListener('click',function(){fplpress_m_l12(+1,1);}, false);
//arrow and delay section//



function pmovr_m_l12(n)
{
    pvmov_l12=pvmov_l12+n;
    if(pvmov_l12>4)
        {pvmov_l12=4;
        pl1pics[4].className='pl1pics pl1right_m_p';
             setTimeout( function(){pl1rreset_l12();},1200);
        }

    function pl1rreset_l12(){ pl1pics[4].className='pl1pics';}

    if(pvmov_l12<-4)
        {pvmov_l12=-4;

pl1pics[4].className='pl1pics pl1left_m_p';
             setTimeout( function(){pl1rreset_l12();},1200);
        }
    if(pvmov_l12==1){
    pl1pics[4].style.left='-472.6%';}

   if(pvmov_l12==2){
    pl1pics[4].style.left='-567.7%';}
     if(pvmov_l12==3){
    pl1pics[4].style.left='-662.8%';}
     if(pvmov_l12==4){
    pl1pics[4].style.left='-756.9%';}

if(pvmov_l12==0){
    pl1pics[4].style.left='-376.5%';}

    
    if(pvmov_l12==-1){
    pl1pics[4].style.left='-282.4%';}

   if(pvmov_l12==-2){
    pl1pics[4].style.left='-188.3%';}
     if(pvmov_l12==-3){
    pl1pics[4].style.left='-92.2%';}
     if(pvmov_l12==-4){
    pl1pics[4].style.left='2%';}



}
pright_m[4].addEventListener('click',function(){pmovr_m_l12(+1);}, false);
pleft_m[4].addEventListener('click',function(){pmovr_m_l12(-1);}, false);
*/
// layer 1 //

////////////********************//////////////////////




////////////////mobile serction/////////////////////////////





////////////////tablet section///////////////////////////////


var pright_t=document.getElementsByClassName('right_t');
var pleft_t=document.getElementsByClassName('left_t');


//layer 3//
//arrow and delay section//
//pleft arrow
function fplpress_t(p,pch){
    pvmovlr_l4=p+pvmovlr_l4;
    //right

    if(pch==1){

         pright_t[0].className='right_t prpress_t';
    pright_t[0].style.zIndex='-1'; pright_t[0].style.backgroundSize='98%';


     if((pvmovlr_l4>-4)&(pvmovlr_l4<4)){

         setTimeout( function(){vprpress_reset_t();},200);  }
         if(pvmovlr_l4>3){
         setTimeout( function(){vprpress_reset_t();},1000); 
             pvmovlr_l4=3;  }}

    function vprpress_reset_t(){
     pright_t[0].style.zIndex='0';
    pright_t[0].className='right_t';
    pright_t[0].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft_t[0].style.zIndex='-1';
    pleft_t[0].className='left_t plpress_t';
    pleft_t[0].style.backgroundSize='98%';


             if((pvmovlr_l4>-4)&(pvmovlr_l4<4)){
 setTimeout( function(){vplpress_reset_t();},200);
             }


        if(pvmovlr<-3){

         setTimeout( function(){vplpress_reset_t();},1000);
             pvmovlr=-3;
      }


}}
function vplpress_reset_t(){

    pleft_t[0].className='left_t';
    pleft_t[0].style.backgroundSize='100%';
     pleft_t[0].style.zIndex='0';
}
//left


pleft_t[0].addEventListener('click',function(){fplpress_t(-1,0);}, false);
pright_t[0].addEventListener('click',function(){fplpress_t(+1,1);}, false);
//arrow and delay section//

function pmovr_t(n)
{
    pvmov=pvmov+n;
    if(pvmov>3)
        {pvmov=3;
        pl1pics[0].className='pl1pics pl1right_t';
             setTimeout( function(){pl1rreset();},1200);
        }

    function pl1rreset(){ pl1pics[0].className='pl1pics';}

    if(pvmov<-4)
        {pvmov=-4;

pl1pics[0].className='pl1pics pl1left_t';
             setTimeout( function(){pl1rreset();},1200);
        }
    if(pvmov==1){
    pl1pics[0].style.left='-75%';}

   if(pvmov==2){
    pl1pics[0].style.left='-125%';}
     if(pvmov==3){
    pl1pics[0].style.left='-175%';}
    

if(pvmov==0){
    pl1pics[0].style.left='-25%';}

    
    if(pvmov==-1){
    pl1pics[0].style.left='25%';}

   if(pvmov==-2){
    pl1pics[0].style.left='75%';}
     if(pvmov==-3){
    pl1pics[0].style.left='125%';}
     if(pvmov==-4){
    pl1pics[0].style.left='175%';}
   
   
    


}
pright_t[0].addEventListener('click',function(){pmovr_t(+1);}, false);
pleft_t[0].addEventListener('click',function(){pmovr_t(-1);}, false);

//layer 3//




//layer 4//
//arrow and delay section//
//pleft arrow
function fplpress_t_l4(p,pch){
    pvmovlr_l4=p+pvmovlr_l4;
    //right

    if(pch==1){

         pright_t[1].className='right_t prpress_t';
    pright_t[1].style.zIndex='-1'; pright_t[1].style.backgroundSize='98%';


     if((pvmovlr_l4>-4)&(pvmovlr_l4<4)){

         setTimeout( function(){vprpress_reset_t_l4();},200);  }
         if(pvmovlr_l4>3){
         setTimeout( function(){vprpress_reset_t_l4();},1000); 
             pvmovlr_l4=3;  }}

    function vprpress_reset_t_l4(){
     pright_t[1].style.zIndex='0';
    pright_t[1].className='right_t';
    pright_t[1].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft_t[1].style.zIndex='-1';
    pleft_t[1].className='left_t plpress_t';
    pleft_t[1].style.backgroundSize='98%';


             if((pvmovlr_l4>-4)&(pvmovlr_l4<4)){
 setTimeout( function(){vplpress_reset_t_l4();},200);
             }


        if(pvmovlr_l4<-3){

         setTimeout( function(){vplpress_reset_t_l4();},1000);
             pvmovlr_l4=-3;
      }


}}
function vplpress_reset_t_l4(){

    pleft_t[1].className='left_t';
    pleft_t[1].style.backgroundSize='100%';
     pleft_t[1].style.zIndex='0';
}
//left


pleft_t[1].addEventListener('click',function(){fplpress_t_l4(-1,0);}, false);
pright_t[1].addEventListener('click',function(){fplpress_t_l4(+1,1);}, false);
//arrow and delay section//

function pmovr_t_l4(n)
{
    pvmov_l4=pvmov_l4+n;
    if(pvmov_l4>3)
        {pvmov_l4=3;
        pl1pics[1].className='pl1pics pl1right_t';
             setTimeout( function(){pl1rreset_l4();},1200);
        }

    function pl1rreset_l4(){ pl1pics[1].className='pl1pics';}

    if(pvmov_l4<-4)
        {pvmov_l4=-4;

pl1pics[1].className='pl1pics pl1left_t';
             setTimeout( function(){pl1rreset_l4();},1200);
        }
    if(pvmov_l4==1){
    pl1pics[1].style.left='-75%';}

   if(pvmov_l4==2){
    pl1pics[1].style.left='-125%';}
     if(pvmov_l4==3){
    pl1pics[1].style.left='-175%';}
     

if(pvmov_l4==0){
    pl1pics[1].style.left='-25%';}

    
    if(pvmov_l4==-1){
    pl1pics[1].style.left='25%';}

   if(pvmov_l4==-2){
    pl1pics[1].style.left='75%';}
     if(pvmov_l4==-3){
    pl1pics[1].style.left='125%';}
      if(pvmov_l4==-4){
    pl1pics[1].style.left='175%';}
   


}
pright_t[1].addEventListener('click',function(){pmovr_t_l4(+1);}, false);
pleft_t[1].addEventListener('click',function(){pmovr_t_l4(-1);}, false);

//layer 4//






//layer 5//
//arrow and delay section//
//pleft arrow
function fplpress_t_l5(p,pch){
    pvmovlr_l5=p+pvmovlr_l5;
    //right

    if(pch==1){

         pright_t[2].className='right_t prpress_t';
    pright_t[2].style.zIndex='-1'; pright_t[2].style.backgroundSize='98%';


     if((pvmovlr_l5>-4)&(pvmovlr_l5<4)){

         setTimeout( function(){vprpress_reset_t_l5();},200);  }
         if(pvmovlr_l5>3){
         setTimeout( function(){vprpress_reset_t_l5();},1000); 
             pvmovlr_l5=3;  }}

    function vprpress_reset_t_l5(){
     pright_t[2].style.zIndex='0';
    pright_t[2].className='right_t';
    pright_t[2].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft_t[2].style.zIndex='-1';
    pleft_t[2].className='left_t plpress_t';
    pleft_t[2].style.backgroundSize='98%';


             if((pvmovlr_l5>-4)&(pvmovlr_l5<4)){
 setTimeout( function(){vplpress_reset_t_l5();},200);
             }


        if(pvmovlr_l5<-3){

         setTimeout( function(){vplpress_reset_t_l5();},1000);
             pvmovlr_l5=-3;
      }


}}
function vplpress_reset_t_l5(){

    pleft_t[2].className='left_t';
    pleft_t[2].style.backgroundSize='100%';
     pleft_t[2].style.zIndex='0';
}
//left


pleft_t[2].addEventListener('click',function(){fplpress_t_l5(-1,0);}, false);
pright_t[2].addEventListener('click',function(){fplpress_t_l5(+1,1);}, false);
//arrow and delay section//

function pmovr_t_l5(n)
{
    pvmov_l5=pvmov_l5+n;
    if(pvmov_l5>3)
        {pvmov_l5=3;
        pl1pics[2].className='pl1pics pl1right_t';
             setTimeout( function(){pl1rreset_l5();},1200);
        }

    function pl1rreset_l5(){ pl1pics[2].className='pl1pics';}

    if(pvmov_l5<-4)
        {pvmov_l5=-4;

pl1pics[2].className='pl1pics pl1left_t';
             setTimeout( function(){pl1rreset_l5();},1200);
        }
    if(pvmov_l5==1){
    pl1pics[2].style.left='-75%';}

   if(pvmov_l5==2){
    pl1pics[2].style.left='-125%';}
     if(pvmov_l5==3){
    pl1pics[2].style.left='-175%';}
    
if(pvmov_l5==0){
    pl1pics[2].style.left='-25%';}

    
    if(pvmov_l5==-1){
    pl1pics[2].style.left='25%';}

   if(pvmov_l5==-2){
    pl1pics[2].style.left='75%';}
     if(pvmov_l5==-3){
    pl1pics[2].style.left='125%';}
   if(pvmov_l5==-4){
    pl1pics[2].style.left='175%';}
   


}
pright_t[2].addEventListener('click',function(){pmovr_t_l5(+1);}, false);
pleft_t[2].addEventListener('click',function(){pmovr_t_l5(-1);}, false);

//layer 5//



//layer 2//
//arrow and delay section//
//pleft arrow
function fplpress_t_l2(p,pch){
    pvmovlr_l2=p+pvmovlr_l2;
    //right

    if(pch==1){

         pright_t[3].className='right_t prpress_t';
    pright_t[3].style.zIndex='-1'; pright_t[3].style.backgroundSize='98%';


     if((pvmovlr_l2>-4)&(pvmovlr_l2<4)){

         setTimeout( function(){vprpress_reset_t_l2();},200);  }
         if(pvmovlr_l2>3){
         setTimeout( function(){vprpress_reset_t_l2();},1000); 
             pvmovlr_l2=3;  }}

    function vprpress_reset_t_l2(){
     pright_t[3].style.zIndex='0';
    pright_t[3].className='right_t';
    pright_t[3].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft_t[3].style.zIndex='-1';
    pleft_t[3].className='left_t plpress_t';
    pleft_t[3].style.backgroundSize='98%';


             if((pvmovlr_l2>-4)&(pvmovlr_l2<4)){
 setTimeout( function(){vplpress_reset_t_l2();},200);
             }


        if(pvmovlr_l2<-3){

         setTimeout( function(){vplpress_reset_t_l2();},1000);
             pvmovlr_l2=-3;
      }


}}
function vplpress_reset_t_l2(){

    pleft_t[3].className='left_t';
    pleft_t[3].style.backgroundSize='100%';
     pleft_t[3].style.zIndex='0';
}
//left


pleft_t[3].addEventListener('click',function(){fplpress_t_l2(-1,0);}, false);
pright_t[3].addEventListener('click',function(){fplpress_t_l2(+1,1);}, false);
//arrow and delay section//

function pmovr_t_l2(n)
{
    pvmov_l2=pvmov_l2+n;
    if(pvmov_l2>3)
        {pvmov_l2=3;
        pl1pics[3].className='pl1pics pl1right_t_p';
             setTimeout( function(){pl1rreset_l2();},1200);
        }

    function pl1rreset_l2(){ pl1pics[3].className='pl1pics';}

    if(pvmov_l2<-4)
        {pvmov_l2=-4;

pl1pics[3].className='pl1pics pl1left_t_p';
             setTimeout( function(){pl1rreset_l2();},1200);
        }
    if(pvmov_l2==1){
    pl1pics[3].style.left='-75%';}

   if(pvmov_l2==2){
    pl1pics[3].style.left='-125%';}
     if(pvmov_l2==3){
    pl1pics[3].style.left='-175%';}
    

if(pvmov_l2==0){
    pl1pics[3].style.left='-25%';}

    
    if(pvmov_l2==-1){
    pl1pics[3].style.left='25%';}

   if(pvmov_l2==-2){
    pl1pics[3].style.left='75%';}
     if(pvmov_l2==-3){
    pl1pics[3].style.left='125%';}
      if(pvmov_l2==-4){
    pl1pics[3].style.left='175%';}
   


}
pright_t[3].addEventListener('click',function(){pmovr_t_l2(+1);}, false);
pleft_t[3].addEventListener('click',function(){pmovr_t_l2(-1);}, false);

//layer 2//


/////////********////////////
//layer 1//
//arrow and delay section//
//pleft arrow
/*
function fplpress_t_l12(p,pch){
    pvmovlr_l12=p+pvmovlr_l12;
    //right

    if(pch==1){

         pright_t[4].className='right_t prpress_t';
    pright_t[4].style.zIndex='-1'; pright_t[4].style.backgroundSize='98%';


     if((pvmovlr_l12>-4)&(pvmovlr_l12<4)){

         setTimeout( function(){vprpress_reset_t_l12();},200);  }
         if(pvmovlr_l12>3){
         setTimeout( function(){vprpress_reset_t_l12();},1000); 
             pvmovlr_l12=3;  }}

    function vprpress_reset_t_l12(){
     pright_t[4].style.zIndex='0';
    pright_t[4].className='right_t';
    pright_t[4].style.backgroundSize='100%';

}

    //right


    //left 
    if(pch==0){

    pleft_t[4].style.zIndex='-1';
    pleft_t[4].className='left_t plpress_t';
    pleft_t[4].style.backgroundSize='98%';


             if((pvmovlr_l12>-4)&(pvmovlr_l12<4)){
 setTimeout( function(){vplpress_reset_t_l12();},200);
             }


        if(pvmovlr_l12<-3){

         setTimeout( function(){vplpress_reset_t_l12();},1000);
             pvmovlr_l12=-3;
      }


}}
function vplpress_reset_t_l12(){

    pleft_t[4].className='left_t';
    pleft_t[4].style.backgroundSize='100%';
     pleft_t[4].style.zIndex='0';
}
//left


pleft_t[4].addEventListener('click',function(){fplpress_t_l12(-1,0);}, false);
pright_t[4].addEventListener('click',function(){fplpress_t_l12(+1,1);}, false);
//arrow and delay section//

function pmovr_t_l12(n)
{
    pvmov_l12=pvmov_l12+n;
    if(pvmov_l12>3)
        {pvmov_l12=3;
        pl1pics[4].className='pl1pics pl1right_t_p';
             setTimeout( function(){pl1rreset_l12();},1200);
        }

    function pl1rreset_l12(){ pl1pics[4].className='pl1pics';}

    if(pvmov_l12<-3)
        {pvmov_l12=-3;

pl1pics[4].className='pl1pics pl1left_t_p';
             setTimeout( function(){pl1rreset_l12();},1200);
        }
    if(pvmov_l12==1){
    pl1pics[4].style.left='-132%';}

   if(pvmov_l12==2){
    pl1pics[4].style.left='-165%';}
     if(pvmov_l12==3){
    pl1pics[4].style.left='-198%';}
    

if(pvmov_l12==0){
    pl1pics[4].style.left='-99%';}

    
    if(pvmov_l12==-1){
    pl1pics[4].style.left='-66%';}

   if(pvmov_l12==-2){
    pl1pics[4].style.left='-33%';}
     if(pvmov_l12==-3){
    pl1pics[4].style.left='-0%';}
   


}
pright_t[4].addEventListener('click',function(){pmovr_t_l12(+1);}, false);
pleft_t[4].addEventListener('click',function(){pmovr_t_l12(-1);}, false);
*/
//layer 1//
/////////**********/////////////






// tablet design section//




///////////////tablet serction/////////////////////////////

var vpo_land=document.getElementsByClassName('po_land');
var vpo_port=document.getElementsByClassName('po_port');

var vpo_over=document.getElementsByClassName('bi_over');

var vpo_close=document.getElementsByClassName('bi_close');
var vpo_close_p=document.getElementsByClassName('bi_close_p');
var po_n;
var po_n_p;
///land///
function po_show(n){
    if(n<50){
        po_n=n;
    vpo_over[0].style.display='flex';
        vpo_close_p[0].style.display='none';
        vpo_close[0].style.display='block';
    vpo_land[po_n].className='po_land po_wide';
    }
    else{
     vpo_land[po_n].className='po_land';
    }
}


function po_close(){
       vpo_over[0].style.display='none'; 
    po_show(51);
     
}
///land//
///port//

function po_show_p(n){
    if(n<50){
        po_n_p=n;
    vpo_over[0].style.display='flex';
        vpo_close_p[0].style.display='block';
        vpo_close[0].style.display='none';
    vpo_port[po_n_p].className='po_port po_wide_p';
    }
    else{
     vpo_port[po_n_p].className='po_port';
    }
}



function po_close_p(){
       vpo_over[0].style.display='none'; 
    po_show_p(51);
     
}




///portait//



vpo_close_p[0].addEventListener('click',function(){po_close_p();},false);

vpo_port[0].addEventListener('click',function(){po_show_p(0);},false);

vpo_port[1].addEventListener('click',function(){po_show_p(1);},false);
vpo_port[2].addEventListener('click',function(){po_show_p(2);},false);
vpo_port[3].addEventListener('click',function(){po_show_p(3);},false);
vpo_port[4].addEventListener('click',function(){po_show_p(4);},false);
vpo_port[5].addEventListener('click',function(){po_show_p(5);},false);
vpo_port[6].addEventListener('click',function(){po_show_p(6);},false);
vpo_port[7].addEventListener('click',function(){po_show_p(7);},false);
vpo_port[8].addEventListener('click',function(){po_show_p(8);},false);
vpo_port[9].addEventListener('click',function(){po_show_p(9);},false);
vpo_port[10].addEventListener('click',function(){po_show_p(10);},false);
vpo_port[11].addEventListener('click',function(){po_show_p(11);},false);
vpo_port[12].addEventListener('click',function(){po_show_p(12);},false);
vpo_port[13].addEventListener('click',function(){po_show_p(13);},false);
vpo_port[14].addEventListener('click',function(){po_show_p(14);},false);
vpo_port[15].addEventListener('click',function(){po_show_p(15);},false);
vpo_port[16].addEventListener('click',function(){po_show_p(16);},false);
vpo_port[17].addEventListener('click',function(){po_show_p(17);},false);


//portrain//




///land//

vpo_close[0].addEventListener('click',function(){po_close();},false);
vpo_land[0].addEventListener('click',function(){po_show(0);},false);
vpo_land[1].addEventListener('click',function(){po_show(1);},false);
vpo_land[2].addEventListener('click',function(){po_show(2);},false);
vpo_land[3].addEventListener('click',function(){po_show(3);},false);
vpo_land[4].addEventListener('click',function(){po_show(4);},false);
vpo_land[5].addEventListener('click',function(){po_show(5);},false);
vpo_land[6].addEventListener('click',function(){po_show(6);},false);
vpo_land[7].addEventListener('click',function(){po_show(7);},false);
vpo_land[8].addEventListener('click',function(){po_show(8);},false);
vpo_land[9].addEventListener('click',function(){po_show(9);},false);
vpo_land[10].addEventListener('click',function(){po_show(10);},false);
vpo_land[11].addEventListener('click',function(){po_show(11);},false);
vpo_land[12].addEventListener('click',function(){po_show(12);},false);
vpo_land[13].addEventListener('click',function(){po_show(13);},false);
vpo_land[14].addEventListener('click',function(){po_show(14);},false);
vpo_land[15].addEventListener('click',function(){po_show(15);},false);
vpo_land[16].addEventListener('click',function(){po_show(16);},false);
vpo_land[17].addEventListener('click',function(){po_show(17);},false);
vpo_land[18].addEventListener('click',function(){po_show(18);},false);
vpo_land[19].addEventListener('click',function(){po_show(19);},false);
vpo_land[20].addEventListener('click',function(){po_show(20);},false);
vpo_land[21].addEventListener('click',function(){po_show(21);},false);
vpo_land[22].addEventListener('click',function(){po_show(22);},false);
vpo_land[23].addEventListener('click',function(){po_show(23);},false);
vpo_land[24].addEventListener('click',function(){po_show(24);},false);
vpo_land[25].addEventListener('click',function(){po_show(25);},false);
vpo_land[26].addEventListener('click',function(){po_show(26);},false);

//land//




///////////////START: imag modal/////////////////////////////






///////////////END: imag modal/////////////////////////////



/////s: form///


/////e: form///









































