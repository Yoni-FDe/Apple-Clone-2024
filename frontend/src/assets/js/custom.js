/* global $ */
$(document).ready(function () {
  let footerLinkEle = $(".footer-links-wrapper h3");
  console.log(footerLinkEle);
  let footEle = $(".footer-links-wrapper ul");
  console.log(footEle);
  if (window.matchMedia("(max-width: 768px)").matches) {
    footerLinkEle.on("click", function () {
      $(this).next().toggle();
      $(this).toggleClass("expand");
    });
  }
  $(window).resize(function () {
    console.log($(window).width());
    //    reload the page
    location.reload();
  });
});
