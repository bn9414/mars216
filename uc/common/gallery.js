

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
