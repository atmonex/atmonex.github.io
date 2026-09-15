"use strict";
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");
function closeMenu() {
  menu.classList.remove("is-open");
  header.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "Menu";
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "Close" : "Menu";
  menu.classList.toggle("is-open", open);
  header.classList.toggle("menu-open", open);
});
document
  .querySelectorAll(".main-nav a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);
function updateHeader() {
  header.classList.toggle("scrolled", scrollY > 25);
}
addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
// Open a capability before navigating to it, including direct incoming links.
function openHashTarget(hash) {
  const id = hash.slice(1);
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) target.open = true;
}
document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) =>
    link.addEventListener("click", () => openHashTarget(link.hash)),
  );
addEventListener("hashchange", () => openHashTarget(location.hash));
openHashTarget(location.hash);
document.querySelectorAll(".capability-list details").forEach((detail) => {
  const update = () => {
    detail.querySelector(".detail-action").textContent = detail.open
      ? "Close"
      : "Explore";
  };
  detail.addEventListener("toggle", update);
  update();
});
document.querySelector("#copy-email").addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText("blueingel@hotmail.com");
    status.textContent = "Email address copied.";
  } catch {
    status.textContent = "Please select and copy the email address above.";
  }
});
document.querySelector("#year").textContent = String(new Date().getFullYear());
