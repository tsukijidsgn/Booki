window.addEventListener("scroll", function() {
    const star = document.querySelector(".star");
    star.style.transform = "translateY(" + window.scrollY + "px)";
  });