const whatsapp = "https://wa.me/551140231827?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Iris%20Est%C3%A9tica%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";
document.querySelectorAll("[data-whatsapp]").forEach(link => link.href = whatsapp);
document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("mainNav");
const updateNav = () => nav.classList.toggle("scrolled", window.scrollY > 30);
updateNav();
window.addEventListener("scroll", updateNav, { passive: true });

document.querySelectorAll("#navMenu .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = bootstrap.Collapse.getInstance(document.getElementById("navMenu"));
    if (menu) menu.hide();
  });
});
