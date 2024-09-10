import SectionInterface from '@/application/interfaces/section-interface';

const Section: React.FC<SectionInterface> = ({ children, className }) => {
  return (
    <section className={`m-5 md:m-0 md:p-4 ${className}`}>{children}</section>
  );
};

export default Section;
