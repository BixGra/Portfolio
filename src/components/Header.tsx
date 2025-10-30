import type { TextsData } from '../interfaces/textsData.tsx';

interface HeaderProps {
  texts: TextsData;
  language: 'fr' | 'en';
  setLanguage: (newLanguage: 'fr' | 'en') => void;
  theme: 'dark' | 'light';
  setTheme: (newTheme: 'dark' | 'light') => void;
}

function Header({
  texts,
  language,
  setLanguage,
  theme,
  setTheme,
}: HeaderProps) {
  return (
    <div className='header'>
      <a className='header-left' href='#hello'>
        Bixente
      </a>
      <div className='header-right'>
        <a href='#about'>{texts.header.about[language]}</a>
        <a href='#projects'>{texts.header.projects[language]}</a>
        <img
          className='theme'
          src={`/images/${theme === 'dark' ? 'light' : 'dark'}.png`}
          alt='Dark theme icon'
          onClick={() => {
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            document.body.classList.remove(theme);
            document.body.classList.add(newTheme);
            setTheme(newTheme);
          }}
        />
        <img
          className='language'
          src={`/images/${texts.header.language[language]}`}
          alt={`/images/${texts.header.languagealt[language]}`}
          onClick={() => {
            const newLanguage = language === 'fr' ? 'en' : 'fr';
            localStorage.setItem('language', newLanguage);
            setLanguage(newLanguage);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
