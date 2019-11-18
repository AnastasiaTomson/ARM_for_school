$(document).ready(function () {
    var active_page = window.location.href.toString().split('/');
    $('.menu ul li a').each(function () {
        if(active_page[active_page.length-1] !== ''){
            if ($(this).attr('href').replace('/', '').includes(active_page[active_page.length-1])){
                $(this).addClass('active_a').parent().addClass('active');
            }
        }else {
            $('.menu ul li:first-child a').addClass('active_a').parent().addClass('active')

        }


    })
})