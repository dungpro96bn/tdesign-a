$(function () {
    $(".page-top-pc").hide();
    $(window).on("scroll", function () {
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        displayPosition = $(".contact-btn").innerHeight();
        if (scrollHeight - scrollPosition <= displayPosition) {
            $(".page-top-pc").fadeIn("300");
        } else {
            $(".page-top-pc").hide();
        }
    });
    $('.page-top-pc').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
$(function () {
    $(".page-top-sp").hide();
    $(window).on("scroll", function () {
        scrollHeightSP = $(document).height();
        scrollPositionSP = $(window).height() + $(window).scrollTop();
        displayPositionSP = $(".recruit-menu").innerHeight();
        if (scrollHeightSP - scrollPositionSP <= displayPositionSP) {
            $(".page-top-sp").fadeIn("300");
        } else {
            $(".page-top-sp").hide();
        }
    });
    $('.page-top-sp').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 600;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop: position}, speed, "swing");
        return false;
    });
});

$(function () {
    $('.under-line').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('active');
        }
        // else {
        // 	$(this).removeClass('pulse');
        // }
    });
});

$(function () {
    $(".drawer").drawer();
    $('.drawer-menu li > a').on('click', function () {
        $('.drawer').drawer('close');
    });
});

//objedt-fit（IE対策）
objectFitImages('img.object-fit');


