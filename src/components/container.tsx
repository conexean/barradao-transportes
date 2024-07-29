import ContainerInterface from '@/interfaces/container-interface';

const Container: React.FC<ContainerInterface> = ({ children, className }) => {
  let containerClass: string;

  containerClass = `container max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-4 ${className}`;

  return <div className={containerClass}>{children}</div>;
};

export default Container;
