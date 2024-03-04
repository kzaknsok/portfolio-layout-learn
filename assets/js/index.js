// スクロールで要素が浮き上がる Intersection Observer
let targets = document.querySelectorAll('.unvisible');

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
}

let observer = new IntersectionObserver(callback, options);

targets.forEach(target => {
    observer.observe(target);
});

// Top戻るボタンの出現 + navbarのデザイン切り替え処理
let topBtn = document.querySelector('#back-to-top');
let nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        topBtn.style.display = 'block';
        nav.classList.add('hide');
        setTimeout(() => {
            nav.classList.remove('hide');
            nav.classList.add("scrolled");
            // 300は0.3sと同じ
        }, 300);
    } else {
        topBtn.style.display = 'none';
        nav.classList.add('hide');
        setTimeout(() => {
            nav.classList.remove('hide');
            nav.classList.remove("scrolled");
        }, 300);
    }
});

// Top戻るボタンの動作実装
topBtn.addEventListener('click', () => {
    let speed = 1;
    let acceleration = 3.5;
    let interval = 15;
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    let scroll = setInterval(() => {
        scrollPosition -= speed;
        speed += acceleration;

        if (scrollPosition <= 0) {
            clearInterval(scroll);
            scrollPosition = 0;
        }

        window.scrollTo(0, scrollPosition);
    }, interval);
});

// 選択したらメニューを閉じる
let toggler = document.querySelector('.toggler');
let menu = document.querySelector('.menu');
menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggler.checked = false;
    }
});