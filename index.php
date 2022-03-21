<!DOCTYPE html>
<html>
    <head>
        <title>jQuery Input Lettering</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no">
        <link rel="stylesheet" href="./assets/css/main.css" >
        <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
    </head>

    <?php 
        $imagePath = "./assets/images/";
    ?>

    <body>
        <!-- <?php include "component/landing_anime.php"; ?> -->
        <div class="page">
            <!-- BG Video -->
            <video playsinline autoplay muted loop class="videoBg">
                <source src="<?php echo $imagePath.'videoBg.MOV'; ?>" type="video/mp4">
            </video>
            
            <div class="landingContainer w-100 h-100 d-flex flex-column flex-lg-row justify-content-lg-around">

                <!-- Menu -->
                <div class="w-100 d-flex justify-content-around py-20">
                    <div class="infoMenuBox">
<pre style="opacity: 0">
    <span class="var-highlight">var</span> object = 
        {
            name: <button>Parker Chan</button>,
            about: [
                        <button>skill</button>,
                        <button>education</button>,
                        <button>work experience</button>
                    ],
        <button>project</button>: [
                        <span>"Clé de Peau Beauté"</span>,
                        <span>"Automall"</span>,
                        <span>"The history of Whoo HK"</span>
                        <span>"..."</span>
                    ];
        }; 
</pre>
<pre id="typewriter">
    <span class="var-highlight">var</span> object = 
        {
            name: <button class="js-slideTo" data-slide="slideToSelf">Parker Chan</button>,
            about: [
                        <button class="js-showSkill">skill</button>,
                        <button class="js-slideTo" data-slide="slideToEducation">education</button>,
                        <button class="js-slideTo" data-slide="slideToWork">work experience</button>
                    ],
        <button class="js-slideTo" data-slide="slideToProject">project</button>: [
                        <span>"Clé de Peau Beauté"</span>,
                        <span>"Automall"</span>,
                        <span>"The history of Whoo HK"</span>
                        <span>"..."</span>
                    ];
        }; 
