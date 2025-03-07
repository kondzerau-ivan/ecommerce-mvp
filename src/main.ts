import './style.css';
import { getCustomerToken } from './api';

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".js-login") as HTMLButtonElement;
  const accountButton = document.querySelector(".account") as HTMLAnchorElement;

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      loginButton.disabled = true;

      setTimeout(async () => {
        const token = await getCustomerToken();
        console.log(token);
        loginButton.classList.add('hidden');
        loginButton.disabled = false;
        accountButton.classList.remove('hidden');
      }, 1000);
    });
  }

  // Update the copyright date
  const copyrightDate = document.querySelector(".js-copyright-date") as HTMLElement;
  if (copyrightDate) {
    copyrightDate.innerText = new Date().getFullYear().toString();
  }
});
