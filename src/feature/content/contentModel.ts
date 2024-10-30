export enum LanguageInterpreter {
  python = "python",
  java = "java",
  javaScript = "javaScript",
  php = "php",
}

export type ContentModel = {
  sort: number;
  contentTitle: string;
  contentUrl: string;
  duration: number;
  teks: string;
  sourceCode?: string;
  interpreterStatus?: boolean;
  languageInterpreter?: LanguageInterpreter;
};

export type updateContentModel = {
  sort: number;
  contentTitle: string;
  contentUrl: string;
  duration: number;
  teks: string;
  interpreterId?: number;
  interpreterStatus?: boolean;
};
