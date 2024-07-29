'use client';

import IconsTypes from '@/constants/icons-constants';
import IconInterface from '@/interfaces/icon-interface';

const Icon: React.FC<IconInterface> = ({ name, className, width, height }) => {
  const SvgIcon = IconsTypes[name];

  if (!SvgIcon) {
    return null;
  }

  return <SvgIcon className={className} width={width} height={height} />;
};

export default Icon;
