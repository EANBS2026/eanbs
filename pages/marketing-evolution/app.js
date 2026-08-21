async function loadComponent(selector, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.querySelector(selector).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
  // Cargar Header y Footer
  await loadComponent("#header", "../../components/header.html");
  await loadComponent("#footer", "../../components/footer.html");

  // FAQ
  const buttons = document.querySelectorAll(".faq-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector(".faq-icon");

      // Cerrar las demás
      document.querySelectorAll(".faq-content").forEach((item) => {
        if (item !== content) {
          item.classList.add("hidden");
        }
      });

      // Girar los demás iconos
      document.querySelectorAll(".faq-icon").forEach((i) => {
        if (i !== icon) {
          i.style.transform = "rotate(0deg)";
        }
      });

      // Abrir/Cerrar actual
      content.classList.toggle("hidden");

      if (content.classList.contains("hidden")) {
        icon.style.transform = "rotate(0deg)";
      } else {
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
});
