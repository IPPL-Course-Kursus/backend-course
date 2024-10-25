import axios from "axios";

const languageVersions: { [key: string]: string } = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "17.0.0",
  php: "8.1.0",
};

export const compileCode = async (language: string, sourceCode: string) => {
  const version = languageVersions[language.toLowerCase()];
  const response = await axios.post(process.env.BASE_URL_COMPILE || "", {
    language: language,
    version: version,
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
