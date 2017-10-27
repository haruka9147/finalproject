(function($){
    $(".navbar-collapse ul li a").click(function(){$(".navbar-toggler:visible").click()});
    /* page top */
    $(function(){
        var btn_pagetopblock = $("#pagetop");
        $(window).on("scroll", function() {
            var off = $('#navbar-example2').offset();
            //console.log(off);
            if(off.top > 100){
                $('#navbar-example2').addClass('off');
            }else{
                $('#navbar-example2').removeClass('off');
            }
            /* page top */
            if ($(this).scrollTop() > 20) {
                btn_pagetopblock.addClass("fade");
            } else {
                btn_pagetopblock.removeClass("fade");
            }
        });
        $('#pagetop a,.navbar-collapse ul li a').click(function(){
            var speed = 500;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    });
    new WOW().init()
    
})(jQuery);

//bootstrap scrollspy
$('body').scrollspy({ target: '#navbar-example' });