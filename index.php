<?php require_once('./template-parts/header.php'); ?>
    <section class="mainContent">
        <div class="mainContent__inner">
            <div class="row">
                <div class="col-12">
                    <h1>Meldt je nu aan bij verzekerdtewerk.nl!</h1>
                    <p>Wij van verzekerd te werk helpen jou de klus probleemloos te realiseren.</p>
                </div>
            </div>

            <?php include_once('./template-parts/form/form.php'); ?>
        </div>
        <div class="signup">
            <div class="signup__title">
                Meld je aan als specialist
            </div>
            <a class="signup__button" href="#">
            &#10132;
            </a>
        </div>
        <div class="js-side-toggler">
            Onze specialisten
        </div>
        
        <?php include_once('./template-parts/side-content.php'); ?>

        <div id="specialist_contents">
            <div class="close">X</div>
            <?php
                $dir = './template-parts/specialists/';

                if ($handle = opendir($dir)) {

                    while (false !== ($entry = readdir($handle))) {
                
                        if ($entry != "." && $entry != "..") {
                
                            include($dir.$entry);
                        }
                    }
                    closedir($handle);
                }
            ?>
        </div>
    </section>
<?php require_once('./template-parts/footer.php'); ?>    

