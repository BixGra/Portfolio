import Carousel from './Carousel.tsx';
import SectionTop from './SectionTop.tsx';
import type { TextsData } from '../interfaces/textsData.tsx';

interface ProjectsProps {
  texts: TextsData;
  language: 'fr' | 'en';
}

function Projects({ texts, language }: ProjectsProps) {
  return (
    <div id='projects' className='projects section'>
      <SectionTop
        title={texts.projects.title[language]}
        subtitle={texts.projects.subtitle[language]}
      />
      <Carousel language={language} />
    </div>
  );
}

export default Projects;