</pre>
                    </div>
                </div>
                <!-- Menu -->

                <!-- Swiper Content -->
                <div class="w-100 h-100 d-flex justify-content-around align-items-lg-center py-20">
                    <div class="infoBox mySwiper">
                        <div class="swiper-wrapper">
                            <!-- Slide 0 -->
                            <div class="swiper-slide personalInfo">
                                <div class="personalInfo__imgBox text-center">
                                    <h2>Parker Chan</h2>
                                    <h4>Web Developer</h4>
                                    <img class="w-100 rounded-circle mt-20" src="<?php echo $imagePath.'parker.jpg'; ?>" alt="">
                                </div>
                                <div class="personalInfo__content textIndent-30">
                                    After graduating from university, I found I love experience new thing related to web designing and development so I joined coding bootcamp. Then, I had worked as a web developer over the past three years. 
                                </div>
                            </div>
                            <!-- Slide 1 -->
                            <div class="swiper-slide personalInfo">
                                <h1 class="text-center my-20">EDUCATION</h1>
                                <div>
                                    <div class="personalInfo__imgBox text-center">
                                        <img class="w-70 mx-auto" src="<?php echo $imagePath.'ncku.png'; ?>" alt="">
                                    </div>
                                    <div class="personalInfo__content">
                                        Bachelor of Arts in Department of Foreign Languages and Literature, National Cheng Kung University<br>
                                        Taiwan ( Sep 2011 - Jul2015 )
                                    </div>
                                </div>
                                <div class="mt-30">
                                    <div class="personalInfo__imgBox text-center">
                                        <img class="w-70 mx-auto" src="<?php echo $imagePath.'accelerate.jpg'; ?>" alt="">
                                    </div>
                                    <div class="personalInfo__content">
                                        Full-Stack Web Development Course, Accelerate Coding Bootcamps (ACCELERATE HK CODING BOOTCAMPS LIMITED) <br>
                                        Hong Kong ( Mar 2018 - July 2018 )
                                    </div>
                                </div>
                            </div>
                            <!-- Slide 2 -->
                            <div class="swiper-slide personalInfo">
                                <h1 class="text-center my-20">WORK EXPERIENCE</h1>
                                <div>
                                    <h3 class="text-end border-bottom">Full Time</h3>
                                    <div class="personalInfo__imgBox text-center">
                                        <img class="w-70 mx-auto" src="<?php echo $imagePath.'sekgamdong.png'; ?>" alt="">
                                    </div>
                                    <div class="personalInfo__content">
                                        <strong>SEKGAMDONG LTD.</strong><br>
                                        Job Title: Web developer (Sep 2018 - Sep 2021)
                                    </div>
                                </div>
                                <div class="mt-50">
                                    <h3 class="text-end border-bottom">Freelance</h3>
                                    <div class="personalInfo__imgBox text-center">
                                        <img class="w-70 mx-auto" src="<?php echo $imagePath.'idigitalts.jpg'; ?>" alt="">
                                    </div>
                                    <div class="personalInfo__content">
                                        <strong>iDigital Technology Solutions Limited</strong><br>
                                        Job responsibilities: <br>
                                        Responsible for web-frontend development to deliver the best experience on both website and mobile platforms.
                                    </div>
                                </div>
                            </div>
                            <!-- Slide 3 -->
                            <div class="swiper-slide personalInfo">
                                <h1 class="text-center my-20">Project</h1>
                                <div>
                                    <div class="personalInfo__imgBox text-center bg-color-white py-10 my-20">
                                        <img class="w-70 mx-auto" src="<?php echo $imagePath.'cpb.svg'; ?>" alt="">
                                    </div>
                                    <div class="personalInfo__content">
                                        <a class="color-white" href="https://eshop.cledepeaubeaute.com.hk/" target="_blank"><strong class="color-white">Clé de Peau Beauté (HK)</strong></a>
                                        <br>
                                        <ul class="listStyleType-square">
                                            <li>Creating websites using PHP, CodeIgniter, JS, JQ, CSS, HTML </li>
                                            <li>Setup mySQL databases</li>
                                            <li>Integrating their existing shop POS system</li>
                                        </ul>
                                    </div>
                                    <div class="mt-30">
                                        <div class="personalInfo__imgBox text-center bg-color-white py-10 my-20">
                                            <img class="w-70 mx-auto" src="<?php echo $imagePath.'automall.svg'; ?>" alt="">
                                        </div>
                                        <div class="personalInfo__content">
                                            <a class="color-white" href="https://www.automall.com.hk/tc/" target="_blank"><strong class="color-white">Automall</strong></a>
                                            <br>
                                            <ul class="listStyleType-square">
                                                <li>Creating websites using HTML, CSS, Vue.js, Nuxt.js</li>
                                                <li>Responsible for frontend</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="mt-30">
                                        <div class="personalInfo__imgBox text-center bg-color-white py-10 my-20">
                                            <img class="w-70 mx-auto" src="<?php echo $imagePath.'whoo-hk.svg'; ?>" alt="">
                                        </div>
                                        <div class="personalInfo__content">
                                            <a class="color-white" href="https://www.whoo-hk.com/tc" target="_blank"><strong class="color-white">The history of Whoo HK</strong></a>
                                            <br>
                                            <ul class="listStyleType-square">
                                                <li>Creating websites using HTML, CSS, Vue.js, Nuxt.js</li>
                                                <li>Responsible for frontend</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Skill -->
        <div id="skillCanvasContainer" class="skill-popup mfp-hide" >
            <canvas id="skillCanvas">
                <p>Anything in here will be replaced on browsers that support the canvas element</p>
            </canvas>
        </div>
        <div id="skillTags">
            <ul>
                <li><a href="" target="_blank" style="font-size: 2.83ex">HTML</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">CSS</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">SASS</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">Javascript</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">jQuery</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">Bootstrap</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">NPM</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">JSON</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">PHP</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">Codeigniter</a></li>
                <li><a href="" target="_blank" style="font-size: 2.8ex">Apache Cordova</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">VueJS</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">NodeJS</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">MySQL</a></li>
                <li><a href="" target="_blank" style="font-size: 2.83ex">Github</a></li>
            </ul>
            </div>
        </div>
        <!-- Skill -->


        <!-- JS -->
        <script src="./assets/js/main-dist.js"></script>
        <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    </body>
</html>