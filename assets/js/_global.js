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

    
    function setupTypewriter(t) {
	    var HTML = t.innerHTML;
	    t.innerHTML = "";
	    var cursorPosition = 0,
	        tag = "",
	        writingTag = false,
	        tagOpen = false,
	        typeSpeed = 50,
        tempTypeSpeed = 0;

	    var type = function() {
	        if (writingTag === true) {
	            tag += HTML[cursorPosition];
	        }
	        if (HTML[cursorPosition] === "<") {
	            tempTypeSpeed = 0;
	            if (tagOpen) {
	                tagOpen = false;
	                writingTag = true;
	            } else {
	                tag = "";
	                tagOpen = true;
	                writingTag = true;
	                tag += HTML[cursorPosition];
	            }
	        }
	        if (!writingTag && tagOpen) {
	            tag.innerHTML += HTML[cursorPosition];
	        }
	        if (!writingTag && !tagOpen) {
	            if (HTML[cursorPosition] === " ") {
	                tempTypeSpeed = 0;
	            }
	            else {
	                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
	            }
	            t.innerHTML += HTML[cursorPosition];
	        }
	        if (writingTag === true && HTML[cursorPosition] === ">") {
	            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
	            writingTag = false;
	            if (tagOpen) {
	                var newSpan = document.createElement("span");
	                t.appendChild(newSpan);
	                newSpan.innerHTML = tag;
	                tag = newSpan.firstChild;
	            }
	        }
	        cursorPosition += 1;
	        if (cursorPosition < HTML.length - 1) {
	            setTimeout(type, tempTypeSpeed);
	        }
	    };
	    return {
	        type: type
	    };
	}
	var typer = document.getElementById('typewriter');
	typewriter = setupTypewriter(typewriter);
	typewriter.type();


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



});