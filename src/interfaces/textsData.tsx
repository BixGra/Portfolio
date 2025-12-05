interface TextData {
  en: string;
  fr: string;
}

interface TextArrayData {
  en: string[];
  fr: string[];
}

interface TextsData {
  header: {
    about: TextData;
    projects: TextData;
    language: TextData;
    languagealt: TextData;
  };
  hello: {
    title: TextData;
    subtitle: TextData;
    cv: TextData;
    cvurl: TextData;
    about: TextData;
  };
  about: {
    title: TextData;
    subtitle: TextData;
    text: TextArrayData;
  };
  projects: {
    title: TextData;
    subtitle: TextData;
  };
  footer: {
    site: TextData;
    thanks: TextData;
  };
}

export type { TextsData };
