function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");
  let currentImage = document.querySelector(".current");

  thumbnails.forEach(function(thumbnail) {
    // Preload large images.
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;
    
    thumbnail.addEventListener("click", function() {
      // Set clicked image as display image.
      mainImage.setAttribute("src", newImageSrc);

      let newMainImageAlt = thumbnail.dataset.description;
      mainImage.setAttribute("alt", newMainImageAlt);

      let newCurrentImg = thumbnail.dataset.smallVersion;
      currentImage.setAttribute("src", newCurrentImg);

      // Change which image is current.
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update image info elements.
      let galleryInfo = document.querySelector("#gallery-info");
      let title = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;

    });
  });

}