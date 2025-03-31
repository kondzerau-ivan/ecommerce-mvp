import { getProductsData } from '../api';
import { getProductView } from './getProductView';
import { productsGrid } from '../selectors';
import { Product } from '../types/IProduct';

export const renderProducts = async () => {
  const products = await getProductsData();
  products.forEach((product: Product) => {
    const productCard: string = getProductView(product);
    console.log(productCard);
    productsGrid.innerHTML += productCard;
  });
};
