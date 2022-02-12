$(function () {
    $('#gnb > ul > li').hover(
        function () {
            $(this).children().addClass('on');
        },
        function () {
            $(this).children().removeClass('on')
        }
    );

    // nav-hover

    $.stellar({
        horizontalScrolling: false,
        verticalScrolling: true,
        verticalOffset: 50,
    });

});

