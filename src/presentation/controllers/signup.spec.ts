import { SignUpController } from "./signup";
import { MissingParamError } from "../errors/missing.param.error";

const makeSut = (): SignUpController => {
  return new SignUpController();
};

describe("SignUp Controller", () => {
  test("Should return 400 if no name is provided", () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        email: "matheus@teste.com",
        password: "teste",
        passwordConfirmation: "teste",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  });

  test("Should return 400 if no email is provided", () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: "Matheus",
        password: "teste",
        passwordConfirmation: "teste",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("email"));
  });

  test("Should return 400 if no password is provided", () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: "Matheus",
        email: "teste",
        passwordConfirmation: "any",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("password"));
  });

  test("Should return 400 if no passwordConfirmation is provided", () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: "Matheus",
        email: "teste",
        password: "any",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError("passwordConfirmation")
    );
  });
});
