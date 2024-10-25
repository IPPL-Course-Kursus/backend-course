import { compileCode } from "../../utils/compileCode";

export class CompilerService {
  public static async compile(language: string, sourceCode: string) {
    const response = await compileCode(language, sourceCode);
    return response;
  }
  //   public static async compile() {
  //     const child = pty.spawn("python", ["-c", "print('Hello, world!')"], {
  //       name: "bash",
  //       cols: 80,
  //       rows: 30,
  //       handleFlowControl: true,
  //     });
  //     const timeout = setTimeout(() => {
  //       child.kill();
  //       console.error("Compilation terminated: Time limit exceeded (2 minutes).");
  //       clearTimeout(timeout);
  //     }, 1000);
  //     return child;
  //   }
  //   public static async compileWithInterpreter(
  //     language: string,
  //     sourceCode: string
  //   ): Promise<pty.IPty | null> {
  //     try {
  //       if (!language) {
  //         throw new Error("Language not specified.");
  //       }
  //       let command: string;
  //       let args: string[] = [];
  //       switch (language) {
  //         case (language = "Python"):
  //           command = "python3";
  //           args = ["-c", sourceCode];
  //           break;
  //         case (language = "JavaScript"):
  //           command = "node";
  //           args = ["-e", sourceCode];
  //           break;
  //         // case (language = "Java"):
  //         //   await this.saveCodeToFile("Main.java", sourceCode);
  //         //   command = "java";
  //         //   args = [path.join(__dirname, "Main.java")];
  //         //   break;
  //         case (language = "PHP"):
  //           command = "php";
  //           args = ["-r", sourceCode];
  //           break;
  //         default:
  //           throw new Error(`Unsupported language: ${language}`);
  //       }
  //       const child = pty.spawn(command, args, {
  //         name: "xterm-color",
  //         cwd: path.join(__dirname, "../../../dump"),
  //         cols: 80,
  //         rows: 30,
  //         handleFlowControl: true,
  //       });
  //       setTimeout(() => {
  //         child.kill();
  //         console.error(`Compilation terminated: Time limit exceeded.`);
  //       }, 2 * 60 * 1000);
  //       return child;
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         console.log(`Error: ${error.message}`);
  //       } else {
  //         console.log("Error: An unknown error occurred.");
  //       }
  //       return null;
  //     }
  //   }
  //   private static async saveCodeToFile(
  //     fileName: string,
  //     sourceCode: string
  //   ): Promise<void> {
  //     const filePath = path.join(__dirname, "../../dump", fileName);
  //     try {
  //       await fs.writeFile(filePath, sourceCode);
  //       console.log(`File saved successfully at: ${filePath}`);
  //     } catch (error) {
  //       console.error(
  //         `Failed to save code to file: ${filePath}. Error: ${error}`
  //       );
  //       throw new ErrorResponse(`Failed to save code: ${error}`, 500);
  //     }
  //   }
}
