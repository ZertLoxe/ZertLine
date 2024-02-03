function getElement(id) {
    return document.getElementById(id)
}

let postsData = null;
let postsDataKeys = [];

const sharedLink = "https://www.dropbox.com/scl/fi/mrusdrepjd6esr1wt3sxj/posts.json?rlkey=2wgj9ouddf93zhd2u5kxm0wcs&dl=0";

const directLink = sharedLink.replace("www.dropbox.com", "dl.dropboxusercontent.com");

fetch(directLink)
    .then(posts => posts.json())
    .then((posts) => {
        postsData = posts;

        let outPostList = "";
        for (let i = Object.keys(posts).length - 1; i >= 0; i--) {
            postsDataKeys.push(Object.keys(posts)[i]);
            let postKey = Object.keys(posts)[i];
            outPostList += "<a class='posts-card' id='post-" + postKey + "' href='posts.html?post=" + postKey + "'><div class='post-card-content'><h1 class='post-card-title'>" + posts[postKey].postTitle + "</h1><p class='post-card-about'>" + posts[postKey].postAbout + "</p></div></a>";
        }
        getElement("posts-deck").innerHTML = outPostList;
    });

let searchInput;

function searchPosts() {
    for (var key of postsDataKeys) {
        document.getElementById("post-" + key).style.display = "";
    };
    let searchKey, searchTitle, searchCategory, searchAbout;
    searchInput = document.getElementById("postsSearch").value.toUpperCase();
    for (var key of postsDataKeys) {
        searchKey = key.toUpperCase();

        searchTitle = postsData[key].postTitle.toUpperCase();

        searchCategory = postsData[key].postCategory.map(function(i) {
            return i.toUpperCase();
        });

        searchAbout = postsData[key].postAbout.toUpperCase();

        if (searchKey.includes(searchInput) === false) {
            if (searchTitle.includes(searchInput) === false) {
                if (searchCategory.includes(searchInput) === false) {
                    if (searchAbout.includes(searchInput) === false) {
                        document.getElementById("post-" + key).style.display = "none";
                    };
                };
            };
        };
    };
};

let postVarLink = null;

