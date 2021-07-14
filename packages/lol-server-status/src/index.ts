import soxia from "@posup/soixa";
import { Regions, APIServerStatus, ServerStatus } from "./interfaces";

/**
 * Componente com métodos que auxiliam a verificar saúde dos servidores
 * de League of Legends
 */
class LOLServerStatus {
  apiKey: string;
  region: Regions;

  /**
   *
   * @param apiKey sua chave de desenvolvimento da Riot Games
   * @param region região do servidor que deseja verificar incidentes
   */
  constructor(apiKey: string, region: Regions) {
    this.apiKey = apiKey;
    this.region = region;
  }

  /**
   * Recupera incidentes ativos na região
   *
   * @returns Incidentes ativos no servidor
   */
  async getServerStatus(): Promise<ServerStatus[]> {
    if (!this.apiKey || !this.region) {
      throw new Error("É necessário enviar uma chave de API e uma região");
    }

    return soxia
      .get(
        `https://${this.region}.api.riotgames.com/lol/status/v4/platform-data`,
        {
          api_key: this.apiKey,
        }
      )
      .then((res: APIServerStatus) => {
        const locale = res.locales[0];
        const { incidents, name } = res;

        return incidents.map((incident) => {
          const {
            platforms,
            updates,
            titles,
            created_at,
            incident_severity,
          } = incident;

          const messages = updates.map(
            (upt) =>
              upt.translations.find((msg) => msg.locale === locale)?.content ||
              ""
          );
          const title =
            titles.find((ttl) => ttl.locale === locale)?.content || "";

          return { title, messages, platforms, created_at, incident_severity };
        });
      });
  }
}

export default LOLServerStatus;
