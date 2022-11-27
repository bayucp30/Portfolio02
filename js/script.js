// parallax
// about

$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function() {

    var wScroll = $(this).scrollTop()
    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    })

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    })

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/7 +'%)'
    })

    // portfolio
    if( wScroll > $('.portfolio').offset().top - 400) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 500 * (i+1))
        })

        
    }

})