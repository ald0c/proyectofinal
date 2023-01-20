const btnSwitch = document.querySelector('#switch');
const body = document.querySelector('body');

btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('active');
	body.classList.toggle('dark');
});