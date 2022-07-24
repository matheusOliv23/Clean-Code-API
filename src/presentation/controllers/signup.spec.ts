import { SignUpController } from "./signup";

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
    expect(httpResponse.body).toEqual(new Error("Missing param: name"));
  });
});
