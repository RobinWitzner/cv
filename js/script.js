$( document ).ready(function() {
    // Main variables
    var $aboutTitle = $('.about-myself .content h2');
    var $developmentWrapper = $('.development-wrapper');
    var developmentIsVisible = false;


    $('.hero .content .header').delay(800).animate({
        'opacity':'1',
        'top': '50%'
    },2000);


    $(window).scroll( function(){

        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
            $('.about-myself .content h2').addClass('aboutTitleVisible');
        }
        $('.experience .content .hidden').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({
                    'opacity':'1',
                    'margin-left': '0'
                },600);
            }
        });

        var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

        if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){

            $('.skills-bar-container li').each( function(){

                var $barContainer = $(this).find('.bar-container');
                var dataPercent = parseInt($barContainer.data('percent'));
                var elem = $(this).find('.progressbar');
                var percent = $(this).find('.percent');
                var width = 0;

                var id = setInterval(frame, 15);

                function frame() {
                    if (width >= dataPercent) {
                        clearInterval(id);
                    } else {
                        width++;
                        elem.css("width", width+"%");
                        percent.html(width+" %");
                    }
                }
            });
            developmentIsVisible = true;
        }
    });
});