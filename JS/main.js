function getElement(id) {
  return document.getElementById(id);
}

function linkClickedAnimation() {
    sessionStorage.setItem("lca", "1");
}

function linkLoadAnimation() {
    let omglca = sessionStorage.getItem("lca");
    if ( omglca == 1 ) {
        sessionStorage.setItem("lca", "0");
        getElement("preloading-animation").style.animationDirection = "reverse";
        getElement("preloading-animation").style.animationPlayState = "running";
    }
}

function scrollIndicatorFunction() {
    var elementScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPos = (elementScroll / windowHeight) * 100;
    getElement("scroll-indicator-bar").style.width = scrollPos + "%";
}

var navPosition = 0;

function navigationScroll() {
    if (window.innerWidth > 740) {
        navPosition = 0
        getElement('nav-links').style.transform = 'translateY(0px)';
        if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
            getElement("header").style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))";
            getElement("header").style.backdropFilter = "blur(10px)";
            getElement("header").style.border = "1px solid rgba(255, 255, 255, 0.18)";
            getElement("header").style.boxShadow = "0 0px 32px 0 rgba(0, 0, 0, 0.37)";
            getElement("header").style.height = "86px";
            getElement("main-logo").style.height = "70px";
            getElement("main-logo").style.marginBlock = "7.5px";
            getElement("main-logo").style.borderRadius = "10px";
            getElement("nav-link-1").style.paddingBlock = "15px";
            getElement("nav-link-2").style.paddingBlock = "15px";
            getElement("nav-link-3").style.paddingBlock = "15px";
            getElement("nav-link-active").style.paddingBlock = "15px";
            getElement("nav-link-1").style.marginBlock = "15.5px";
            getElement("nav-link-2").style.marginBlock = "15.5px";
            getElement("nav-link-3").style.marginBlock = "15.5px";
            getElement("nav-link-active").style.marginBlock = "15.5px";
            getElement("nav-link-1").style.marginInline = "5px";
            getElement("nav-link-2").style.marginInline = "5px";
            getElement("nav-link-3").style.marginInline = "5px";
            getElement("nav-link-active").style.marginInline = "5px";
            getElement("nav-link-1").style.borderRadius = "5px";
            getElement("nav-link-2").style.borderRadius = "5px";
            getElement("nav-link-3").style.borderRadius = "5px";
            getElement("nav-link-active").style.borderRadius = "5px";
            getElement("nav-link-1").style.backgroundColor = "hsla(229, 89%, 4%, 0.75)";
            getElement("nav-link-2").style.backgroundColor = "hsla(229, 89%, 4%, 0.75)";
            getElement("nav-link-3").style.backgroundColor = "hsla(229, 89%, 4%, 0.75)";
            getElement("nav-link-active").style.backgroundColor = "hsla(228, 90%, 16%, 0.75)";
        }
        else {
            getElement("header").style.background = "#010411";
            getElement("header").style.border = "0";
            getElement("header").style.boxShadow = "0px 0px 10px #010411";
            getElement("header").style.height = "85px";
            getElement("main-logo").style.height = "85px";
            getElement("main-logo").style.marginBlock = "0px";
            getElement("main-logo").style.borderRadius = "0px";
            getElement("nav-link-1").style.paddingBlock = "30.5px";
            getElement("nav-link-2").style.paddingBlock = "30.5px";
            getElement("nav-link-3").style.paddingBlock = "30.5px";
            getElement("nav-link-active").style.paddingBlock = "30.5px";
            getElement("nav-link-1").style.marginBlock = "0px";
            getElement("nav-link-2").style.marginBlock = "0px";
            getElement("nav-link-3").style.marginBlock = "0px";
            getElement("nav-link-active").style.marginBlock = "0px";
            getElement("nav-link-1").style.marginInline = "0px";
            getElement("nav-link-2").style.marginInline = "0px";
            getElement("nav-link-3").style.marginInline = "0px";
            getElement("nav-link-active").style.marginInline = "0px";
            getElement("nav-link-1").style.borderRadius = "0px";
            getElement("nav-link-2").style.borderRadius = "0px";
            getElement("nav-link-3").style.borderRadius = "0px";
            getElement("nav-link-active").style.borderRadius = "0px";
            getElement("nav-link-1").style.backgroundColor = "hsla(229, 89%, 4%, 1)";
            getElement("nav-link-2").style.backgroundColor = "hsla(229, 89%, 4%, 1)";
            getElement("nav-link-3").style.backgroundColor = "hsla(229, 89%, 4%, 1)";
            getElement("nav-link-active").style.backgroundColor = "hsla(228, 90%, 16%, 1)";
        }
    }else{
        getElement("header").style.background = "#010411";
        getElement("header").style.border = "0";
        getElement("header").style.boxShadow = "0px 0px 10px #010411";
        getElement("header").style.height = "85px";
        getElement("main-logo").style.height = "70px";
        getElement("main-logo").style.marginBlock = "0px";
        getElement("main-logo").style.borderRadius = "0px";
        getElement("nav-link-1").style.backgroundColor = "hsla(229, 89%, 4%, 1)";
        getElement("nav-link-2").style.backgroundColor = "hsla(229, 89%, 4%, 1)";
        getElement("nav-link-3").style.backgroundColor = "hsla(229, 89%, 4%, 1)";
        getElement("nav-link-active").style.backgroundColor = "hsla(228, 90%, 16%, 1)";
        getElement("nav-link-1").style.paddingBlock = "30.5px";
        getElement("nav-link-2").style.paddingBlock = "30.5px";
        getElement("nav-link-3").style.paddingBlock = "30.5px";
        getElement("nav-link-active").style.paddingBlock = "30.5px";
        getElement("nav-link-1").style.marginBlock = "1vh";
        getElement("nav-link-2").style.marginBlock = "1vh";
        getElement("nav-link-3").style.marginBlock = "1vh";
        getElement("nav-link-active").style.marginBlock = "1vh";
        getElement("nav-link-1").style.marginInline = "1vh";
        getElement("nav-link-2").style.marginInline = "1vh";
        getElement("nav-link-3").style.marginInline = "1vh";
        getElement("nav-link-active").style.marginInline = "1vh";
        getElement("nav-link-1").style.borderRadius = "10px";
        getElement("nav-link-2").style.borderRadius = "10px";
        getElement("nav-link-3").style.borderRadius = "10px";
        getElement("nav-link-active").style.borderRadius = "10px";
    }
};


function navPositionAction() {
    navPosition = 1 - navPosition;
    if (navPosition === 1) {
        document.getElementById('nav-links').style.transform = 'translateY(-300px)';
    } else {
        document.getElementById('nav-links').style.transform = 'translateY(0px)';
    }
};