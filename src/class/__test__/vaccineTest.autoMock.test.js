import VaccineTest from "../vaccineTest";
import Recipient from '../recipient'

jest.mock("../recipient")

beforeEach(() => {
  jest.clearAllMocks();
});

describe("inject", () => {
  test("should init recipient", () => {
    expect.assertions(1);

    const vaccineTest = new VaccineTest();

    expect(Recipient).toHaveBeenCalledTimes(1)
  });
});
