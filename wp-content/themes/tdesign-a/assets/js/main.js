jQuery(function ($) {
    // userAgent
    const ua = navigator.userAgent;
    const uaLowerCase = navigator.userAgent.toLowerCase();
    const isSp = ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0);
    const isTablet = ua.indexOf('iPad') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) || ua.indexOf('A1_07') > 0 || ua.indexOf('SC-01C') > 0 || uaLowerCase.indexOf('macintosh') > 0 && 'ontouchend' in document;
    const isPc = (!isSp && !isTablet);

    // AOS.init({
    //     once: true,
    //     duration: 1000,
    //     delay: 0,
    // });


    //scroll
    $(function () {
        $('.scroll').click(function (event) {
            event.preventDefault();
            var url = $(this).attr('href');
            var dest = url.split('#');
            var target = dest[1];
            var target_offset = $('#' + target).offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top}, 500, 'swing');
            return false;
        });
    });

    // $(window).scroll(function () {
    //     $('.border-animation').each(function () {
    //         var ptop = $(this).offset().top;
    //         var scroll = $(window).scrollTop();
    //         var windowHeight = $(window).height() - 150;
    //         if (scroll > ptop - windowHeight) {
    //             $(this).addClass('active');
    //         }
    //     });
    // });
    // $('.border-animation').each(function () {
    //     var ptop = $(this).offset().top;
    //     var firstView = $(window).scrollTop();
    //     var windowHeight = $(window).height() - 150;
    //     if (firstView > ptop - windowHeight) {
    //         $(this).addClass('active');
    //     }
    // });

    var check = $("#contact .item-group:nth-child(6) .error");
    if(check.length !== 0){
        $("#contact .item-group:nth-child(6) .error").text("選んでください");
    }


});