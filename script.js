$(".title-down").click(function(){
    $("body").animate({scrollTop: $(window).height()}, 500);
    ga('send', 'event', 'button', 'click', 'title-down');
});

$('a').click(function() {
  ga('send', 'event', 'link', 'click', $(this).attr('href'));
});