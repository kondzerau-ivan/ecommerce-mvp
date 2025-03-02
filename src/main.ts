import './style.css';

document.addEventListener("DOMContentLoaded", () => {
  const copyrightDate = document.querySelector("#copyright .date");
  if (copyrightDate) {
    copyrightDate.innerHTML = new Date().getFullYear().toString();
  }
});
