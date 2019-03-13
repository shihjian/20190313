$(document).scroll(function(){
    $('.navbar').toggleClass('scrolled',$(this).scrollTop() > $('.navbar').height());
});

$('.scrollTop').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos=$(target).offset().top;
    console.log(target,targetPos)
    $('html,body').animate({scrollTop:targetPos},1000);

});

