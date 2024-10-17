export type CreateInterpreterRequest = {
  languageInterpreter: string; // Atau gunakan tipe enum jika ada
  sourceCode: string;
};

export type UpdateInterpreterRequest = {
  id: number;
  languageInterpreter: string; // Atau gunakan tipe enum jika ada
  sourceCode: string;
};

export type DeleteInterpreterRequest = {
  id: number;
};

export type GetInterpreterByIdRequest = {
  id: number;
};
