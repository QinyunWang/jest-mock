import VaccineTest from "../vaccineTest";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();
jest.mock("../recipient", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getHasAntibodies: mockGetHasAntibodies,
      acceptInjection: mockAcceptInjection,
    };
  });
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    expect.assertions(1);

    const vaccineTest = new VaccineTest();
    vaccineTest.inject();

    expect(mockAcceptInjection).toHaveBeenCalled();
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    expect.assertions(2);

    const vaccineTest = new VaccineTest();
    mockGetHasAntibodies.mockReturnValue(true);

    expect(vaccineTest.test()).toEqual("Vaccine Test Success");
    expect(mockGetHasAntibodies).toHaveBeenCalled();
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    expect.assertions(2);

    const vaccineTest = new VaccineTest();
    mockGetHasAntibodies.mockReturnValue(false);

    expect(vaccineTest.test()).toEqual("Vaccine Test Failed");
    expect(mockGetHasAntibodies).toHaveBeenCalled();
  });
});
