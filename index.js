var root = document.querySelector(":root");
let header = document.getElementById("header");
let headerLogo = document.getElementById("header-logo");
let contactUs = document.getElementById("contact-us");

window.onscroll = () => {
  if (window.scrollY == 0) {
    root.style.setProperty("--header", "#fff");
    headerLogo.setAttribute("data-expanded", "true");
    header.setAttribute("data-transparent", "true");
    contactUs.style.opacity = 0;
    contactUs.style.pointerEvents = "unset";
    contactUs.style.cursor = "auto";
  } else {
    root.style.setProperty("--header", "#000");
    headerLogo.setAttribute("data-expanded", "false");
    header.setAttribute("data-transparent", "false");
    contactUs.style.opacity = 1;
    contactUs.style.pointerEvents = "auto";
    contactUs.style.cursor = "pointer";
  }
};
