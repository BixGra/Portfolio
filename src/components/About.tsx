import SectionTop from './SectionTop.tsx';

import type { TextsData } from '../interfaces/textsData.tsx';

interface AboutProps {
  texts: TextsData;
  language: 'fr' | 'en';
}

function About({ texts, language }: AboutProps) {
  return (
    <div id='about' className='about section'>
      <SectionTop
        title={texts.about.title[language]}
        subtitle={texts.about.subtitle[language]}
      />
      <div className='about-bottom responsive-column'>
        <div className='about-text'>
          {texts.about.text[language].map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
          ))}
        </div>
        <div className='about-links responsive-side'>
          <a
            className='about-link'
            href='https://github.com/BixGra'
            target='_blank'
          >
            <img
              className='about-link-image'
              src='/images/github.png'
              alt='GitHub'
            />
            <div className='about-link-title'>Github</div>
          </a>
          <a
            className='about-link'
            href='https://www.linkedin.com/in/bixente-grandjean/'
            target='_blank'
          >
            <img
              className='about-link-image'
              src='/images/linkedin.png'
              alt='Linkedin'
            />
            <div className='about-link-title'>Linkedin</div>
          </a>
          <a
            className='about-link'
            href='mailto:bixente.grandjean@gmail.com'
            target='_blank'
          >
            <img
              className='about-link-image'
              src='/images/mail.png'
              alt='Mail'
            />
            <div className='about-link-title'>Mail</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
