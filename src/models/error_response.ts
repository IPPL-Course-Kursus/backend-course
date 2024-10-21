export class ErrorResponse extends Error {
  statusCode: number;
  tags: string[] | undefined;
  errorType?: string;

  constructor(
    message: string,
    statusCode: number,
    tags?: string[],
    errorType?: string
  ) {
    super(message);
    this.name = "ErrorResponse";
    this.statusCode = statusCode;
    this.tags = tags;
    this.errorType = errorType;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
