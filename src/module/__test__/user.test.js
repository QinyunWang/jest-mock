import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("../verify");

describe("register", () => {
  test("should post user when validated", async () => {
    verifyUsername.mockReturnValue("admin");
    verifyPassword.mockReturnValue(true);
    await expect(register()).resolves.toBe("CREATED");
  });

  test("should reject with Error when username is invalid", async () => {
    verifyUsername.mockReturnValue("admin");
    verifyPassword.mockReturnValue(false);
    await expect(register()).rejects.toEqual(
      Error("wrong username or password")
    );
  });
});
