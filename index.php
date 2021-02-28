<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta description="Bij verzekerdtewerk zorgen we ervoor dat uw opdracht profesioneel wordt opgepakt door een van onze vakmannen!">
    <link rel="stylesheet" href="./css/style.css" type="text/css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <title>Verzekerdtewerk.nl | Meldt je nu aan!</title>
</head>
<?php require_once('./config.php'); ?>
<body>
    <section class="mainContent">
        <div class="mainContent__inner">
            <div class="row">
                <div class="col-12">
                    <h1>Jou klus, jou droom! Verzekerd te werk helpt jou hierbij!</h1>
                    <p>Wil jij jou klus door een professional gedaan hebben? Zou jij wat extra korting kunnen gebruiken op jou project?</p>
    <p>Laat jou klus dan bij ons achter en wij helpen jou hierbij!
</p>
                </div>
            </div>

            <?php include_once('./template-parts/form/form.php'); ?>
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
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
    <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='MMERGE2';ftypes[2]='dropdown';fnames[3]='MMERGE3';ftypes[3]='text';fnames[4]='PHONE';ftypes[4]='number';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
    <!--End mc_embed_signup-->

    <script type='text/javascript' src='./js/app.js'></script>
</body>
</html>
