$(".title-down").click(function(){
    $("body").animate({scrollTop: $(window).height()}, 500);
    ga('send', 'event', 'button', 'click', 'title-down');
});

$(".p1").click(function() {
   ga('send', 'event', 'button', 'click', 'p1');
});

$(".p2").click(function() {
   ga('send', 'event', 'button', 'click', 'p2');
});

$(".p3").click(function() {
   ga('send', 'event', 'button', 'click', 'p3');
});

$(".p4").click(function() {
   ga('send', 'event', 'button', 'click', 'p4');
});

$(".fa-linkedin-square").click(function() {
	ga('send', 'event', 'button', 'click', 'linkedIn');
})

$(".fa-github-square").click(function() {
	ga('send', 'event', 'button', 'click', 'github');
})

$(".fa-twitter-square").click(function() {
	ga('send', 'event', 'button', 'click', 'twitter');
})

$(".fa-mail-square").click(function() {
	ga('send', 'event', 'button', 'click', 'mail');
})