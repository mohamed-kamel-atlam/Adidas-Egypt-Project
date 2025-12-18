function headerBackgroundObserver() {
  let header = document.querySelector("header");
  let firstSection = document.querySelector(".home");

  let observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        header.classList.remove("after-home");
      } else {
        header.classList.add("after-home");
      }
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(firstSection);
}

headerBackgroundObserver();