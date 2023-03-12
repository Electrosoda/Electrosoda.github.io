function resize_card(){
    width = $('.card').width();
    height = width;
    text_height = height / 4;
    img_height = text_height * 3;

    $('.card').css('height', height);
    $('.text-frame').css('height', text_height);
    $('.img-frame').css('padding-bottom', img_height);
    $('.img-frame img').css('height', img_height);
}

$(document).ready(function(){
    $("#nav-placeholder").load("navbar.html");
    $("#project-1").load("project-1.html");
    resize_card();
});


$(window).resize(function(){
    resize_card();

});

window.onload = function(){
//
    $('.modal').on('shown.bs.modal', function () {
        var $modal = $(this);
        $(this).find('.modal-body').on('scroll', function () {
            var scrollPos = $(this).scrollTop();
            var modal_right = $('.modal-right-content');
            $(".modal-left-content").each(function(i) {
                var pos = $(this).position().top + scrollPos;
                var top_pos = pos - window.innerHeight + 200;
                var bottom_pos = pos + $(this).height() - window.innerHeight + 200;
                if (scrollPos > top_pos && scrollPos < bottom_pos) {
                    modal_right.eq(i).css('opacity', '1');
                }
                else{
                    if (i+1 != modal_right.length)
                        modal_right.eq(i).css('opacity', '0');
                    else{
                        if (scrollPos > bottom_pos)
                            modal_right.eq(i).css('opacity', '1');
                        else
                            modal_right.eq(i).css('opacity', '0');
                    }
                }
            });
        });
    });
    h = $('.modal-body > .container > .row').height();
    $('.modal-body > .container > .row').css('height', h-500);
}

//$('.modal-body').scroll(function () {
//    var document_scrollPos = $(document).scrollTop();
//    var scrollPos = $(this).scrollTop();
//    var modal_right = $('.modal-right-content');
//    $(".modal-left-content").each(function(i) {
//        var pos = $(this).position().top + document_scrollPos;
//        var top_pos = pos - window.innerHeight + 200;
//        var bottom_pos = pos + $(this).height() - window.innerHeight + 200;
//        if (scrollPos > top_pos && scrollPos < bottom_pos) {
//            modal_right.eq(i).css('opacity', '1');
//        }
//        else{
//            if (i+1 != modal_right.length)
//                modal_right.eq(i).css('opacity', '0');
//            else{
//                if (scrollPos > bottom_pos)
//                    modal_right.eq(i).css('opacity', '1');
//                else
//                    modal_right.eq(i).css('opacity', '0');
//            }
//        }
//    });
//});



