var root = document.querySelector(":root");
let header = document.getElementById("header");
let headerTop = document.getElementById("header-top");
let headerLogo = document.getElementById("header-logo");
let contactUs = document.getElementById("contact-us");

window.onscroll = () => {
  if (window.scrollY == 0) {
    root.style.setProperty("--header", "#fff");
    header.setAttribute("data-transparent", "true");
    headerLogo.setAttribute("data-expanded", "true");
    headerTop.setAttribute("data-hidden", "false");
    contactUs.style.opacity = 0;
    contactUs.style.pointerEvents = "unset";
    contactUs.style.cursor = "auto";
  } else {
    root.style.setProperty("--header", "#000");
    header.setAttribute("data-transparent", "false");
    headerLogo.setAttribute("data-expanded", "false");
    headerTop.setAttribute("data-hidden", "true");
    contactUs.style.opacity = 1;
    contactUs.style.pointerEvents = "auto";
    contactUs.style.cursor = "pointer";
  }
};
