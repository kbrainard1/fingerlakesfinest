var carouselThumb = 0;
var carouselIndex = 0;

function displayFullSize(index) {
    carouselIndex = index;
    displayImage();
}

function prevImage() {
    carouselIndex--;
    displayImage();
}

function nextImage() {
    carouselIndex++;
    displayImage();
}

function displayImage() {
    checkBounds();
    var nextImage = document.getElementById("imageGallery").children[carouselIndex].getAttribute("full_size");
    document.getElementById("fullSizeImage").src = nextImage;
}

// "Scale this image to at most 80% of the page in terms of width/height,
// and then set the outer div to those dimensions" is not easily expressed
// in CSS in both firefox and chromium.
function resizeImage() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // ugh, mobile
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;
    if (windowWidth > screenWidth) {
        windowWidth = screenWidth;
    }
    if (windowHeight > screenHeight) {
        windowHeight = screenHeight;
    }

    var smallWindowWidth = windowWidth * 0.8;
    var smallWindowHeight = windowHeight * 0.8;

    // determine limiting dimension for image scaling
    var image = document.getElementById("fullSizeImage")
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;

    const widthFraction = smallWindowWidth / imageWidth;
    const heightFraction = smallWindowHeight / imageHeight;
    var adjustedWidth = imageWidth;
    var adjustedHeight = imageHeight;
    if (widthFraction < 1 || heightFraction < 1) {
        if (widthFraction < heightFraction) {
            adjustedWidth = imageWidth * widthFraction;
            adjustedHeight = imageHeight * widthFraction;
        } else {
            adjustedWidth = imageWidth * heightFraction;
            adjustedHeight = imageHeight * heightFraction;
        }
    }

    // update visible component dimensions
    image.style.width = adjustedWidth + "px";
    image.style.height = adjustedHeight + "px";
}

function checkBounds() {
    var numChildren = document.getElementById("imageGallery").childElementCount;
    if (carouselIndex <= 0) {
        hide("prev_image");
        carouselIndex = 0;
    } else {
        show("prev_image");
    }
    if (carouselIndex >= numChildren - 1) {
        hide("next_image");
        carouselIndex = numChildren - 1;
    } else {
        show("next_image");
    }
}

function hide(elemClass) {
    document.querySelector("." + elemClass).className = elemClass + " inline hidden";
}

function show(elemClass) {
    document.querySelector("." + elemClass).className = elemClass;
}