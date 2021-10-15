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





























// var dark = document.querySelector('.theme1');
// var light = document.querySelector('.theme2');
// var purple = document.querySelector('.theme3');
    
// dark.addEventListener('input', changeTheme);
// light.addEventListener('input', changeTheme);
// purple.addEventListener('input', changeTheme);

// // var changeTheme = document.querySelector('.changeTheme');
// // changeTheme.addEventListener('click', toggleTheme);

// function setTeme(themeName) {
//     localStorage.setItem('theme', themeName);
//     document.body.classList = themeName;
// }

// function changeTheme() {
//     console.log('radi');
//     e.preventDefault();
//     if (localStorage.getItem('theme') === 'theme-dark' || 'theme-purple') {
//         setTeme('theme-purple');
//     } else if ('theme-light' || 'theme-purple') {
//         setTeme('theme-dark');
//     } else if ('theme-dark' || 'theme-light') {
//         setTeme('theme-purple');
//     }
// }

// (function () {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTeme('theme-dark');
//     } else if (localStorage.getItem('theme') === 'theme-light') {
//         setTeme('theme-purple');
//     } else if (localStorage.getItem('theme') === 'theme-purple') {
//         setTeme('theme-purple');
//     }
// })();
