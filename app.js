function scroll() {
    let nav = document.getElementById('nav')
    if (nav.classList.contains('nav-inactive')) {
        nav.classList.remove('nav-inactive')
        nav.classList.add('nav-active')
    }
}