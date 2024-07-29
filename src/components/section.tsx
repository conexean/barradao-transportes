import SectionInterface from '@/interfaces/section-interface';

const Section: React.FC<SectionInterface> = ({ children, className }) => {
  return (
    <section className={`container mx-auto mb-8 mt-5 px-4 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
