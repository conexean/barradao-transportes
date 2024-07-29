import IconsTypes from '@/constants/icons-constants';

interface IconInterface {
  name: keyof typeof IconsTypes;
  className?: string;
  width?: number;
  height?: number;
}

export default IconInterface;
