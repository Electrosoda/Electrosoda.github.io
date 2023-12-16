function resize_card(){
    width = $('.card').width();
    img_height = width / 2.16;

    $('.card').each(function(){
        height = img_height + $(this).children('.text-frame').height() + 60;
        $(this).css('height', height);
    });

    $('.img-frame').css('padding-bottom', img_height);
    $('.img-frame img').css('height', img_height);
    $('.img-frame .modal-display').css('height', img_height);
}

$(document).ready(function(){
    $("#nav-placeholder").load("navbar.html");
//    $("#project-1").load("project-1.html");
//    $("#project-2").load("project-2.html");
//    $("#project-3").load("project-3.html");
//    $("#project-4").load("project-4.html");
    resize_card();
});


$(window).resize(function(){
    resize_card();
    if($(window).width()<=576){
        $('.btn-close').removeClass('btn-close-white');
    }else{
        $('.btn-close').addClass('btn-close-white');
    }

});

window.onload = function(){
    $('.loading').css('opacity','0');
    setTimeout(function(){
        $('.loading').css('display','none');
    }, 1000);
    resize_card();
    if($(window).width()<=576){
        $('.btn-close').removeClass('btn-close-white');
    }else{
        $('.btn-close').addClass('btn-close-white');
    }
    $("#project-1").load("project-1.html");
    $("#project-2").load("project-2.html");
    $("#project-3").load("project-3.html");
    $("#project-4").load("project-4.html");
    $('.modal').on('shown.bs.modal', function () {
        var $modal = $(this);

        $(this).find('.modal-body').on('scroll', function () {
            var scrollPos = $(this).scrollTop();
            var modal_right = $(this).find('.modal-right-content');
            var first_row_height = $(this).find('.container > .row').eq(0).height();
            $(this).find(".modal-left-content").each(function(i) {
                var pos = $(this).position().top + first_row_height;
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
    $('#project-3-modal').on('shown.bs.modal', function () {
        $modal = $(this);
        $(this).find(".modal-body .modal-display img").each(function(index) {
            var $this = $(this);
//            $this.hover(function(){
//                $this.attr('src', $this.attr('data-src')+'s.png');
//            }, function(){
//                $this.attr('src', $this.attr('data-src')+'.png');
//            });
            var t = setTimeout(function(index){
              $this.css('opacity','1');
            }, (index+1)*300);

        });
        setTimeout(function(){
            $modal.find(".fade_in").css('opacity', 1);
        }, 1800);
    });
    $('#project-3-modal').on('hidden.bs.modal', function () {
        $modal = $(this);
        $(this).find(".modal-body .modal-display img").each(function(index) {
            var $this = $(this);
            $this.css('opacity','0');
        });
        $modal.find(".fade_in").css('opacity', '0');
    })
}


//$(document).scroll(function () {
//    var document_scrollPos = $(document).scrollTop();
//    var scrollPos = $(this).scrollTop();
//    var modal_right = $('.modal-right-content');
//    $(".modal-left-content").each(function(i) {
//        var pos = $(this).offset().top;
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



