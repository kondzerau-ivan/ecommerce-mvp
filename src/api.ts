import { LOGIN_URL, GET_PRODUCTS_DATA } from "./config";
import { Product } from "./types/IProduct";

interface GetCustomerTokenParams {
  username?: string;
  password?: string;
}

interface GetCustomerTokenResponse {
  accessToken: string;
  image: string;
  firstName: string;
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

export const getProductsData = async (): Promise<Product[]> => {
  const url = `${GET_PRODUCTS_DATA}?select=id,title,description,images,price`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
