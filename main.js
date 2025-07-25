
/*-------------------------------------
スムーススクロール
-----------------------------------*/

$(function () {
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href === "#" || href === "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 400, "swing");
        return false;
        
    });
});



ScrollReveal({
    reset: false,
    distance: "100px",
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.main-title', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.info-title', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.mv', { delay: 700, origin: 'right' });

ScrollReveal().reveal('.section-title', { delay: 150, origin: 'top' });
ScrollReveal().reveal('.feature-text01', { delay: 150, origin: 'left' });
ScrollReveal().reveal('.feature-text02', { delay: 150, origin: 'right' });
ScrollReveal().reveal('.feature-text03', { delay: 150, origin: 'left' });
ScrollReveal().reveal('.feature-text04', { delay: 150, origin: 'right' });

ScrollReveal().reveal('.feature-img01', { delay: 150, origin: 'right' });
ScrollReveal().reveal('.feature-img02', { delay: 150, origin: 'left' });
// ScrollReveal().reveal('.feature-img03', { delay: 150, origin: 'right' });
// ScrollReveal().reveal('.feature-img04', { delay: 150, origin: 'left' });

ScrollReveal().reveal('.function-item', { delay: 150, origin: 'bottom' });
ScrollReveal().reveal('.detail-item', { delay: 150, origin: 'bottom' });