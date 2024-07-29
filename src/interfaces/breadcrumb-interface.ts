interface BreadcrumbInterface {
  title: string;
  links: {
    label: string;
    href: string;
    active: boolean;
  }[];
}

export default BreadcrumbInterface;
