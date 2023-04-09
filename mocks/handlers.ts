import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("/login", (req, res, ctx) => {
    return res(ctx.json({ firstName: "John" }));
  }),
  // Handles a GET /user request
  rest.get("/user", null),
];
