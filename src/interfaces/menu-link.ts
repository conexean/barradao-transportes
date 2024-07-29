import IconsTypes from '@/constants/icons-constants';

interface MenuLinkInterface {
  menu?: string;
  links: {
    href: string;
    label: string;
    icon: keyof typeof IconsTypes;
  }[];
}

export default MenuLinkInterface;
