import { queryString } from "../query-string";

describe("queryString", () => {
  it("retorna uma string vazia se não for enviado parâmetros", () => {
    const query = queryString();
    expect(query).toMatch("");
  });

  it("retorna apenas um parâmetro", () => {
    const query = queryString({ first: "test" });
    expect(query).toMatch("?first=test");
  });

  it("retorna múltiplos parâmetros", () => {
    const query = queryString({
      first: "test",
      second: "another",
      third: "and-another",
    });
    expect(query).toMatch("?first=test&second=another&third=and-another");
  });

  it("faz o encode corretamente da string", () => {
    const query = queryString({
      param: "vai curintchá!",
    });
    expect(query).toMatch("?param=vai%20curintch%C3%A1!");
  });
});
