let title = document.getElementById('title');

title.addEventListener('focus', function (event) {
    alert('hello')
    // event.target.style.background = 'pink';
}, true);

title.addEventListener('blur', function (event) {
    alert('hello')
    event.target.style.background = '';
}, true);