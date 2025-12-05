import type { TextsData } from '../interfaces/textsData.tsx';

interface HelloProps {
  texts: TextsData;
  language: 'fr' | 'en';
}

function Hello({ texts, language }: HelloProps) {
  return (
    <div id='hello' className='hello section'>
      <div className='hello-top'>
        <h3>{texts.hello.title[language]}</h3>
        <h1 className='accent'>Bixente</h1>
        <h2>{texts.hello.subtitle[language]}</h2>
      </div>
      <div className='hello-bottom responsive-column'>
        <div className='hello-image-background'>
          <img className='hello-image' src='/images/bixente.png' />
        </div>
        <div className='hello-buttons responsive-side'>
          <a
            className='hello-button-border'
            href={`${texts.hello.cvurl[language]}`}
            target='_blank'
          >
            <div className='hello-button'>{texts.hello.cv[language]}</div>
          </a>
          <a className='hello-button-border' href='#about'>
            <div className='hello-button'>{texts.hello.about[language]}</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hello;
