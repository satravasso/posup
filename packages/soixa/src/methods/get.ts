import fetch from "node-fetch";
import { queryString } from "../helpers/query-string";

/**
 * @param url endereço completo a ser chamado
 * @param params objeto de parâmetros que irão ser utilizados na URL
 * @returns resposta do endpoint chamado
 */
async function get(url: string, params?: Record<string, string>) {
  const urlParams = queryString(params);
  const urlToCall = `${url}${urlParams}`;

  return fetch(urlToCall).then((val) => val.json());
}

export { get };
