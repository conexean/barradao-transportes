/**
 * Interface para os parâmetros da função CheckActiveRoute.
 */
interface ICheckActiveRoute {
  pathname: string;
  link: string;
}

/**
 * Verifica se uma rota está ativa com base no pathname atual e no link fornecido.
 * @param pathname Pathname atual
 * @param link Link a ser verificado
 * @returns Boolean indicando se a rota está ativa
 */

const CheckActiveRoute = ({ pathname, link }: ICheckActiveRoute): boolean => {
  if (link === '/') {
    return pathname === link;
  }
  return pathname.includes(link);
};

export default CheckActiveRoute;
