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
