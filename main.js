
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
/*--------------------------------------
スクロール
----------------------------------------*/


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
ScrollReveal().reveal('.function-item', { delay: 150, origin: 'bottom' });
ScrollReveal().reveal('.detail-item', { delay: 150, origin: 'bottom' });

/*---------------------------------------------
ハンバーガー開閉、スクロール後header-nav閉動作
---------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.header-nav');
    const navLinks = document.querySelectorAll('.header-nav a'); // ナビ内のリンクを取得

    toggleButton.addEventListener('click', function () {
        toggleButton.classList.toggle('active'); // ハンバーガー切り替え
        nav.classList.toggle('active');          // メニュー表示/非表示
    });

    // 各リンククリックでメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            toggleButton.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});