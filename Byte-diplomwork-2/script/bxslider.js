const slider = $('.slider-list').bxSlider({
    pager: false,
    controls: false,
    infinityLoop: true,
    touchEnabled: true,
    hideControlOnEnd: true,
});

$('.button-prev').click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});

$('.button-next').click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});