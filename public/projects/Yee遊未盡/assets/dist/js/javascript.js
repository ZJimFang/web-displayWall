document.addEventListener("DOMContentLoaded",function(){
    var loading = new TimelineMax();
    loading.fromTo(".upperTitle",0.3,{
         autoAlpha: 0,
         y: -20
    },{ 
        autoAlpha: 1,
        y: 0
    })
    .fromTo(".upperCarousel1",0.4,{
         autoAlpha: 0,
         y: 20,
    },{ 
        autoAlpha: 1,
        y: 0,
    })
    .fromTo(".upperCarouselText",0.4,{
         autoAlpha: 0,
         y: 20,
    },{ 
        autoAlpha: 1,
        y: 0,
    },"-=0.3");
});

$(function () {
    $('.img').on('click', function () {
        var src = $(this).attr('src');
        $('.imgPreview img').attr('src', src);
        $('.imgPreview').show()
    });
    $('.imgPreview').on('click', function () {
        $('.imgPreview').hide()
    });
})