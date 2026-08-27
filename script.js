document.addEventListener("DOMContentLoaded", () => {
  // 1. Isi tahun copyright otomatis
  document.getElementById("year").textContent = new Date().getFullYear();

  // 2. Animasi 3D Tilt (Miring saat di-hover) untuk PC
  const cards = document.querySelectorAll(".link-card");
  
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / 8) * -1;
      const rotateY = (x - centerX) / 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    card.addEventListener("mouseenter", () => {
      card.style.transition = "border-color 0.4s ease, box-shadow 0.4s ease";
    });

    // 3. Efek klik (Mobile & PC)
    card.addEventListener("click", () => {
      const label = card.dataset.label;
      console.log(`Mengarahkan ke: ${label}`);
      
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.96)`;
      setTimeout(() => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      }, 150);
    });
  });

  console.log("Zen Linktree V4 (Cyberpunk Edition) Loaded!");
});