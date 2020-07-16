import VaccineTest from "../vaccineTest";
import Recipient, { mockAcceptInjection, mockGetHasAntibodies } from '../recipient'

jest.mock('../recipient')

const vaccineTest = new VaccineTest();

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    expect.assertions(1);

    vaccineTest.inject();

    expect(mockAcceptInjection).toHaveBeenCalled();
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    expect.assertions(2);

    expect(vaccineTest.test()).toEqual("Vaccine Test Success");
    expect(mockGetHasAntibodies).toHaveBeenCalled();
  });

  test("should get Failed if recipient has no antibodies", () => {
    expect.assertions(2);

    expect(vaccineTest.test()).toEqual("Vaccine Test Failed");
    expect(mockGetHasAntibodies).toHaveBeenCalled();
  });
});
