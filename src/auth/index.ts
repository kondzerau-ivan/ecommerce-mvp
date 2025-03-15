import { getCustomerData } from '../api';

const setCustomerAccessToken = (token: string): void => {
  document.cookie = `customerAccessToken=${token}; path=/; samesite=strict`;
};

const setCustomerAuthenticatedView = (loginButton: HTMLButtonElement, accountButton: HTMLAnchorElement) => {
  loginButton.classList.add('hidden');
  loginButton.disabled = false;
  accountButton.classList.remove('hidden');
};

const setCustomerLoginEvent = (data: Object): void => {
  const event = new CustomEvent('login', {
    detail: {
      isLogin: true,
      user: data
    }
  });

  window.dispatchEvent(event);
}

export const handleLoginButtonClick = async (loginButton: HTMLButtonElement, accountButton: HTMLAnchorElement): Promise<void> => {
  loginButton.disabled = true;
  const data = await getCustomerData();
  setCustomerLoginEvent(data);
  setCustomerAccessToken(data.accessToken);
  setCustomerAuthenticatedView(loginButton, accountButton);
};
