window.addEventListener("mousemove", function (details) {
  let rect = document.querySelector("#rect");
  let xVal = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );

  gsap.to("#rect", {
    left: xVal + "px",
    ease: Power3,
  });
});

window.addEventListener("mousemove", function (details2) {
  let Rect = this.document.querySelector("#rect");
  let yVal = gsap.utils.mapRange(
    0,
    window.innerHeight,
    100 + Rect.getBoundingClientRect().width / 2,
    window.innerHeight - (100 + Rect.getBoundingClientRect().width / 2),
    details2.clientY
  );

  gsap.to("#rect", {
    top: yVal + "px",
    ease: Power3,
  });
});
