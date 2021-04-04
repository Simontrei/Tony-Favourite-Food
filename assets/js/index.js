navigator.geolocation.getCurrentPosition(() => {}, () => {});

window.addEventListener('load', () => {
  (function superImportantWebsiteFunction(duration) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + duration) {
    }        
  })(2500);

  document.querySelector('header > h1').textContent = "Tony's Favorite Foods";
  document.querySelector('footer').textContent = "Built with 🐟 by Tony the 🐈";
});

