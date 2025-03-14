import { LOGIN_URL } from "./config";

interface GetCustomerTokenParams {
  username?: string;
  password?: string;
}

interface GetCustomerTokenResponse {
  accessToken: string;
}

export const getCustomerData = async ({username = "emilys", password = "emilyspass"}: GetCustomerTokenParams = {}): Promise<GetCustomerTokenResponse> => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json() as GetCustomerTokenResponse;
  } catch (error) {
    console.error('Error fetching customer token:', error);
    throw error; // Re-throw the error after logging it
  }
};
