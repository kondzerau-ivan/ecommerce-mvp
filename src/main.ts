import './style.css';
import { handleLoginButtonClick, handleLogoutButtonClick } from './auth';
import { loginButton, accountButton, logoutButton } from './selectors';

document.addEventListener("DOMContentLoaded", () => {
  if (loginButton && accountButton)
    loginButton.addEventListener('click', handleLoginButtonClick);

  if (logoutButton) logoutButton.addEventListener('click', handleLogoutButtonClick);


  // Update the copyright date
  const copyrightDate = document.querySelector('.js-copyright-date') as HTMLElement;
  if (copyrightDate) {
    copyrightDate.innerText = new Date().getFullYear().toString();
  }
});
