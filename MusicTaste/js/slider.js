$(document).ready(function(){
    $('.next').on('click', function(){
        let currentImg = $('.active');
        let nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -2);
            nextImg.addClass('active').css('z-index', 2);
        }
   
    });

    $('.prev').on('click', function(){
        let currentImg = $('.active');
        let prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -2);
            prevImg.addClass('active').css('z-index', 2);
        }
   
    });
});