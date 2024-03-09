// const thumbs = document.querySelectorAll(".thumb");
// const bigImage = document.querySelector(".big-image");
// thumbs.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     if (e.target.classList.contains("active")) {
//       e.target.classList.remove("active");
//     }
//     bigImage.src = e.target.src;
//     bigImage.classList.add("fade");
//     setTimeout(function () {
//       bigImage.classList.remove("fade");
//     }, 500);
//     e.target.classList.add("active");
//   });
// });

const container = document.querySelector(".container");
const bigImg = document.querySelector(".big-image");
const thumbs = document.querySelectorAll(".thumb");
const overlay = document.querySelector(".overlay");
const overlayImage = document.querySelector(".overlay-image");
container.addEventListener("click", function (e) {
  thumbs.forEach(function (thumb) {
    // if (thumb.classList.contains("active")) {
    //   thumb.classList.remove("active");
    // }
    thumb.className = "thumb";
  });
  if (e.target.className == "thumb") {
    bigImg.src = e.target.src;
    bigImg.classList.add("fade");
    setTimeout(function () {
      bigImg.classList.remove("fade");
    }, 500);
    e.target.classList.add("active");
  }
  if (e.target.className == "big-image") {
    overlay.style.display = "inline-block";
    bigImg.style.opacity = "0";
    overlay.classList.add("fade");
    overlayImage.src = bigImg.src;
  }
  overlay.addEventListener("click", function (rv) {
    if (!overlayImage.contains(rv.target)) {
      overlay.style.display = "none";
      bigImg.style.opacity = "100";
    }
  });
});
