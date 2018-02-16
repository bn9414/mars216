//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var kimg= document.getElementsByClassName('kimg');
        var ktxt= document.getElementsByClassName('ktxt');

function portfullf(){
kimg[0].style.top="0px";
    ktxt[0].style.top="0px";
    kimg[0].style.opacity="1";
    ktxt[0].style.opacity="1";
    
    kimg[1].style.top="0px";
    ktxt[1].style.top="0px";
    kimg[1].style.opacity="1";
    ktxt[1].style.opacity="1";
    
    kimg[2].style.top="0px";
    ktxt[2].style.top="0px";
    kimg[2].style.opacity="1";
    ktxt[2].style.opacity="1";
    
    kimg[3].style.top="0px";
    ktxt[3].style.top="0px";
    kimg[3].style.opacity="1";
    ktxt[3].style.opacity="1";

}

portfullf();

    });




var whtxt= document.getElementsByClassName('whtxt');
var jtar= document.getElementsByClassName('jtar');
window.onscroll = function() {scrollani()};
  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
function scrollani() {
    /* build*/
 if(w>500){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
whtxt[0].style.left="0px";
        whtxt[0].style.opacity="1";
        
        
      }
     
 }
    
    if(w<740){
    if (document.body.scrollTop > 670 || document.documentElement.scrollTop > 670) {
    
       whtxt[0].style.left="0px";
        whtxt[0].style.opacity="1"; 
    }   
 }

////////over of who and what///
    if(w>800){ 
     if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
jtar[0].style.top="0px";
        jtar[1].style.top="0px";
         jtar[0].style.opacity="1";
        jtar[1].style.opacity="1";
        
      }}

    
       if(w>740&&w<800){ 
     if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
jtar[0].style.top="0px";
        jtar[1].style.top="0px";
         jtar[0].style.opacity="1";
        jtar[1].style.opacity="1";
        
      }}
    
    
          if(w<740){ 
     if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
jtar[0].style.top="0px";
        jtar[1].style.top="0px";
         jtar[0].style.opacity="1";
        jtar[1].style.opacity="1";
        
      }}

    
    



}