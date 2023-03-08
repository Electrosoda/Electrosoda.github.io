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
//    activate_scroll_event();
$('#staticBackdrop').on('shown.bs.modal', function () {
    $(this).find('.modal-body').on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        var modal_right = $('.modal-right-content');
        $(".modal-left-content").each(function(i) {
            console.log($(this).position().top, $(this).closest('.modal-body').scrollTop());
            var pos = $(this).offset().top - $(this).closest('.modal-body').offset().top;
            var height = $(this).height();
            if (pos < scrollPos + $(window).height() && pos + height > scrollPos) {
                modal_right.eq(i).css('opacity', '1');
            }
            else{
                modal_right.eq(i).css('opacity', '0');
            }
        });
    });
});
}


//function activate_scroll_event(){
//    $('.modal-body').scroll(function() {
//        var scroH = $('.modal-body').scrollTop();
//        var modal_right = $('.modal-right-content');
//        $(".modal-left-content").each(function(index) {
//            this_bottom = $(this).offset().top + $(this).height() - window.innerHeight;
//            this_top = $(this).position().top + 100
//            console.log(scroH, this_top, $(this).position().top, window.innerHeight);
//
//            if(scroH > this_top){
//                $(modal_right[index]).css('opacity', '1');
//            } else{
//                $(modal_right[index]).css('opacity', '0');
//            }
//        });
//    });
//}


