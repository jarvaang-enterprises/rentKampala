$(window).on("load", 
    $(".hotelList1").css({
        display: 'block',
    })
);
prev = (target) => {
    p = target - 1
    $('.hotelList'+target).css({
        display: 'none',
    });
    topFunction()
    $('.hotelList'+p).css({
        display: 'block',
    });
}
next = (target) => {
    n = target + 1
    $('.hotelList'+target).css({
        display: 'none',
    });
    topFunction()
    $('.hotelList'+n).css({
        display: 'block',
    });
}