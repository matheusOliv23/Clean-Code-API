export class ServerError extends Error {
  constructor() {
    super("Aconteceu um erro inesperado. Tente novamente em alguns instantes.");
    this.name = "ServerError";
  }
}
