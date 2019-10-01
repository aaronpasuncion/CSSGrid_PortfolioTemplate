var openOverlay = document.getElementById("open-overlay");
var navOverlay = document.querySelector("#overlay");
var body = document.querySelector("body");

openOverlay.addEventListener("click", () => {
  navOverlay.classList.contains("hidden")
    ? (navOverlay.classList.add("visible"),
      navOverlay.classList.remove("hidden"),
      body.classList.add("no-scroll"))
    : (navOverlay.classList.add("hidden"),
      navOverlay.classList.remove("visible"),
      body.classList.remove("no-scroll"));
});
