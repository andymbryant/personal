window.onscroll = function () {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").style.height = "50px";
    } else {
        document.getElementById("nav").style.height = "100px";
    }
}