import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import { DotButton, useDotButton } from './CarouselDotButton.tsx';
import { useEffect, useState } from 'react';

interface CarouselProps {
  language: 'fr' | 'en';
}

interface ProjectData {
  video: string;
  type: string;
  name: string;
  text: {
    en: string;
    fr: string;
  };
}

function Carousel({ language }: CarouselProps) {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    async function getProjects() {
      const res = await fetch('/data/projects.json');
      const data: ProjectData[] = await res.json();
      setProjects(data);
    }
    getProjects();
  }, []);

  const [carouselRef, carouselApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
    ClassNames(),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(carouselApi);
  return (
    <div className='carousel' ref={carouselRef}>
      <div className='carousel-container'>
        {projects.map((project) => (
          <div key={project.name} className='carousel-slide'>
            <video className='carousel-content' autoPlay muted loop>
              <source src={`/videos/${project.video}`} type='video/mp4' />
            </video>
            <p
              className='carousel-text'
              dangerouslySetInnerHTML={{ __html: project.text[language] }}
            ></p>
          </div>
        ))}
      </div>
      <div className='carousel-dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'carousel-dot'.concat(
              index === selectedIndex ? ' is-selected' : ''
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
