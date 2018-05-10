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
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      /*$(this).addClass('active');*/
       
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});