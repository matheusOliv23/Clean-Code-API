import { SignUpController } from "./signup";
import { MissingParamError } from "../errors/missing.param.error";

describe("SignUp Controller", () => {
  test("Should return 400 if no name is provided", () => {
    // sut = system under test
    const sut = new SignUpController();
    // requisição post que ele vai receber
    const httpRequest = {
      body: {
        email: "matheus@teste.com",
        password: "teste",
        passwordConfirmation: "teste",
      },
    };
    //espera que esse valor seja 400 pois não foi passado o 'name'
    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  });

  test("Should return 400 if no email is provided", () => {
    const sut = new SignUpController();
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
});
