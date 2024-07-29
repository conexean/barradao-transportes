export class ValidationError extends Error {
  public field: string;

  constructor(message: string, field: string) {
    super(message);
    this.field = field;
    this.name = 'ValidationError';
  }
}
