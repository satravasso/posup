import { rest } from "msw";

import mockResponse from "./riotApiResponse";

export const handlers = [
  rest.get(
    "https://br1.api.riotgames.com/lol/status/v4/platform-data",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockResponse));
    }
  ),
];
