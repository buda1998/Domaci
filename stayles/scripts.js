const slike = document.querySelectorAll(".galerija img");
slike.forEach((slika) => {
  slika.addEventListener("click", () => {
    const velikaSlika = document.createElement("img");
    velikaSlika.src = slika.src;
    velikaSlika.alt = slika.alt;
    velikaSlika.classList.add("velika-slika");
    document.body.appendChild(velikaSlika);
    velikaSlika.addEventListener("click", () => {
      document.body.removeChild(velikaSlika);
    });
  });
});
