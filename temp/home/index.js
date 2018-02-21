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

