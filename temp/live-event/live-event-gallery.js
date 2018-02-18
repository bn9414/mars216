//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

var vbi_m=document.getElementsByClassName('mg');

var vbi_d=document.getElementsByClassName('con');
var vbi_over=document.getElementsByClassName('bi_over');
var vbi_close=document.getElementsByClassName('bi_close');

function bi_fun(n,q){
    if(q==0){
  
    vbi_over[0].style.display='flex'; 
    vbi_d[n].className='ex con';
}
    if(q==1){
          vbi_over[0].style.display='flex'; 
    vbi_d[n].className='ex_p con';
    }
}

function bi_hide(){
    vbi_over[0].style.display='none'; 
    vbi_d[0].className='ptp con';
     vbi_d[1].className='ptl con';
     vbi_d[2].className='ptl con';
     vbi_d[3].className='ptl con';
     vbi_d[4].className='ptl con';
     vbi_d[5].className='ptp con';
       vbi_d[6].className='ptl con';
     vbi_d[7].className='ptl con';
     vbi_d[8].className='ptp con';
     vbi_d[9].className='ptp con';
     vbi_d[10].className='ptl con';
     vbi_d[11].className='ptl con';
       vbi_d[12].className='ptl con';
     vbi_d[13].className='ptl con';
     vbi_d[14].className='ptp con';
     vbi_d[15].className='ptl con';
     vbi_d[16].className='ptl con';
     vbi_d[17].className='ptp con';
      vbi_d[18].className='ptl con';
      vbi_d[19].className='ptl con';
    vbi_d[20].className='ptl con';
    vbi_d[21].className='ptl con';
    vbi_d[22].className='ptl con';  
    vbi_d[23].className='ptl con';

    vbi_d[24].className='ptl con';
    vbi_d[25].className='ptl con';
    vbi_d[26].className='ptl con';  
    vbi_d[27].className='ptl con';
vbi_d[28].className='ptp con';  


    
    
}

vbi_close[0].addEventListener('click',function(){bi_hide();}, false);
vbi_m[0].addEventListener('click',function(){bi_fun(0,1);}, false);
vbi_m[1].addEventListener('click',function(){bi_fun(1,0);}, false);
vbi_m[2].addEventListener('click',function(){bi_fun(2,0);}, false);
vbi_m[3].addEventListener('click',function(){bi_fun(3,0);}, false);
vbi_m[4].addEventListener('click',function(){bi_fun(4,0);}, false);
vbi_m[5].addEventListener('click',function(){bi_fun(5,1);}, false);
vbi_m[6].addEventListener('click',function(){bi_fun(6,0);}, false);
vbi_m[7].addEventListener('click',function(){bi_fun(7,0);}, false);
vbi_m[8].addEventListener('click',function(){bi_fun(8,1);}, false);
vbi_m[9].addEventListener('click',function(){bi_fun(9,1);}, false);
vbi_m[10].addEventListener('click',function(){bi_fun(10,0);}, false);
vbi_m[11].addEventListener('click',function(){bi_fun(11,0);}, false);
vbi_m[12].addEventListener('click',function(){bi_fun(12,0);}, false);
vbi_m[13].addEventListener('click',function(){bi_fun(13,0);}, false);
vbi_m[14].addEventListener('click',function(){bi_fun(14,1);}, false);
vbi_m[15].addEventListener('click',function(){bi_fun(15,0);}, false);
vbi_m[16].addEventListener('click',function(){bi_fun(16,0);}, false);
vbi_m[17].addEventListener('click',function(){bi_fun(17,1);}, false);
vbi_m[18].addEventListener('click',function(){bi_fun(18,0);}, false);
vbi_m[19].addEventListener('click',function(){bi_fun(19,0);}, false);
vbi_m[20].addEventListener('click',function(){bi_fun(20,0);}, false);
vbi_m[21].addEventListener('click',function(){bi_fun(21,0);}, false);
vbi_m[22].addEventListener('click',function(){bi_fun(22,0);}, false);
vbi_m[23].addEventListener('click',function(){bi_fun(23,0);}, false);

vbi_m[24].addEventListener('click',function(){bi_fun(24,0);}, false);
vbi_m[25].addEventListener('click',function(){bi_fun(25,0);}, false);
vbi_m[26].addEventListener('click',function(){bi_fun(26,0);}, false);
vbi_m[27].addEventListener('click',function(){bi_fun(27,0);}, false);
vbi_m[28].addEventListener('click',function(){bi_fun(28,1);}, false);


