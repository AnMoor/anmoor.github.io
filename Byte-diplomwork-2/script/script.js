$('.question-item >div').on('click', function(){
    $(this).children('.question-item-icon').toggleClass('question-icon-rotate');
    $(this).next('.question-item-text').slideToggle(500);
})