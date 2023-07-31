$(function () {
    $('.cover').hide()
    $('.fm_menu').hide();

    $('.btn_fm_site').click(function () {
        $('.fm_menu').stop().slideToggle();
    });
  

    $('.visual').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true
    });

    //mobile
    $('.btn_menu').click(function () {
        $('.m_menu').animate({ 'left': '0' }, 300)
        $('.cover').fadeIn(300)
        $('body,html').css('overflow', 'hidden')
    });

    $('.cover').click(function () {
        $('.m_menu').animate({ 'left': '-100%' }, 300)
        $(this).fadeOut(300)
        $('body').css('overflow', 'hidden')
        $('html').css('overflow', 'auto')
    });


    $('.m_depth2').hide()
    $('.m_gnb>li').click(function(){
        $('.m_gnb>li').find('.m_depth2').stop().slideUp()
        $(this).find('.m_depth2').stop().slideToggle()
    })
    
})