const loadPostCode = async () => {

    return new Promise((resolve, reject) => {

        var postVarLinkPart1 = window.location.search.substring(1).split("&");
        for (var i = 0; i < postVarLinkPart1.length; i++) {
            var postVarLinkPart2 = postVarLinkPart1[i].split("=");
            if (postVarLinkPart2[0] === 'post') {

                postVarLink = decodeURIComponent(postVarLinkPart2[1].replace(/\+/g, ' '));

                const sharedLink = "https://www.dropbox.com/scl/fi/mrusdrepjd6esr1wt3sxj/posts.json?rlkey=2wgj9ouddf93zhd2u5kxm0wcs&dl=0";

                const directLink = sharedLink.replace("www.dropbox.com", "dl.dropboxusercontent.com");

                const targetTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                fetch(directLink)
                    .then(post => post.json())
                    .then((post) => {

                        if (postVarLink in post) {

                            getElement("posts-header").innerHTML = post[postVarLink].postTitle;

                            let outPostElements = '';
                            let outPostEditTime = '';

                            for (let i = 0; i < post[postVarLink].postElements.length; i++) {
                                if (JSON.stringify(post[postVarLink].postElements[i].postElementStructure) !== JSON.stringify(["false", "0", "0"])) {
                                    let outTitle = '';
                                    let outMedia = '';
                                    let outText = '';
                                    let videoControls = '';
                                    let AGDataSlider = 1;

                                    if (post[postVarLink].postElements[i].postElementStructure[0] === "true") {
                                        outTitle = "<div id='post-element-title-holder'><p>" + post[postVarLink].postElements[i].title + "</p></div>";
                                    };

                                    if (post[postVarLink].postElements[i].postElementStructure[1] === "2") {
                                        for (let j = 0; j < post[postVarLink].postElements[i].media.length; j++) {
                                            if (post[postVarLink].postElements[i].media[j][0] === "I") {
                                                outMedia += "<img src='https://i.ibb.co/" + post[postVarLink].postElements[i].media[j][1] + "' id='post-element-image' class='media-item' loading='lazy'>";
                                            } else {
                                                outMedia += "<iframe id='post-element-video' class='media-item' src='https://www.youtube.com/embed/" + post[postVarLink].postElements[i].media[j][1] + "?rel=0&modestbranding=1' frameborder='0' allowfullscreen></iframe>";
                                            };
                                        };
                                    } else {
                                        if (post[postVarLink].postElements[i].media[0] === "I") {
                                            outMedia = "<img src='https://i.ibb.co/" + post[postVarLink].postElements[i].media[1] + "' id='post-element-image' class='media-item' loading='lazy'>";
                                        } else {
                                            outMedia = "<iframe id='post-element-video' class='media-item' src='https://www.youtube.com/embed/" + post[postVarLink].postElements[i].media[1] + "?rel=0&modestbranding=1' frameborder='0' allowfullscreen></iframe>";
                                        };
                                    };

                                    if (post[postVarLink].postElements[i].postElementStructure[2] === "2") {
                                        for (let j = 0; j < post[postVarLink].postElements[i].text.length; j++) {
                                            outText += "<p>" + post[postVarLink].postElements[i].text[j] + "</p>";
                                        };
                                    } else {
                                        outText = "<p>" + post[postVarLink].postElements[i].text + "</p>";
                                    };

                                    if (post[postVarLink].postElements[i].elementShape === "RM") {
                                        outPostElements += "<div id='post-element-part-RM'><div id='post-element-title-text-holder'>" + outTitle + "<div id='post-element-text-holder'>" + outText + "</div></div><div id='post-element-media-holder'>" + outMedia + "</div></div><hr>";
                                    } else if (post[postVarLink].postElements[i].elementShape === "LM") {
                                        outPostElements += "<div id='post-element-part-LM'><div id='post-element-media-holder'>" + outMedia + "</div><div id='post-element-title-text-holder'>" + outTitle + "<div id='post-element-text-holder'>" + outText + "</div></div></div><hr>";
                                    } else if (post[postVarLink].postElements[i].elementShape === "AG") {
                                        outPostElements += "<div id='post-element-part-AG'>" + outTitle + "<div id='post-element-media-holder' class='AG-post-element-media-holder'><button class='AG-arrow-left-button' data-slider=" + AGDataSlider + " data-direction='left'></button><svg id='AG-arrow-left' class='AG-arrow-left' viewBox='0 0 650.34 1000'><path d='M618.4,926.79l-41.27,41.27c-42.58,42.58-111.62,42.58-154.2,0L31.93,577.06c-42.58-42.58-42.58-111.62,0-154.2L422.87,31.93c42.58-42.58,111.62-42.58,154.2,0l41.31,41.31c42.58,42.58,42.58,111.62,0,154.2l-234.01,234.01c-21.29,21.29-21.29,55.81,0,77.1l234.05,234.05c42.58,42.58,42.58,111.62,0,154.2Z'/></svg><div data-slider=" + AGDataSlider + " class='AG-post-element-media-holder-slider'>" + outMedia + "</div><button class='AG-arrow-right-button' data-slider=" + AGDataSlider + " data-direction='right'></button><svg id='AG-arrow-right' class='AG-arrow-right' viewBox='0 0 650.34 1000'><path d='M31.93,73.21L73.21,31.93c42.58-42.58,111.62-42.58,154.2,0l391,391c42.58,42.58,42.58,111.62,0,154.2L227.47,968.07c-42.58,42.58-111.62,42.58-154.2,0l-41.31-41.31c-42.58-42.58-42.58-111.62,0-154.2l234.01-234.01c21.29-21.29,21.29-55.81,0-77.1L31.93,227.4c-42.58-42.58-42.58-111.62,0-154.2Z'/></svg></div><div id='post-element-text-holder'>" + outText + "</div></div><hr>";
                                        AGDataSlider += 1
                                    } else {
                                        outPostElements += "<div id='post-element-part'>" + outTitle + "<div id='post-element-media-holder'>" + outMedia + "</div><div id='post-element-text-holder'>" + outText + "</div></div><hr>";
                                    };
                                };
                            }

                            if (post[postVarLink].time[1] !== null) {
                                outPostEditTime = "<div id='edit-time'><p>Post edited on " + moment(post[postVarLink].time[1]).tz(targetTimeZone).format('(MMM-D-YYYY) (h:mm a)') + "</p></div>";
                            };

                            let out = "<div id='post-elements-holder'>" + outPostElements +
                                "</div><div id='post-time'><div id='release-time'><p>Post released on " + moment(post[postVarLink].time[0]).tz(targetTimeZone).format('(MMM-D-YYYY) (h:mm a)') +
                                "</p></div>" + outPostEditTime + "</div>";

                            getElement("posts-data").innerHTML = out
                            console.log(post[postVarLink])

                            resolve();

                        } else {
                            getElement("posts-header").innerHTML = "Error";
                            getElement("posts-header").style.backgroundColor = "#ff0000";
                            getElement("posts-footer").innerHTML = "<p>the '" + postVarLink + "' post was not found :(</p>"
                            reject(new Error("Post not found"));
                        }

                    });

            }

        };
    });
};

const afterPostLoad = async () => {

    try {
        await loadPostCode();
        console.log('DOMContentLoaded event fired');

        const sliders = document.querySelectorAll('.AG-post-element-media-holder-slider');

        console.log('Sliders:', sliders);

        console.log(sliders.length + ' sliders found. Please work');

        sliders.forEach(function (slider) {
            console.log('Processing slider');

            const items = slider.querySelectorAll('.media-item');
            const totalItems = items.length;
            let currentIndex = 0;

            console.log('Total items in the slider:', totalItems);

            function updateSlider() {
                slider.style.transform = `translateX(${-currentIndex * 100}%)`;
            }

            function moveToNext() {
                currentIndex = (currentIndex + 1) % totalItems;
                updateSlider();
            }

            function moveToPrev() {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                updateSlider();
            }

            document.addEventListener('click', function (event) {
                console.log('Document click event fired');

                if (event.target.classList.contains('AG-arrow-left-button') || event.target.classList.contains('AG-arrow-right-button')) {
                    const sliderIndex = event.target.dataset.slider;
                    console.log("bruh")
                    if (sliderIndex === slider.dataset.slider) {
                        const direction = event.target.dataset.direction;

                        if (direction === 'left') {
                            console.log("bruh")
                            moveToPrev();
                        } else if (direction === 'right') {
                            console.log("bruh!")
                            moveToNext();
                        }
                    }
                }
            });
        });
    } catch (error) {
        console.error('Error:', error);
    }

};

afterPostLoad();