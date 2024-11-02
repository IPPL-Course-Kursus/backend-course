import { compileCode } from "../../utils/compileCode";
import { ErrorResponse } from "../../models/error_response";
import { prisma } from "../../application/database";

export class CompilerService {
  public static async compile(
    languageInterpreterId: number,
    sourceCode: string
  ) {
    if (!languageInterpreterId || !sourceCode) {
      throw new ErrorResponse("Language or source code not specified.", 400, [
        "language",
        "sourceCode",
      ]);
    }

    const language = await prisma.interpreterLanguage.findUnique({
      where: { id: languageInterpreterId },
    });

    if (!language) {
      throw new ErrorResponse("Language not found", 404, ["language"]);
    }

    const response = await compileCode(
      language?.languageInterpreter,
      language?.version,
      sourceCode
    );
    return response;
  }
}
