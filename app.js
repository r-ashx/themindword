lucide.createIcons();

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.visibility = 'hidden';
        startCounters(); 
    }, 500);
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden', !isOpen);
    closeIcon.classList.toggle('hidden', isOpen);
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

const revealElements = document.querySelectorAll('.reveal');
const checkReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', checkReveal);
setTimeout(checkReveal, 600);

const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if(window.scrollY > 600) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function startCounters() {
    const counters = document.querySelectorAll('[data-target]');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');
            const speed = target / 40; 

            if (count < target) {
                counter.innerText = Math.ceil(count + speed) + (target === 10 || target === 500 ? '+' : '');
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = target + (target === 10 || target === 500 ? 'M+' : '+');
            }
        };
        updateCount();
    });
}
