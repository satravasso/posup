import LOLServerStatus from "..";
import { server } from "../__mocks__/server";

const mockAPIKey = "RIOT_MOCK_KEY";
const mockResponse = [
  {
    created_at: "2021-05-12T22:03:57.523453+00:00",
    incident_severity: "info",
    messages: [
      "Presentes de conteúdo (campeões, skins, etc) estão temporariamente indisponíveis enquanto trabalhamos na solução de um problema. Presentes de RP podem ser enviados normalmente.",
    ],
    platforms: ["windows", "macos"],
    title: "Presentes",
  },
  {
    created_at: "2021-06-30T22:55:27.267641+00:00",
    incident_severity: "info",
    messages: [
      "As transferências de conta estão indisponíveis enquanto trabalhamos na solução de um problema.",
    ],
    platforms: ["windows", "macos", "android", "ios"],
    title: "Transferências de conta indisponíveis",
  },
];

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("LOLServerStatus", () => {
  it("chama a api da riot e faz o parse dos dados", async () => {
    const lol = new LOLServerStatus(mockAPIKey, "br1");
    const response = await lol.getServerStatus();
    expect(response).toStrictEqual(mockResponse);
  });

  it("estoura um erro quando a classe é iniciada sem chave de API", async () => {
    const lol = new LOLServerStatus("", "br1");

    await expect(lol.getServerStatus()).rejects.toThrow(
      "É necessário enviar uma chave de API e uma região"
    );
  });

  it("estoura um erro quando a classe é iniciada sem região", async () => {
    // @ts-ignore
    const lol = new LOLServerStatus(mockAPIKey, "");

    await expect(lol.getServerStatus()).rejects.toThrow(
      "É necessário enviar uma chave de API e uma região"
    );
  });
});
