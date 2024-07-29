'use client';

import { useState, useEffect, useContext } from 'react';
import Button from './button';
import Icon from './icon';
import ModalInterface from '@/interfaces/modal-interface';
import { ModalContext } from '@/context/modal-context';

const Modal: React.FC<ModalInterface> = ({ children, className }) => {
  const { active, toggle } = useContext(ModalContext);

  const [isVisible, setIsVisible] = useState(active);
  const [hidden, setHidden] = useState(active);

  useEffect(() => {
    const handleHidden = () => {
      setTimeout(() => {
        setHidden(active);
      }, 200);
    };

    setIsVisible(active);
    !active ? handleHidden() : setHidden(active);
  }, [active]);

  return (
    <div
      className={`fixed inset-0 z-[2000] items-center justify-center ${className} ${isVisible ? 'flex animate-fadeIn' : 'flex animate-fadeOut'} ${!hidden ? 'hidden' : ''}`}
    >
      <Button
        className='fixed right-4 top-4'
        type='button'
        color='transparent'
        onClick={toggle}
      >
        <Icon
          name='close'
          width={35}
          height={35}
          className='rounded bg-[#00000052] p-[8px] text-white hover:bg-[#1e2228b3]'
        />
      </Button>
      {children}
    </div>
  );
};

export default Modal;
