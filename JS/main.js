function linkClickedAnimation() {
    sessionStorage.setItem("lca", "1");
}

function linkLoadAnimation() {
    let omglca = sessionStorage.getItem("lca");
    if ( omglca == 1 ) {
        sessionStorage.setItem("lca", "0");
        document.getElementById("preloading-animation").style.animationDirection = "reverse";
        document.getElementById("preloading-animation").style.animationPlayState = "running";
    }
}

    function scrollIndicatorFunction() {
        var elementScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollPos = (elementScroll / windowHeight) * 100;
        document.getElementById("scroll-indicator-bar").style.width = scrollPos + "%";
    }

function navigationScroll() {
    if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
        document.getElementById("header").style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))";
        document.getElementById("header").style.backdropFilter = "blur(10px)";
        document.getElementById("header").style.border = "1px solid rgba(255, 255, 255, 0.18)";
        document.getElementById("header").style.boxShadow = "0 0px 32px 0 rgba(0, 0, 0, 0.37)";
        document.getElementById("header").style.height = "86px";
        document.getElementById("main-logo").style.height = "70px";
        document.getElementById("main-logo").style.marginBlock = "7.5px";
        document.getElementById("main-logo").style.borderRadius = "10px";
        document.getElementById("nav-link-1").style.paddingBlock = "15px";
        document.getElementById("nav-link-2").style.paddingBlock = "15px";
        document.getElementById("nav-link-3").style.paddingBlock = "15px";
        document.getElementById("nav-link-active").style.paddingBlock = "15px";
        document.getElementById("nav-link-1").style.marginBlock = "15.5px";
        document.getElementById("nav-link-2").style.marginBlock = "15.5px";
        document.getElementById("nav-link-3").style.marginBlock = "15.5px";
        document.getElementById("nav-link-active").style.marginBlock = "15.5px";
        document.getElementById("nav-link-1").style.marginInline = "5px";
        document.getElementById("nav-link-2").style.marginInline = "5px";
        document.getElementById("nav-link-3").style.marginInline = "5px";
        document.getElementById("nav-link-active").style.marginInline = "5px";
        document.getElementById("nav-link-1").style.borderRadius = "5px";
        document.getElementById("nav-link-2").style.borderRadius = "5px";
        document.getElementById("nav-link-3").style.borderRadius = "5px";
        document.getElementById("nav-link-active").style.borderRadius = "5px";
        document.getElementById("nav-link-1").style.backgroundColor = "hsla(229, 89%, 4%, 0.75)";
        document.getElementById("nav-link-2").style.backgroundColor = "hsla(229, 89%, 4%, 0.75)";
        document.getElementById("nav-link-3").style.backgroundColor = "hsla(229, 89%, 4%, 0.75)";
        document.getElementById("nav-link-active").style.backgroundColor = "hsla(228, 90%, 16%, 0.75)";
      }
    else {
        document.getElementById("header").style.background = "#010411";
        document.getElementById("header").style.backdropFilter = "blur(0px)";
        document.getElementById("header").style.border = "0";
        document.getElementById("header").style.boxShadow = "0";
        document.getElementById("header").style.height = "85px";
        document.getElementById("main-logo").style.height = "85px";
        document.getElementById("main-logo").style.marginBlock = "0px";
        document.getElementById("main-logo").style.borderRadius = "0px";
        document.getElementById("nav-link-1").style.paddingBlock = "30.5px";
        document.getElementById("nav-link-2").style.paddingBlock = "30.5px";
        document.getElementById("nav-link-3").style.paddingBlock = "30.5px";
        document.getElementById("nav-link-active").style.paddingBlock = "30.5px";
        document.getElementById("nav-link-1").style.marginBlock = "0px";
        document.getElementById("nav-link-2").style.marginBlock = "0px";
        document.getElementById("nav-link-3").style.marginBlock = "0px";
        document.getElementById("nav-link-active").style.marginBlock = "0px";
        document.getElementById("nav-link-1").style.marginInline = "0px";
        document.getElementById("nav-link-2").style.marginInline = "0px";
        document.getElementById("nav-link-3").style.marginInline = "0px";
        document.getElementById("nav-link-active").style.marginInline = "0px";
        document.getElementById("nav-link-1").style.borderRadius = "0px";
        document.getElementById("nav-link-2").style.borderRadius = "0px";
        document.getElementById("nav-link-3").style.borderRadius = "0px";
        document.getElementById("nav-link-active").style.borderRadius = "0px";
        document.getElementById("nav-link-1").style.backgroundColor = "hsla(229, 89%, 4%, 1)";
        document.getElementById("nav-link-2").style.backgroundColor = "hsla(229, 89%, 4%, 1)";
        document.getElementById("nav-link-3").style.backgroundColor = "hsla(229, 89%, 4%, 1)";
        document.getElementById("nav-link-active").style.backgroundColor = "hsla(228, 90%, 16%, 1)";
      }
}