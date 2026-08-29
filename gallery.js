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
    var fullGallery = document.getElementById("image_gallery_full");
    var nextImage = fullGallery.children[carouselIndex].getAttribute("full_size");
    document.getElementById("full_size_image").src = nextImage;
    document.getElementById("prev_image_thumb").src = fullGallery.children[makeSafe(carouselIndex - 1)].getAttribute("src");
    document.getElementById("curr_image_thumb").src = fullGallery.children[carouselIndex].getAttribute("src");
    document.getElementById("next_image_thumb").src = fullGallery.children[makeSafe(carouselIndex + 1)].getAttribute("src");   
    
}

function makeSafe(bound) {
    var numChildren = document.getElementById("image_gallery_full").childElementCount;
    if (bound < 0) {
        return bound + numChildren;
    }
    if (bound >= numChildren) {
        return bound - numChildren;
    }
    return bound;
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
    var image = document.getElementById("full_size_image")
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