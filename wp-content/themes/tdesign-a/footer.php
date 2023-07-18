</main>

<?php get_sidebar(); ?>

<?php
global $post;
$post_slug = $post->post_name;
?>

<footer>
    <div class="page-top-pc"></div>
    <div class="page-top-sp"></div>
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