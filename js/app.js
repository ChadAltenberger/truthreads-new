const navbar = document.getElementById('navbar');
let scrolled = false;

// Navbar Effect //
// Adds background to navbar upon scrolling down
window.onscroll = function () {
	if (window.pageYOffset > 80) {
		// target which point in scrolling down to trigger effect
		navbar.classList.remove('top'); // remove transparency
		navbar.classList.add('front'); // bring navbar forward
		if (!scrolled) {
			navbar.style.transform = 'translateY(-70px)'; // push navbar up 70px
		}
		setTimeout(() => {
			navbar.style.transform = 'translateY(0)'; // pull navbar back down after 200ms
		}, 200);
		scrolled = true;
	} else {
		navbar.classList.add('top');
		scrolled = false;
	}
};

// Burger Menu Toggle
const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');
const backdrop = document.getElementById('backdrop');
const logoLink = document.getElementById('logo-link');
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const servicesLink = document.getElementById('services-link');
const featuredLink = document.getElementById('featured-link');
const contactLink = document.getElementById('contact-link');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
	const navbar = document.getElementById('navbar');

	navList.classList.toggle('show');
	backdrop.classList.toggle('active');
	navbar.classList.toggle('mobile-navbar');
	nav.classList.toggle('mobile-nav');
});

// Nav Links Toggle
function toggleNav() {
	navList.classList.toggle('show');
	backdrop.classList.toggle('active');
	navbar.classList.toggle('mobile-navbar');
	nav.classList.toggle('mobile-nav');
}

homeLink.addEventListener('click', toggleNav);
aboutLink.addEventListener('click', toggleNav);
servicesLink.addEventListener('click', toggleNav);
featuredLink.addEventListener('click', toggleNav);
contactLink.addEventListener('click', toggleNav);
logoLink.addEventListener('click', () => {
	if (backdrop.className === 'active') {
		backdrop.classList.remove('active');
		navList.classList.toggle('show');
		navbar.classList.toggle('mobile-navbar');
		nav.classList.toggle('mobile-nav');
	}
});

// Modal Toggle //
const modalBtn = document.getElementById('modal-btn');
const modalBg = document.getElementById('modal-bg');
const modalClose = document.getElementById('modal-close');

modalBtn.addEventListener('click', () => {
	modalBg.classList.add('modal-open');
});

modalClose.addEventListener('click', () => {
	modalBg.classList.remove('modal-open');
});

window.addEventListener('click', e => {
	if (e.target === modalBg) {
		modalBg.classList.remove('modal-open');
	}
});
