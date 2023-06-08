<?php get_header(); ?>
<?php
global $post;
$post_slug = $post->post_name;
?>

<div id="template-<?php echo $post_slug; ?>" class="template-pageContent">

    <div class="top-url">
        <p>tokyodesignarts.com</p>
    </div>

    <?php
    if (have_posts()) : while (have_posts()) : the_post();
        remove_filter('the_content', 'wpautop');
        the_content();
    endwhile;
    endif;
    ?>

</div>

<?php if ($post_slug == "service") : ?>
    <section id="company">
        <div class="moving-text en">
            <p>We are looking for CreativeStaff for interested in the HR area.</p>
            <p>We are looking for CreativeStaff for interested in the HR area.</p>
        </div>
    </section>
    <section id="recruit">
        <div class="container flex-L">
            <div class="recruit-descr">
                <div class="recruit-inner">
                    <div class="title-entry border-animation">
                        <h2 class="heading-block en">Recruit</h2>
                        <p class="subTtl">採用情報</p>
                    </div>
                    <div class="text-box">
                        <p>現在弊社では、新規事業立ち上げに伴い、<br/>HR領域に興味のある正社員クリエイターを募集中です。<br class="pc-br"/>興味のある方は、右の職種よりお問合せください。
                        </p>
                    </div>
                    <div class="link-page">
                        <a target="_blank" href="https://ten.1049.cc/tp/1049creator/">採用について詳しくはこちら</a>
                    </div>
                </div>
            </div>
            <div class="recruit-menu">
                <ul class="flex-L">
                    <li>
                        <a href="mailto:arts@sougo-group.jp?subject=Tokyo%20Design%20ARTS%20%7C%20%20%E3%80%90%E6%8E%A1%E7%94%A8%E3%80%91%E5%8B%95%E7%94%BB%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%82%BF%E3%83%BC&amp;body="
                           class="icon-link">動画ディレクター</a>
                    </li>
                    <li>
                        <a href="mailto:arts@sougo-group.jp?subject=Tokyo%20Design%20ARTS%20%7C%20%20%E3%80%90%E6%8E%A1%E7%94%A8%E3%80%91%E4%BC%9A%E7%A4%BE%E5%95%86%E6%A8%99%E6%8B%85%E5%BD%93(%E3%83%87%E3%82%B6%E3%82%A4%E3%83%8A%E3%83%BC)&amp;body="
                           class="icon-link">会社商標担当(デザイナー)</a>
                    </li>
                    <li>
                        <a href="mailto:arts@sougo-group.jp?subject=Tokyo%20Design%20ARTS%20%7C%20%20%E3%80%90%E6%8E%A1%E7%94%A8%E3%80%91%E7%A4%BE%E5%86%85%E3%83%84%E3%83%BC%E3%83%AB%E6%8B%85%E5%BD%93(%E3%83%87%E3%82%B6%E3%82%A4%E3%83%8A%E3%83%BC/%E3%83%9E%E3%83%BC%E3%82%B1)&amp;body="
                           class="icon-link">社内ツール担当(デザイナー/マーケ)</a>
                    </li>
                    <li>
                        <a href="mailto:arts@sougo-group.jp?subject=Tokyo%20Design%20ARTS%20%7C%20%20%E3%80%90%E6%8E%A1%E7%94%A8%E3%80%91WEB%E3%83%97%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC(%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%82%BF%E3%83%BC)&amp;body="
                           class="icon-link">WEBプランナー(ディレクター)</a>
                    </li>
                    <li>
                        <a href="mailto:arts@sougo-group.jp?subject=Tokyo%20Design%20ARTS%20%7C%20%20%E3%80%90%E6%8E%A1%E7%94%A8%E3%80%91WEB%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%82%BF%E3%83%BC&amp;body="
                           class="icon-link">WEBディレクター</a>
                    </li>
                    <li>
                        <a href="mailto:arts@sougo-group.jp?subject=Tokyo%20Design%20ARTS%20%7C%20%20%E3%80%90%E6%8E%A1%E7%94%A8%E3%80%91%E3%83%87%E3%82%B6%E3%82%A4%E3%83%8A%E3%83%BC&amp;body="
                           class="icon-link">デザイナー</a>
                    </li>
                    <li>
                        <a href="mailto:arts@sougo-group.jp?subject=Tokyo%20Design%20ARTS%20%7C%20%20%E3%80%90%E6%8E%A1%E7%94%A8%E3%80%91%E3%82%B3%E3%83%BC%E3%83%80%E3%83%BC&amp;body="
                           class="icon-link">コーダー</a>
                    </li>
                    <li>
                        <a href="mailto:arts@sougo-group.jp?subject=Tokyo%20Design%20ARTS%20%7C%20%20%E3%80%90%E6%8E%A1%E7%94%A8%E3%80%91%E5%BA%83%E5%91%8A%E9%81%8B%E7%94%A8%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%83%E3%82%BF%E3%83%BC&amp;body="
                           class="icon-link">広告運用マーケッター</a>
                    </li>
                </ul>
                <p class="txt-title en">フリーランス採用もおこなっております</p>
            </div>
        </div>
    </section>
<?php endif; ?>

<?php get_footer(); ?>