const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("displayed");
    } else {
      entry.target.classList.remove("displayed");
    }
  });
});
document.querySelectorAll(".box").forEach((box) => {
  observer.observe(box);
});
