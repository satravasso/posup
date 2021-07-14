import { server } from "../../__mocks__/server";
import { get } from "../get";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("get", () => {
  it("faz requisição get passando parâmetros", async () => {
    const paramValue = await get("http://local.mock/object/to/array", {
      vai: "corinthians",
    });

    expect(paramValue).toStrictEqual({ data: ["corinthians"] });
  });
});
