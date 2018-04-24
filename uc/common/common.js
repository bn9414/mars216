$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});


var bar = document.getElementById('bar-con');
bar.addEventListener('click',toogle,false);
        var bar1 = document.getElementById('bar1');
        var bar2 = document.getElementById('bar2');
        var bar3 = document.getElementById('bar3');

var status = 1

function toogle(){
    if(status == 1){ 
        var mnulist = document.getElementById('navlst');
       
        mnulist.style.left="-100%";
        mnulist.style.opacity="0";
        mnulist.style.transition="1s";
        mnulist.style.display="none";
        
        bar2.style.opacity="1";
        bar2.style.transition="opacity 0.7s";
        bar2.style.background="#993233";
        bar1.style.position="static";
        
        bar1.style.transform="rotate(0deg)";
        bar3.style.position="static";
        bar3.style.transform="rotate(0deg)";
       
    status = 0;
        
    } else if(status == 0){
var mnulist1 = document.getElementById('navlst');
        
        mnulist1.style.left="0px";
        mnulist1.style.opacity="1";
        mnulist1.style.transition="1s";
        mnulist1.style.display="block";
        bar1.style.position="relative";
        
        bar1.style.position="relative";
        bar1.style.transform="rotate(45deg)";
        bar1.style.transition=".4s";
        bar1.style.top="12px";
        
        bar2.style.opacity="0";
        bar2.style.transition="opacity 0.1s";
        bar2.style.background="#fcfcfc";
        bar2.style.transition=".4s";
        
        bar3.style.position="relative";
        bar3.style.transform="rotate(135deg)";
        bar3.style.transition=".4s";
        bar3.style.top="-10px";
    status = 1;
    }
    
}

var bar11 = document.getElementById('bar-con1');
bar11.addEventListener('click',toogle1,false);
        var bar21 = document.getElementById('bar-s1');
        var bar22 = document.getElementById('bar-s2');
        var bar23 = document.getElementById('bar-s3');
var statusof = 1

function toogle1(){
    if(statusof == 1){ 
        var submnu1 = document.getElementById('submnu1');
       
       
        submnu1.style.opacity="0";
        submnu1.style.transition="0.7s";
        
        bar22.style.opacity="1";
        bar22.style.transition="opacity 0.7s";
        bar22.style.background="#993233";
        bar21.style.position="static";
        bar21.style.transform="rotate(0deg)";
        bar23.style.position="static";
        bar23.style.transform="rotate(0deg)";
       
    statusof = 0;
    } else if(statusof == 0){
var submnu2 = document.getElementById('submnu1');
        
        
        submnu2.style.opacity="1";
        submnu2.style.transition="1s";
       
        bar22.style.opacity="0";
        bar22.style.transition="opacity 0.1s";
        bar22.style.background="#fcfcfc";
        bar22.style.transition=".4s";
        bar21.style.position="relative";
        bar21.style.transform="rotate(45deg)";
        bar21.style.transition=".4s";
        bar21.style.top="12px";
        bar23.style.position="relative";
        bar23.style.transform="rotate(135deg)";
        bar23.style.transition=".4s";
        bar23.style.top="-10px";
    statusof = 1;
    }
    
}


