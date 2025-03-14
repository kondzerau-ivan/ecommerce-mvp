import { handleCustomerLogin } from './auth';
import './style.css';

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".js-login") as HTMLButtonElement;
  const accountButton = document.querySelector(".account") as HTMLAnchorElement;

  if (loginButton && accountButton)
    loginButton.addEventListener('click', () => handleCustomerLogin(loginButton, accountButton));

  // Update the copyright date
  const copyrightDate = document.querySelector(".js-copyright-date") as HTMLElement;
  if (copyrightDate) {
    copyrightDate.innerText = new Date().getFullYear().toString();
  }
});
