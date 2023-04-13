export const loading = (time) => {
  document.querySelector(".loading-box").style.display = "flex";
  document.querySelector(".main").style.filter = "flex";
  setTimeout(() => {
    // Show the main content and hide the loading page
    document.querySelector(".loading-box").style.display = "none";
    document.querySelector(".main").style.filter = "none";
  }, time);
};
