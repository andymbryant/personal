window.onscroll = function () {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > window.innerHeight * .85 || document.documentElement.scrollTop > window.innerHeight * .85) {
        document.getElementById("nav").style.height = "50px";
        document.getElementById("name-plate").style.fontSize = '1.2rem';
    } else {
        document.getElementById("nav").style.height = "100px";
        document.getElementById("name-plate").style.fontSize = '2rem';
    }
}