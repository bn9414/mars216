/*gallery*/
/*var galaact = document.getElementsByClassName('bb-hhd');
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
gallery(1);*/
/*gallery*/

var blck = document.getElementsByClassName('blck');
var close = document.getElementsByClassName('close');
close[0].addEventListener('click',close1,false);
var gg = document.getElementsByClassName('io');


function close1(){
close[0].style.display="none";
       blck[0].style.display="none";
    for(i=0;i<7;i++){
    gg[i].className="gala-im io";
    }
}


document.addEventListener('click', function (event) {
 
    if ( event.target.classList.contains( 'gala-im' ) ) {
        myfun(event.target);

        fun(event.target);     
    }

},false);
       function myfun(a){
         
           if(a.classList.contains('glli')){
               a.classList.remove("glli");
           }else{
               a.classList.add("glli");
           }
       }


function fun(z){
    
    if(z.classList.contains('glli')){
        
   blck[0].style.display="block";
        
    close[0].style.display="block";
        
}else{
    blck[0].style.display="none";
    
   close[0].style.display="none";
}
}
