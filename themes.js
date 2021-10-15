const body = document.querySelector('body');
const choose = document.querySelectorAll('input');

choose.forEach(btn => {
    btn.addEventListener('click', () => {
        changeTheme(btn.value);
    });
});
function changeTheme(i) {
    if (i === '0') {
        body.classList.remove('theme-light', 'theme-purple');
        body.classList.add('default');
    } else if (i === '1') {
        body.classList.remove('default', 'theme-purple');
        body.classList.add('theme-light');
    } else if (i === '2') {
        body.classList.remove('default', 'theme-light');
        body.classList.add('theme-purple');
    }
}





























