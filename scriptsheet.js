const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

const initialScreen = document.getElementById('initial-screen');
const continueBtn = document.getElementById('continue-btn');
const navbar = document.querySelector('nav');
const homePage = document.getElementById('home');
const pastInitialScreen = sessionStorage.getItem('pastInitialScreen');

if ( initialScreen && !pastInitialScreen) {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
} else {

    
    document.body.classList.remove('overflow-hidden');
    document.body.style.overflow = '';
    document.body.style.height = '';
    document.body.style.position = '';
    document.body.style.width = '';
    if (initialScreen) {
        initialScreen.style.display = 'none';
    }

    if (navbar) {
        navbar.classList.remove('invisible');
    }

    if (homePage) {
        homePage.classList.remove('invisible')
    }
}

document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale').forEach(el => {
    observer.observe(el);
});

if (continueBtn && initialScreen) {
continueBtn.addEventListener('click', () => { 

    sessionStorage.setItem('pastInitialScreen', 'true');

        
    initialScreen.classList.add('initialScreen-fade-out');

    setTimeout(() => { 
        initialScreen.style.display = 'none';

        document.body.classList.remove('overflow-hidden');
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.position = '';
        document.body.style.width = '';

        navbar.classList.remove('invisible');
        navbar.classList.add('navbar-slide');

        if (homePage) {
            homePage.classList.remove('invisible')
            homePage.classList.add('initialScreen-fade-in');
        }
    }, 900);
});
}
console.log('Test load complete')