const btn = document.querySelector(".hero__btn")
const modal = document.querySelector(".modal")

btn.addEventListener("click", () => {
  modal.classList.add("modal__open")
})

modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.closest(".modal__close")) {
    modal.classList.remove("modal__open")
  }
})
