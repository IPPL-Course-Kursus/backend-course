// src/models/contentModel.ts

export type CreateContentRequest = {
    chapterId: number;
    interpreterId: number;
    contentTitle: string;
    contentUrl: string;
    duration: string;
    teks: string;
    interpreterStatus: boolean;
    contentStatus: boolean;
  };
  
  export type UpdateContentRequest = {
    id: number;
    chapterId?: number;
    interpreterId?: number;
    contentTitle?: string;
    contentUrl?: string;
    duration?: string;
    teks?: string;
    interpreterStatus?: boolean;
    contentStatus?: boolean;
  };
  
  export type DeleteContentRequest = {
    id: number;
  };
  
  export type GetContentByIdRequest = {
    id: number;
  };
  