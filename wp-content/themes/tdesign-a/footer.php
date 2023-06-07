</main>

<?php get_sidebar(); ?>

<?php
global $post;
$post_slug = $post->post_name;
?>

<footer>
    <div class="page-top-pc"></div>
    <div class="page-top-sp"></div>
    <?php if(is_front_page() || $post_slug == "service") :?>
    <div class="container">
        <div id="contact" class="contact-btn en">
            <a href="mailto:arts@sougo-group.jp?subject=Tokyo%20Design%20ARTS%20%7C%20%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B&amp;body="><span>arts@cam-com.jp</span></a>
        </div>
    </div>
    <?php endif; ?>
    <div class="moving-text">
        <p>
            <img class="sizes" src="/wp-content/uploads/img-slider-footer-pc.png" height="40" alt="">
            <img class="sizes" src="/wp-content/uploads/img-slider-footer-pc.png" height="40" alt="">
        </p>
    </div>
    <p class="copyright en">Copyright ©Tokyo Design ARTS, Inc.</p>
</footer>

<?php wp_footer(); ?>

</body>
</html>