export type CreateInterpreterRequest = {
  languageInterpreterId: number;
  sourceCode: string;
};

export type UpdateInterpreterRequest = {
  id: number;
  languageInterpreterId: number;
  sourceCode: string;
};

export type DeleteInterpreterRequest = {
  id: number;
};

export type GetInterpreterByIdRequest = {
  id: number;
};
