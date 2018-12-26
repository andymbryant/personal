window.onscroll = function () {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        document.getElementById("nav").style.height = "50px";
    } else {
        document.getElementById("nav").style.height = "100px";
    }
}