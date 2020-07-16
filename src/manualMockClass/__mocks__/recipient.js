export const mockAcceptInjection = jest.fn()
export const mockGetHasAntibodies = jest.fn()
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)

const mock = jest.fn().mockImplementation(() => {
  return {
    getHasAntibodies: mockGetHasAntibodies,
    acceptInjection: mockAcceptInjection,
  }
})

export default mock