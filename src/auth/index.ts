import { getCustomerData } from '../api';

const setCustomerAccessToken = (token: string): void => {
  document.cookie = `customerAccessToken=${token}; path=/; samesite=strict`;
};

const setCustomerAuthenticatedView = (loginButton: HTMLButtonElement, accountButton: HTMLAnchorElement) => {
  loginButton.classList.add('hidden');
  loginButton.disabled = false;
  accountButton.classList.remove('hidden');
};

export const handleCustomerLogin = async (loginButton: HTMLButtonElement, accountButton: HTMLAnchorElement): Promise<void> => {
  loginButton.disabled = true;
  const data = await getCustomerData();
  const token = data.accessToken;
  setCustomerAccessToken(token);
  setCustomerAuthenticatedView(loginButton, accountButton);
};
