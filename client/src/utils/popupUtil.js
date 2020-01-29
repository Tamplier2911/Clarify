export const popModal = (heading, message) => {
  const modal = document.querySelector("#modal");
  const head = document.querySelector("#modal-head");
  const info = document.querySelector("#modal-info");

  modal.style.display = "block";
  head.textContent = heading;
  info.textContent = message;
};
