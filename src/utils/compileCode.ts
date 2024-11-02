import axios from "axios";

export const compileCode = async (
  language: string,
  version: string,
  sourceCode: string
) => {
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
