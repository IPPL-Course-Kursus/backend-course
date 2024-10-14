// src/models/certificateModel.ts

export type CreateCertificateRequest = {
    courseUserId: number;
    certificateNumber: string;
    issueDate: Date;
  };
  
  export type UpdateCertificateRequest = {
    id: number;
    certificateNumber: string;
    issueDate: Date;
  };
  
  export type DeleteCertificateRequest = {
    id: number;
  };
  
  export type GetCertificateByIdRequest = {
    id: number;
  };
  