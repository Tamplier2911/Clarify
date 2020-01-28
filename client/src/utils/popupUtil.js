export const popModal = message => {
  const modal = document.querySelector("#modal");
  const info = document.querySelector("#info");

  modal.style.display = "block";
  info.textContent = message;
};
