addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: false,
      offset: 100,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  });
});
