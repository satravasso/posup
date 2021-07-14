import { rest } from "msw";

export const handlers = [
  rest.get("http://local.mock/object/to/array", (req, res, ctx) => {
    const params = req.url.searchParams.get("vai");
    const response = [params];

    return res(ctx.status(200), ctx.json({ data: response }));
  }),
];
