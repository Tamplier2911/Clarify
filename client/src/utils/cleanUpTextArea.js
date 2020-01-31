export const cleanUpTextArea = id => {
  const area = document.querySelector(`#${id}`);
  area.value = "";
};
