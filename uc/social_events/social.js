var info = document.getElementsByClassName("info-ev");
var infoev = document.getElementsByClassName("ev1-inf");



window.onscroll = function(){
    infovie()
};

var h = parseInt(window.innerHeight);

var w = parseInt(window.innerWidth);




function infovie(){
if(w > 700){
if(document.body.scrollTop >700 || document.documentElement.scrollTop > 700){
    for(i=0;i<info.length;i++){
    info[i].style.right="10px";
        info[i].style.opacity="1";
    info[i].style.animation="rg 1s";
    info[i].style.transition="right 1s";
  }  

     for(i=0;i<infoev.length;i++){
        infoev[i].style.left="10px";
        infoev[i].style.opacity="1";
        infoev[i].style.animation="lg 1s";
        infoev[i].style.transition="left 1s";
}
    
    

    }
}
}