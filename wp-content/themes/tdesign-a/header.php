<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

    <meta charset="<?php bloginfo('charset'); ?>">
    <!--[if lt IE 10]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <![endif]-->
    <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1">
    <title><?php
        global $page, $paged;
        wp_title('|', true, 'right');
        bloginfo('name');
        $site_description = get_bloginfo('description', 'display');
        if ($site_description && (is_home() || is_front_page())) {
            echo " | $site_description";
        }
        if ($paged >= 2 || $page >= 2) {
            echo ' | ' . sprintf(__('Page %s', 'cTpl'), max($paged, $page));
        }
        ?></title>

    <link rel="stylesheet" media="all" href="<?php bloginfo('stylesheet_url'); ?>?ver=<?php echo rand(); ?>">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <script>
        (function(d) {
            var config = {
                    kitId: 'ztd5iem',
                    scriptTimeout: 3000,
                    async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
    </script>

    <!--CDN-->
    <link rel="stylesheet" href="https://use.typekit.net/ycj5opp.css">
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/all.css" rel="stylesheet">
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/slick.min.css" rel="stylesheet">
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/slick-theme.min.css" rel="stylesheet">

    <!--stylesheet-->
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/animate.css" rel="stylesheet">
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/destyle.css" rel="stylesheet">
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/drawer.min.css" rel="stylesheet">
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/common.css" rel="stylesheet">
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/style.css" rel="stylesheet">
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/upgrade.css" rel="stylesheet">

    <?php
    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js', array(), '2.2.4');
    wp_head();
    ?>

    <script src="<?php bloginfo('template_directory'); ?>/assets/js/iscroll.min.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/assets/js/jquery.inview.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/assets/js/ofi.min.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/assets/js/slick.min.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/assets/js/slider.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/assets/js/drawer.min.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/assets/js/common.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/assets/js/main.js"></script>

    <!-- Google Tag Manager -->
<!--    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':-->
<!--                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],-->
<!--            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=-->
<!--            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);-->
<!--        })(window,document,'script','dataLayer','GTM-K3DC3L7');</script>-->
    <!-- End Google Tag Manager -->

<!--    <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?Wp9v7ZoPD1Y%3D&box=l5sr6mqpDb4%3D&aa=1&ab=2"></script>-->

</head>

<body <?php body_class(); ?>>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3DC3L7" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div class="wrapper">

    <div class="header-wrap">
        <header id="header">
            <div class="header-logo">
                <a href="/">
						<span class="header-logo-slider">
							<img src="<?php bloginfo('template_directory'); ?>/images/logo-1.svg" class="slide-item" alt="Tokyo Design ARTS">
							<img src="<?php bloginfo('template_directory'); ?>/images/logo-2.svg" class="slide-item" alt="Tokyo Design ARTS">
							<img src="<?php bloginfo('template_directory'); ?>/images/logo-3.svg" class="slide-item" alt="Tokyo Design ARTS">
							<img src="<?php bloginfo('template_directory'); ?>/images/logo-4.svg" class="slide-item" alt="Tokyo Design ARTS">
							<img src="<?php bloginfo('template_directory'); ?>/images/logo-5.svg" class="slide-item" alt="Tokyo Design ARTS">
						</span>
                    <span class="under">
							<img src="<?php bloginfo('template_directory'); ?>/images/logo-0.svg" class="pc" alt="Tokyo Design ARTS">
							<img src="<?php bloginfo('template_directory'); ?>/images/logo-0-sp.svg"class="sp" alt="Tokyo Design ARTS">
						</span>
                </a>
            </div>
            <nav class="header-menu">
                <ul class="flex-L flex-column en">
                    <li><a class="hov-C" href="#about">About Us</a></li>
                    <li><a class="hov-C" href="#service">Our Business</a></li>
                    <li><a href="#company">Company Information</a></li>
                    <li><a class="btn-recruit btn-link" href="#recruit">Recruit</a></li>
                    <li><a class="btn-contact btn-link" href="/contact/">Contact US</a></li>
                </ul>
            </nav>
        </header>
        <div class="drawer-box">
            <button type="button" class="drawer-toggle drawer-hamburger">
                <span class="sr-only">toggle navigation</span>
                <span class="drawer-hamburger-icon"></span>
            </button>
            <nav class="drawer-nav">
                <div class="header-logo">
                    <a href="/">
                        <img src="<?php bloginfo('template_directory'); ?>/images/logo-sp.svg" alt="Tokyo Design ARTS">
                    </a>
                </div>
                <ul class="drawer-menu">
                    <li><a class="hov-C" href="#about">About Us</a></li>
                    <li><a class="hov-C" href="#service">Our Business</a></li>
                    <li><a href="#news">Corporate News</a></li>
                    <li><a href="#company">Company Information</a></li>
                    <li><a class="hov-G" href="#recruit">Recruit</a></li>
                    <li><a class="hov-M" href="#contact">Contact US</a></li>
                </ul>
                <p class="copyright">Copyright ©Tokyo Design ARTS, Inc.</p>
            </nav>
        </div>
    </div>

    <main role="main">