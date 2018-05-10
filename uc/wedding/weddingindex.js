



var prev = document.getElementById('prev');
prev.addEventListener('click',function(){
  incre(-1);},false);

var nxt = document.getElementById('nxt');
nxt.addEventListener('click',function(){
  incre(1);
    clearInterval(xset);

},false);
 var ban = document.getElementsByClassName('ban');

var j =0;

 function incre(k){
     j = j + k;
     if(j == -1){
         j = ban.length-1;
     }
     if(j == ban.length){
         j=0;
     }
    scrollImg(j);
 }
function scrollImg(z){
    ban[0].style.display="none";
    ban[1].style.display="none";
    ban[2].style.display="none";
    ban[3].style.display="none";
    ban[4].style.display="none";
    ban[z].style.display="block";
    
                   
}
scrollImg(0);
var xset= setInterval(function(){incre(1);},3000);

var cirht = document.getElementsByClassName("cirht");
var ser1 = document.getElementsByClassName("ser1");

/*
window.onscroll = function(){
    
};*/

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
    
  if(document.body.scrollTop >1500 || document.documentElement.scrollTop > 1500){
        for(i=0;i<ser1.length;i++){
    ser1[i].style.bottom="0";
        ser1[i].style.opacity="1";
    ser1[i].style.animation="btm 1s";
    ser1[i].style.transition="bottom 1s";
    }
    
    
}  
}
    }



window.onscroll = function() {stricky(),cirhtvew()};

var navbar = document.getElementById("nav1");
var sticky = navbar.offsetTop;

function stricky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 
var webnu = document.getElementsByClassName('wbnu');
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        
        e.preventDefault();
        var target = this.hash;
        
        $target = $(target);
       
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
            console.log(target);
            
        });
    });
});

var sections = $('.sections .div')
  , nav = $('.nav-web1')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  
  var cur_pos = $(this).scrollTop();
  
     
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('.wbnu').removeClass('active');
      /*sections.removeClass('active');*/
      
      /*$(this).addClass('active');*/
       
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });

});



/*
var webnu = document.getElementsByClassName('wbnu');

webnu[0].addEventListener('click',function(){
    active(0)
},false);

webnu[1].addEventListener('click',function(){
    active(1)
},false);

webnu[2].addEventListener('click',function(){
    active(2)
},false);

webnu[3].addEventListener('click',function(){
    active(3)
},false);

webnu[4].addEventListener('click',function(){
    active(4)
},false);

*/


/*function active(w){
    if(w == 0){
        webnu[0].style.borderBottom="3px solid #9b3236";
        webnu[1].style.borderBottom="0px solid #9b3236#9b3236";
        webnu[2].style.borderBottom="0px solid #9b3236";
        webnu[3].style.borderBottom="0px solid #9b3236";
        webnu[4].style.borderBottom="0px solid #9b3236";
    }
      if(w == 1){
        webnu[1].style.borderBottom="3px solid #9b3236";
        webnu[0].style.borderBottom="0px solid #9b3236";
        webnu[2].style.borderBottom="0px solid #9b3236";
        webnu[3].style.borderBottom="0px solid #9b3236";
        webnu[4].style.borderBottom="0px solid #9b3236";
    }
       if(w == 2){
        webnu[2].style.borderBottom="3px solid #9b3236";
        webnu[0].style.borderBottom="0px solid #9b3236";
        webnu[1].style.borderBottom="0px solid #9b3236";
        webnu[3].style.borderBottom="0px solid #9b3236";
        webnu[4].style.borderBottom="0px solid #9b3236";
    }
       if(w == 3){
        webnu[3].style.borderBottom="3px solid #9b3236";
        webnu[0].style.borderBottom="0px solid #9b3236";
        webnu[1].style.borderBottom="0px solid #9b3236";
        webnu[2].style.borderBottom="0px solid #9b3236";
        webnu[4].style.borderBottom="0px solid #9b3236";
    }
      if(w == 3){
        webnu[4].style.borderBottom="3px solid #9b3236";
        webnu[0].style.borderBottom="0px solid #9b3236";
        webnu[1].style.borderBottom="0px solid #9b3236";
        webnu[2].style.borderBottom="0px solid #9b3236";
        webnu[3].style.borderBottom="0px solid #9b3236";
    }
}*/