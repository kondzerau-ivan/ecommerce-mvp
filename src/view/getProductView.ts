import { Product } from "../types/IProduct";

export const getProductView = ({ id, title, description, images, price }: Product): string => {
  return (`
    <div id=${id} class="card shadow-sm">
      <figure>
        <img src="${images[0]}" alt="${title}." />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${title}</h2>
        <p>${description}</p>
        <div class="card-actions justify-between items-center">
          <div class="badge badge-soft badge-primary badge-xl">$${price}</div>
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  `);
};
