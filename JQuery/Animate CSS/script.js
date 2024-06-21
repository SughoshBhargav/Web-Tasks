$(document).ready(function () {

    $('#btn-el').click(function () {
        $(".box").animate({
            
            top: '+=50px',
            left: '+=50px',
            height: '+=50px',
            width: '+=50px',
            rotate: '+=30deg'
        });
    });

    $('#btnrev-el').click(function () {
        $(".box").animate({
            top: '-=50px',
            left: '-=50px',
            height: '-=50px',
            width: '-=50px',
            rotate: '-=30deg'
        });
    });

});