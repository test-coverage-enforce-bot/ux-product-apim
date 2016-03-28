$(window).load(function(){

    var animating = false;
    var menu = 'navigation';

    $(".navigation ul li").click(function(e){
        e.preventDefault();

        if(animating){
            return;
        }

        var delay = 0;
        if($('.sublevel-menu').is(':visible')){
            $('.sublevel-menu').slideUp(500);
            delay = 700;
        }

        var el = $(this),
            color = $(this).find('.left-menu-item').css('background-color'),
            prev = $(".navigation ul li:first"),
            distance = el.offset().top  - $(".navigation").offset().top,
            isLastElClicked = el.next().length > 0 ? false : true,
            hasSubMenu = el.find('.sublevel-menu').length == 1 ? true : false,
            isActiveItem = el.hasClass('active');

        if(isActiveItem && hasSubMenu){
            if(el.find('.sublevel-menu').is(':visible')){
                el.find('.sublevel-menu').slideUp();
            }else{
                el.find('.sublevel-menu').slideDown();
            }
            return;
        }

        setTimeout(function(){
            distance = el.offset().top  - $(".navigation").offset().top;
        },600);

        if (el.prev().length > 0) {
            animating = true;
            $(el).find('.left-menu-item').css('background-color',color);
            $.when(
                el.delay(delay).animate({
                    top: -distance
                }, 700)
            ).done(function () {
                el.insertBefore(prev).css('top','0px').addClass('active');
                el.find('.left-menu-item').removeAttr('style');
                if(isLastElClicked){
                    prev.removeClass('active');

                }else{
                    prev.removeClass('active');
                }
                animating = false;

                if(hasSubMenu){
                    el.find('.sublevel-menu').slideDown();
                }

                setTimeout(function(){
                    //location.replace(el.attr('href'));
                },500)

            });
        }
    });
    
});