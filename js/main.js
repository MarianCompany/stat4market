$(document).ready(function(){

    //menu

    $('.menu__link').hover(function (event){
        const menu = $(event.target);
        menu.find('.menu').css('display','block');
    },function (event) {
        const menu = $(event.target);
        menu.find('.menu').css('display','none');
    })

    $('.menu').hover(null, function (event) {
        $(this).css('display','none');
    })

    //burger

    $('.burger').click(function (){
        $('.burger__menu-wrap').css('display','block');
    })

    $('.burger__menu-wrap').click(function () {
        $(this).css('display','none');
    })

});