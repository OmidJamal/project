
// for faq Section - accordion menu
$(document).ready(function () {
    $('.faqContent .faq-q').click(function () {
        if ($(this).next().is(':hidden')) {
            $('.faq-a').slideUp();

        }
        $(this).next().slideToggle();
    });

    // for sign Up input 
    $('.signup-form > div').click(function(){
        $(this).css({
            "borderBottom":"1px solid #eb5d1e"
        })
    });

    //for when clicked starts open signUp and modal

    $('.nav-item .startBtn').click(function(){
        $('.signUp , .modal-a').css({
            'display':'flex',
            'transition':'all .5s ease'
        })
    });

    // for wen click close Button of sgin up 

    $('.signUp .closeBtn , .modal-a ').click(function(){
        $('.signUp , .modal-a').css({
            'display':'none'
        })
    });
});
//...................................................................

// for scroll Back to Top
$(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
        console.log("hi")
        $('#topBtn a').css({
            'bottom': "20px"
        })
    } else {
        $('#topBtn a').css({
            'bottom': '-100px'
        });
    }
});

$(document).ready(function () {
    $('#topBtn a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        });
    });
});
//....................................................................

