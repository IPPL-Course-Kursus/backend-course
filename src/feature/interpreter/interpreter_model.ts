// src/models/interpreterModel.ts

export enum languageInterpreter {
  PYTHON = 'python',
  JAVASCRIPT = 'javascript',
  JAVA = 'Java',
  KOTLIN = 'Kotlin',
  PHP = 'PHP',
  SWIFT = 'Swift',
  DART = 'Dart' // Add other languages as needed
}

export type CreateInterpreterRequest = {
  languageInterpreter: languageInterpreter; // Pastikan ini sesuai dengan enum yang kamu miliki
  sourceCode: string;
};

export type UpdateInterpreterRequest = {
  id: number;
  languageInterpreter: languageInterpreter;
  sourceCode: string;
};

export type DeleteInterpreterRequest = {
  id: number;
};

export type GetInterpreterByIdRequest = {
  id: number;
};
