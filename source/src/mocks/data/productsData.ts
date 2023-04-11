import { Product } from "../../types/product";

let productList: Product[] = [
  ...new Array(20).fill(0).map((_, i) => {
    return {
      id: (i + 1).toString(),
      name: "Product" + (i + 1),
      price: "45",
    };
  }),
];

export const getProductList = () => {
  return productList;
};
