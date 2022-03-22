$(document).ready(function () {

    // $('.filpCard').on("click", function(){
    //     $(this).toggleClass('flipped');
    // })

    var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        // spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
        },
    });
    $(document).on('click', '.js-slideTo', function(){ 
        $('html, body').animate({ scrollTop: $('.infoBox').offset().top - 20}, 500);

        var _to = $(this).attr('data-slide');
        if(_to == 'slideToSelf') swiper.slideTo(0, 1000);
        if(_to == 'slideToEducation') swiper.slideTo(1, 1000);
        if(_to == 'slideToWork') swiper.slideTo(2, 1000);
        if(_to == 'slideToProject') swiper.slideTo(3, 1000);
    })

    

	var typer = document.getElementById('typewriter');
	typewriter = setupTypewriter(typewriter);
	setTimeout(function(){
        typewriter.type();
    }, 5500)


    // Skill
    $(document).on("click", "#skillCanvasContainer", function(){
        $.magnificPopup.close();
    })
    var initCanvasSize = function(){
        limitNum = 1;
        // if($(window).width()>540){ limitNum = 0.95; }

        canvasWidth = ($(window).width() > 800)? 800 : $(window).width()*limitNum;
        canvasHeight = ($(window).height() > 600)? 600 : $(window).height()*limitNum;
        $('#skillCanvas').attr('width', canvasWidth);
        $('#skillCanvas').attr('height', canvasHeight);
    }
    $(document).on('click', '.js-showSkill', function(){ 
        initCanvasSize();

        var weightSize = 1;
        if($(window).width()>540){ weightSize = 1.5; }

        $.magnificPopup.open({
            items: {
                src: '#skillCanvasContainer',
            },
            type: 'inline',
            mainClass: 'mfp-zoom-out',
            removalDelay: 200,
            showCloseBtn: false,
            fixedBgPos: true, 
            fixedContentPos: true, 
            callbacks: {
                open: function() {
                    $('#skillCanvas').tagcanvas({ 
                        initial:[.1,.01],
                        shape: "sphere",
                        textColour: '#fff', 
                        // outlineColour: '#fff', 
                        weight: true,
                        weightSize: weightSize,
                        noSelect: true,
                        reverse: true, 
                        depth: 0.6, 
                        maxSpeed: 0.1,
                    },'skillTags')
                },
            }
        });

    })

    var scene = $('#scene')[0];
    var parallaxInstance = new Parallax(scene);
    parallaxInstance.friction(0.1, 0.1);
});