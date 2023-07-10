export interface IUseTranslate {
  lang: string;
  translate: (key: string) => string;
  changeLanguage: (lang: string | unknown) => void;
}
