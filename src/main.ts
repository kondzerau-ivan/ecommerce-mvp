import './style.css';
import { getCustomerToken } from './api';

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".js-login-button") as HTMLButtonElement;
  if (loginButton) {
    loginButton.addEventListener("click", async () => {
      const token = await getCustomerToken();
      console.log(token);
    });
  }

  // Update the copyright date
  const copyrightDate = document.querySelector(".js-copyright-date") as HTMLElement;
  if (copyrightDate) {
    copyrightDate.innerText = new Date().getFullYear().toString();
  }
});
