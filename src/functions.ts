import { getCustomerToken } from './api';

export const login = (loginButton: HTMLButtonElement, accountButton: HTMLAnchorElement): void => {
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
