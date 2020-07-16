import VaccineTest from "../vaccineTest";
import Recipient from '../recipient'

jest.mock('../recipient')

beforeEach(() => {
  jest.clearAllMocks();
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    expect.assertions(1);

    Recipient.mockImplementation(() => {
      return {
        getHasAntibodies: () => true
      }
    })
    const vaccineTest = new VaccineTest();

    expect(vaccineTest.test()).toEqual("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    expect.assertions(1);

    Recipient.mockImplementation(() => {
      return {
        getHasAntibodies: () => false
      }
    })
    const vaccineTest = new VaccineTest();

    expect(vaccineTest.test()).toEqual("Vaccine Test Failed");
  });
});
