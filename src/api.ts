import { LOGIN_URL, GET_PRODUCTS_DATA } from "./config";

interface GetCustomerTokenParams {
  username?: string;
  password?: string;
}

interface GetCustomerTokenResponse {
  accessToken: string;
  image: string;
  firstName: string;
}

interface GetCustomerProductsResponse {
  products: {
    id: number,
    title: string,
    description: string,
    images: string[]
  };
  total: number;
  skip: number;
  limit: number;
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

    return await response.json();
  } catch (error) {
    console.error('Error fetching customer token:', error);
    throw error; // Re-throw the error after logging it
  }
};

export const getProductsData = async (): Promise<GetCustomerProductsResponse> => {
  const url = `${GET_PRODUCTS_DATA}?select=id,title,description,images`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
