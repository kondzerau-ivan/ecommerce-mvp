import { getCustomerData } from '../api';
import { loginButton, accountButton, customerImage, customerGreeting } from '../selectors';

const setCustomerAccessToken = (token: string): void => {
  document.cookie = `customerAccessToken=${token}; path=/; samesite=strict`;
};

const setCustomerLoginEvent = (data: object): void => {
  const event = new CustomEvent('login:before', {
    detail: {
      bubbles: true,
      cancelable: true,
      user: data
    }
  });

  window.dispatchEvent(event);
};

const setCustomerLogoutEvent = (): void => {
  const event = new CustomEvent('logout', {
    detail: {
      isLogin: false,
      bubbles: true,
      cancelable: true
    }
  });

  window.dispatchEvent(event);
};

export const handleLoginButtonClick = async (): Promise<void> => {
  loginButton.classList.add('loading');
  loginButton.disabled = true;

  const data = await getCustomerData();

  setCustomerLoginEvent(data);
  setCustomerAccessToken(data.accessToken);

  loginButton.classList.add('hidden');
  loginButton.classList.remove('loading');
  accountButton.classList.remove('hidden');

  
  if (customerImage) customerImage.setAttribute('src', data.image);

  if (customerGreeting) {
    customerGreeting.innerHTML = `Hey <strong>${data.firstName}</strong>!`;
    customerGreeting.classList.remove('hidden');
  };

};

export const handleLogoutButtonClick = (): void => {
  document.cookie = `customerAccessToken=; path=/; Max-Age=-1; samesite=strict`;
  accountButton.classList.add('hidden');
  loginButton.classList.remove('hidden');
  loginButton.disabled = false;
  customerGreeting.classList.add('hidden');
  customerImage.setAttribute('src', '');
  setCustomerLogoutEvent();
};
