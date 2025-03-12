import { getCustomerData } from './api';

const setCustomerAccessToken = (token: string): void => {
  document.cookie = `customerAccessToken=${token}; path=/; samesite=strict`;
}

const setCustomerAuthenticatedView = (loginButton: HTMLButtonElement, accountButton: HTMLAnchorElement) => {
  loginButton.classList.add('hidden');
  loginButton.disabled = false;
  accountButton.classList.remove('hidden');
}

export const handleCustomerLogin = (loginButton: HTMLButtonElement, accountButton: HTMLAnchorElement): void => {
  loginButton.disabled = true;

  setTimeout(async () => {
    const data = await getCustomerData();
    const token = data.accessToken;
    setCustomerAccessToken(token);
    setCustomerAuthenticatedView(loginButton, accountButton);
  }, 1000);
}
