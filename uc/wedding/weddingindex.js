var cirht = document.getElementsByClassName("cirht");



window.onscroll = function(){
    cirhtvew()
};

var h = parseInt(window.innerHeight);

var w = parseInt(window.innerWidth);




function cirhtvew(){
if(w > 700){
if(document.body.scrollTop >700 || document.documentElement.scrollTop > 700){
    for(i=0;i<cirht.length;i++){
    cirht[i].style.bottom="0";
        cirht[i].style.opacity="1";
    cirht[i].style.animation="cir 1s";
    cirht[i].style.transition="bottom 1s";
}
    
}
    
    
}
    }