$('.hiring-about >div').on('click', function(){
    $(this).children('.hiring-icon').toggleClass('hiring-rotate-icon');
    $(this).parent('.hiring-about').toggleClass('change-color')
    $(this).next('.hiring-text').slideToggle(300);
})

$('.futures-subblock >div').on('click', function(){
    $(this).parent('.futures-subblock').toggleClass('futures-block-open')
    $(this).children('.futures-block-title').toggleClass('futures-title-open')
    $(this).next('.futures-block-text').slideToggle(300);
})