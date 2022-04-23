$(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click', '.btn', function(){
    var moreLessButton = $(".invisible-content").is(':visible') ? 'Read More' : 'Read Less';
    $(this).text(moreLessButton);
    $(this).parent('.large-content').find(".invisible-content").toggle();
    $(this).parent('.large-content').find(".visible-content").toggle();
    });
    });