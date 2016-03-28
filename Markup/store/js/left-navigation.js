$(window).load(function(){

    var animating = false;
    var menu = 'navigation';

    $(".navigation a").click(function(e){
        e.preventDefault();

        if(animating){
            return;
        }

        var el = $(this),
            color = $(this).find('.left-menu-item').css('background-color'),
            prev = $(".navigation > a:first"),
            distance = el.offset().top  - $(".navigation").offset().top,
            isLastElClicked = el.next().length > 0 ? false : true;



        if (el.prev().length > 0) {
            animating = true;
            $(el).find('.left-menu-item').css('background-color',color);
            $.when(
                el.animate({
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

                    if(el.find('.sublevel-menu').length == 1){
                        el.find('.sublevel-menu').slideDown();
                    }

                    setTimeout(function(){
                        //location.replace(el.attr('href'));
                    },500)

                });
        }
    });
    
});