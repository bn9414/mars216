//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
//end preloads screen//



var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);


var wswit= document.getElementsByClassName('wswit');

var wsin= document.getElementsByClassName('wsin');

var scon=document.getElementsByClassName('scon');




function wswitch(n){
    
    wsin[0].style.backgroundColor="rgba(255,255,255,0)";
     wsin[1].style.backgroundColor="rgba(255,255,255,0)";
     wsin[2].style.backgroundColor="rgba(255,255,255,0)";
      wsin[3].style.backgroundColor="rgba(255,255,255,0)";
     
     

wsin[n].style.backgroundColor="#25c485";
       scon[0].style.display="none";
    scon[1].style.display="none";
    scon[2].style.display="none"
     scon[3].style.display="none"
    
    
    scon[n].style.display="flex";
    

}



wswitch(0);

wswit[0].addEventListener('click',function() {wswitch(0);}, false);

wswit[1].addEventListener('click',function() {wswitch(1);}, false);

wswit[2].addEventListener('click',function() {wswitch(2);}, false);

wswit[3].addEventListener('click',function() {wswitch(3);}, false);





var tswit= document.getElementsByClassName('tswit');

var tsin= document.getElementsByClassName('tsin');
var tall= document.getElementsByClassName('tall');
function tswitch(n){
    
    tsin[0].style.backgroundColor="#fcfcfc";
     tsin[1].style.backgroundColor="#fcfcfc";
     tsin[2].style.backgroundColor="#fcfcfc";
     tsin[3].style.backgroundColor="#fcfcfc";

    tall[0].style.display="none";tall[1].style.display="none";tall[2].style.display="none";tall[3].style.display="none";
    
     tall[n].style.display="block";tsin[n].style.backgroundColor="#25c485";
    

}
if(w<699){
tswitch(0);
}
tswit[0].addEventListener('click',function() {tswitch(0);}, false);

tswit[1].addEventListener('click',function() {tswitch(1);}, false);

tswit[2].addEventListener('click',function() {tswitch(2);}, false);

tswit[3].addEventListener('click',function() {tswitch(3);}, false);






















var phil=document.getElementsByClassName("phil");
var tblock=document.getElementsByClassName('tblock');

var jtaruvp=document.getElementsByClassName("jtaruvp");

var backlay=document.getElementsByClassName("backlay");

var fvect=document.getElementsByClassName("fvect");
window.onscroll = function() {scrollani()};

function scrollani() {
    /* home*/
    
         if((w>300)& (w<399)){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

        phil[0].style.backgroundPosition="0px 250px";
        
   

      }}
    
    
        if((w>400)& (w<549)){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

        phil[0].style.backgroundPosition="0px 200px";
        
   

      }}
    
    
 if(w>900){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {

        phil[0].style.backgroundPosition="0px 0px";
        
        jtaruvp[0].style.opacity="1";
        jtaruvp[0].style.left="0px";

      }}
    
    

    
    
    
    
    
    
    
    if(w>800){
       if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
fvect[0].style.opacity="1";
        fvect[0].style.top="0px";
      

      }}
    
       if(w<800){
       if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
fvect[0].style.opacity="1";
        fvect[0].style.top="0px";
      

      }}
    
      if(w<500){
       if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
fvect[0].style.opacity="1";
        fvect[0].style.top="0px";
      

      }}
    

        if(w>699){
         if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {

        tblock[0].style.top="0px";
              tblock[0].style.opacity="1";

      }}
    
    

        
}






