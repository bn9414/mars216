var imgdvcon = document.getElementsByClassName("img-dvcon");



window.onscroll = function(){
    corpo()
};

var h = parseInt(window.innerHeight);

var w = parseInt(window.innerWidth);




function corpo(){
if(w > 700){
if(document.body.scrollTop >700 || document.documentElement.scrollTop > 700){
    for(i=0;i<imgdvcon.length;i++){
    imgdvcon[i].style.bottom="0";
        imgdvcon[i].style.opacity="1";
    imgdvcon[i].style.animation="btm 1s";
    imgdvcon[i].style.transition="bottom 1s";
}
    
}
    
    
}
    }