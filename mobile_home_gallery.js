var carouselIndex = 0;

function displayFullSize(index) {
    carouselIndex = index;
    displayImage();
}

function prevImage() {
    carouselIndex--;
    carouselIndex = makeSafe(carouselIndex);
    displayImage();
}

function nextImage() {
    carouselIndex++;
    carouselIndex = makeSafe(carouselIndex);
    displayImage();
}

function displayImage() {

    var toDisplay = document.getElementById("full_available_list").children[carouselIndex];
    var nextImage = toDisplay.getAttribute("src");
    var link = toDisplay.getAttribute("href");
    var text = toDisplay.getAttribute("horse_title");

    document.getElementById("mobile_home_gallery_text").textContent = text;
    document.getElementById("mobile_home_gallery_display").src = nextImage;
    document.getElementById("avail_gallery_outer").href = link;
}

function makeSafe(bound) {
    var numChildren = document.getElementById("full_available_list").childElementCount;
    if (bound < 0) {
        return bound + numChildren;
    }
    if (bound >= numChildren) {
        return bound - numChildren;
    }
    return bound;
}