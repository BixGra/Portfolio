interface SectionTopProps {
  title: string;
  subtitle: string;
}

function SectionTop({ title, subtitle }: SectionTopProps) {
  return (
    <div className='section-top'>
      <h3>{title}</h3>
      <h2 className='accent'>{subtitle}</h2>
    </div>
  );
}

export default SectionTop;
