//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var carhd= document.getElementById('carhd');
         var carp= document.getElementById('carp');

function portfullf(){
carhd.style.left="0px";
    carhd.style.opacity="1";
    carp.style.left="0px";
    carp.style.opacity="1";

}

portfullf();

    });





var area=document.getElementsByClassName('area');
var click=document.getElementsByClassName('click');
var more=document.getElementsByClassName('more');
var less=document.getElementsByClassName('less');
var benp=document.getElementsByClassName('ben1p');
var b_para=document.getElementsByClassName('b_para');



function benvis(n){
            benp[n].style.display="block";
            more[n].style.display="none";
            less[n].style.display="block";
    b_para[n].className='b_para b_paraani';
  
}

function benvisc(n){
    benp[n].style.display="none";
            more[n].style.display="block";
            less[n].style.display="none";
}
function benclose(n){
  b_para[n].className='b_para b_paraanid';
    setTimeout(function(){benvisc(n);},400);
    
}

more[0].addEventListener('click',function(){benvis(0);},false);
more[1].addEventListener('click',function(){benvis(1);},false);
more[2].addEventListener('click',function(){benvis(2);},false);
more[3].addEventListener('click',function(){benvis(3);},false);


less[0].addEventListener('click',function(){benclose(0);},false);
less[1].addEventListener('click',function(){benclose(1);},false);
less[2].addEventListener('click',function(){benclose(2);},false);
less[3].addEventListener('click',function(){benclose(3);},false);



var index=document.getElementById('index');

    
    


/* start:benefits_desk*/
var benx=0;
var bup=document.getElementsByClassName('benup');
var bdown=document.getElementsByClassName('bendown');
var ben1=document.getElementsByClassName('ben1');






function scrollanib() {

  if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
  
    
      
           ben1[0].style.opacity='1';
        ben1[1].style.opacity='1';
        ben1[2].style.opacity='1';
        ben1[3].style.opacity='1';
  
  }
 
}

function benmove(n){
    if(n==0){
    ben1[0].style.top='520px';
        ben1[1].style.top='520px';
        ben1[2].style.top='520px';
        ben1[3].style.top='520px';
    }
    
    if(n==1){
    ben1[0].style.top='170px';
        ben1[1].style.top='170px';
        ben1[2].style.top='170px';
        ben1[3].style.top='170px';
    }
    
       if(n==2){
    ben1[0].style.top='-170px';
        ben1[1].style.top='-170px';
        ben1[2].style.top='-170px';
        ben1[3].style.top='-170px';
    }
    
       if(n==3){
    ben1[0].style.top='-520px';
        ben1[1].style.top='-520px';
        ben1[2].style.top='-520px';
        ben1[3].style.top='-520px';
    }
   
    
}

function benreset(){
    
   ben1[0].className="ben1";
    ben1[3].className="ben1";
}

function incri(n)
{benx=benx+n;
 if(benx>3){benx=3;
          
             ben1[3].className="ben1 ben1_dani";
            setTimeout(benreset,500);
           }
  if(benx<0){benx=0;  
             ben1[0].className="ben1 ben1_uani";
            setTimeout(benreset,500);
            
            }
 benmove(benx);
    
    
}

bdown[0].addEventListener('click',function(){incri(+1);},false);
bup[0].addEventListener('click',function(){incri(-1);},false);

/* end:benefits_desk*/