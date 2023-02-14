const hamBtn = document.querySelector('.menu');
const navContainer = document.querySelector('.nav-container');

hamBtn.addEventListener('click', () => {
	hamBtn.classList.toggle('opened');
	navContainer.classList.toggle('show');
});

// window.addEventListener('click', (e) => {
// 	if (!e.target.matches('.menu')) {
// 		if (navContainer.classList.contains('show')) {
// 			navContainer.classList.remove('show');
// 		}
// 	}
// });
