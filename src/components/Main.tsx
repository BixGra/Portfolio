import About from './About.tsx';
import Projects from './Projects.tsx';
import Hello from './Hello.tsx';
import type { TextsData } from '../interfaces/textsData.tsx';

interface MainProps {
  texts: TextsData;
  language: 'fr' | 'en';
}

function Main({ texts, language }: MainProps) {
  return (
    <main>
      <Hello texts={texts} language={language} />
      <About texts={texts} language={language} />
      <Projects texts={texts} language={language} />
    </main>
  );
}

export default Main;
