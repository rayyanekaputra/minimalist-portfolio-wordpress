<?php get_header( )?>

    <!-- Hero  -->
    <section data-scroll data-scroll-call="showHero" data-scroll-section class="hero fade" id="home">
        <div class="rayyan-container">

            <h1  class="rayyan">Rayyan</h1>
            <h1  class="rayyan">Eka Putra</h1>
        </div>
        <div class="hero-description">
            <div class="hero-cols 1">

                <p class="label-description">
                    Work Experience
                </p>
                <p>Finku - Web Designer (2021-2024)<br />
                    ONEBOX - Web Designer (2024-Present)<br />
                    Foundstrap - Web Designer (2024)<br />
                    AfterAnother - Web Designer (2024-Present)<br />
                    Quicksite - Design Lead (2024)</p>
            </div>
            <div class="hero-cols 2">

                <p class="label-description">
                    About Him
                </p>
                <p class="about-me">Known for his versatile capabilities and creative solutions, designing ideas and
                    executing solutions.
                    Designing professionally for companies and startups since 2021. Experienced in Web Design and UI/UX,
                    specifically prototyping and POC.</p>
            </div>
        </div>
    </section>
    <!-- Work -->

    <section data-scroll data-scroll-call="showWork" data-scroll-section class="work grid fade" id="work">
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            <?php if ( has_post_thumbnail() ) : ?>
                <div class="boxes">
                    <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
                        <?php the_post_thumbnail( 'medium', ['alt' => get_the_title()] ); ?>
                    </a>
                </div>
            <?php endif; ?>
        <?php endwhile; ?>
    <?php else : ?>
        <p>No portfolio items found.</p>
    <?php endif; ?>


    
</section>

    <?php get_footer( )?>