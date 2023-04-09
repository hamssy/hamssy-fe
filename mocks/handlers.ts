import { rest } from "msw";
import { products } from "@/mocks/dummy_products";
import { product } from "@/mocks/dummy_product";

export const handlers = [
  // Handles a POST /login request
  rest.get("*/categories/:categoryId", (req, res, ctx) => {
    return res(ctx.json(products));
  }),
  // Handles a GET /user request
  rest.get("*/products/:productId", (req, res, ctx) => {
    return res(ctx.json(product));
  }),
];
