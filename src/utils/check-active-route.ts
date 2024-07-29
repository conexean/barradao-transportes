import CheckActiveRouteInterface from '@/interfaces/check-route-interface';

const CheckActiveRoute = ({
  pathname,
  link,
}: CheckActiveRouteInterface): boolean => {
  if (link === '/') {
    return pathname === link;
  }
  return pathname === link;
};

export default CheckActiveRoute;
