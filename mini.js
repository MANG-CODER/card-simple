document.addEventListener("DOMContentLoaded", () => {
  // hati (elemen ♥)
  const heart = document.querySelector(".heart h4");

  // tombol heart
  const likeBtn = document.querySelector(".like-btn");

  // gambar utama (img ke-2 di dalam .card)
  const mainImage = document.querySelector(".utama img:nth-of-type(1)");

  // klik tombol → toggle
  likeBtn.addEventListener("click", () => {
    heart.classList.toggle("active");
  });

  // double-click gambar → ON + pop
  mainImage.addEventListener("dblclick", () => {
    heart.classList.add("active");

    // trigger ulang animasi pop
    heart.style.animation = "none";
    void heart.offsetWidth; // reset animation
    heart.style.animation = "pop 0.5s ease";
  });
});
