import { compileCode } from "../../utils/compileCode";
import { ErrorResponse } from "../../models/error_response";

export class CompilerService {
  public static async compile(
    language: string,
    version: string,
    sourceCode: string
  ) {
    if (!language || !sourceCode) {
      throw new ErrorResponse("Language or source code not specified.", 400, [
        "language",
        "sourceCode",
      ]);
    }

    const response = await compileCode(language, version, sourceCode);
    return response;
  }
}
