import { rest } from "msw";
import { getProductList } from "../data/productsData";

export const getProducts = () =>
  rest.get("http://localhost:5001/products", (req, res, ctx) => {
    return res(ctx.json(getProductList()));
  });

export const handlers = [getProducts()];
