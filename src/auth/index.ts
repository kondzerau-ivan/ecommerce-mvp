import { getCustomerData } from '../api';

const setCustomerAccessToken = (token: string): void => {
  document.cookie = `customerAccessToken=${token}; path=/; samesite=strict`;
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

  loginButton.classList.add('hidden');
  loginButton.disabled = false;
  accountButton.classList.remove('hidden');

  const customerImage: HTMLImageElement | null = document.querySelector('.js-customer-image');
  if (customerImage) customerImage.setAttribute('src', data.image);
};
