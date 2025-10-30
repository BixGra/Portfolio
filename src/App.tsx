import { useEffect, useState } from 'react';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import Main from './components/Main.tsx';
import type { TextsData } from './interfaces/textsData.tsx';

function App() {
  function getLanguage() {
    if (localStorage.getItem('language') === 'en') return 'en';
    return 'fr';
  }
  const [language, setLanguage] = useState<'fr' | 'en'>(getLanguage());

  function getTheme() {
    if (localStorage.getItem('theme') === 'dark') return 'dark';
    document.body.classList.add('light');
    return 'light';
  }
  const [theme, setTheme] = useState<'dark' | 'light'>(getTheme());

  const [texts, setTexts] = useState<TextsData>();
  useEffect(() => {
    async function getTexts() {
      const res = await fetch('/data/texts.json');
      const data: TextsData = await res.json();
      setTexts(data);
    }
    getTexts();
  }, []);

  return (
    <>
      {texts !== undefined && (
        <>
          <Header
            texts={texts}
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            setTheme={setTheme}
          />
          <Main texts={texts} language={language} />
          <Footer texts={texts} language={language} />
        </>
      )}
      {texts === undefined && (
        <div>Oops an error occured, we're working on it.</div>
      )}
    </>
  );
}

export default App;
