import { register } from "../user";

jest.mock("../verify");

describe("register", () => {
  test("should post user when validated", async () => {
    await expect(register("user", "password100000")).resolves.toBe("CREATED");
  });

  test("should reject with Error when username is invalid", async () => {
    await expect(register("user", "123abcd")).rejects.toEqual(
      Error("Invalid username or password")
    );
  });
});
