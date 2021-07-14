/**
 * Função que transforma um objeto em parâmetros de url
 *
 * @param params Objeto chave-valor com os parâmetro de busca na URL
 * @returns string com encode da URL para a requisição
 */
function queryString(params?: Record<string, string>) {
  if (!params) return "";

  const paramsArr = Object.entries(params);
  const url = paramsArr
    .map((param: string[], i) => {
      if (i === 0) return `?${param[0]}=${param[1]}`;

      return `&${param[0]}=${param[1]}`;
    })
    .join("");

  return encodeURI(url);
}

export { queryString };
