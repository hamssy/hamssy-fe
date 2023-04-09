import { rest } from "msw";
import { products } from "@/mocks/dummy_products";

export const handlers = [
  // Handles a POST /login request
  rest.get("*/categories/:categoryId", (req, res, ctx) => {
    return res(ctx.json(products));
  }),
  // Handles a GET /user request
  rest.get("/user", null),
];
