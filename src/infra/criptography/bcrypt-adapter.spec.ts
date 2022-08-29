import bcrypt from "bcrypt";
import { BcryptAdapter } from "./bcrypt-adapter";

describe("BcryptAdapter", () => {
  test("should call bcrypt with correct value", async () => {
    const salt = 12;
    const sut = new BcryptAdapter(salt);
    const hashSpy = jest.spyOn(bcrypt, "hash");
    await sut.encrypt("any_value");
    expect(hashSpy).toHaveBeenLastCalledWith("any_value", salt);
  });
});
