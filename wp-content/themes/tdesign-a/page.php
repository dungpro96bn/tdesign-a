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
                        <a href="http://ten.1049.cc/job/20397482" class="icon-link">動画ディレクター</a>
                    </li>
                    <li>
                        <a href="https://ten.1049.cc/job/20428795" class="icon-link">プロジェクトマネージャー/マーケッター</a>
                    </li>
                    <li>
                        <a href="https://ten.1049.cc/job/20397505" class="icon-link">社内ツール担当(デザイナー/マーケ)</a>
                    </li>
                    <li>
                        <a href="https://ten.1049.cc/job/20397507" class="icon-link">WEBプランナー(ディレクター)</a>
                    </li>
                    <li>
                        <a href="https://ten.1049.cc/job/20397483" class="icon-link">WEBディレクター</a>
                    </li>
                    <li>
                        <a href="https://ten.1049.cc/job/20428925" class="icon-link">デザイナー</a>
                    </li>
                    <li>
                        <a href="https://ten.1049.cc/job/20428929" class="icon-link">コーダー</a>
                    </li>
                    <li>
                        <a href="http://ten.1049.cc/job/20397513" class="icon-link">広告運用マーケッター</a>
                    </li>
                </ul>
                <p class="txt-title en">フリーランス採用もおこなっております</p>
            </div>
        </div>
    </section>
<?php endif; ?>

<?php get_footer(); ?>