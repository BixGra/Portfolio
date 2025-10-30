import type { TextsData } from '../interfaces/textsData.tsx';

interface FooterProps {
  texts: TextsData;
  language: 'fr' | 'en';
}

function Footer({ texts, language }: FooterProps) {
  return (
    <div className='footer'>
      <div>Bixente Grandjean - 2025</div>
      <div className='footer-center'>
        <a href='https://github.com/BixGra/Portfolio' target='_blank'>
          {texts.footer.site[language]}
        </a>
        <a href='https://github.com/BixGra' target='_blank'>
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/bixente-grandjean/'
          target='_blank'
        >
          Linkedin
        </a>
        <a href='mailto:bixente.grandjean@gmail.com' target='_blank'>
          Mail
        </a>
      </div>
      <div>{texts.footer.thanks[language]}</div>
    </div>
  );
}

export default Footer;
