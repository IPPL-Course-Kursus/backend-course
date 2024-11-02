export type ContentModel = {
  sort: number;
  contentTitle: string;
  contentUrl: string;
  duration: number;
  teks: string;
  sourceCode?: string;
  interpreterStatus?: boolean;
  languageInterpreterId?: number;
};

export type updateContentModel = {
  sort: number;
  contentTitle: string;
  contentUrl: string;
  duration: number;
  teks: string;
  sourceCode?: string;
  interpreterStatus?: boolean;
  languageInterpreterId?: number;
};
