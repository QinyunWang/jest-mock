import { forEach, calculate, userProfile } from '../index'

describe('mock function', () => {
  it('should call mock function', () => {
    const mockCallback = jest.fn((x) => x + 42)
    forEach([0, 1], mockCallback)

    // The mock function is called twice

    // The first argument of the first call to the function was 0

    // The first argument of the second call to the function was 1

    // The return value of the first call to the function was 42
  })
  
  it('should use .mock property to assert', () => {
    const mockOperation = jest.fn((x, y) => x + y)
    calculate(1, 2, mockOperation)
    calculate(10, 20, mockOperation)
    
    // Times the function was called 

    // The first arg of the first call to the function

    // The second arg of the first call to the function

    // The return value of the first call to the function

    // This function was instantiated exactly twice
  })

  it('should mock return value', () => {
    const mockFilter = jest.fn()

    // add name here to replace 'jest.fn()'
    mockFilter.mockName('filter')
    mockFilter.mockReturnValueOnce(true).mockReturnValueOnce(false)

    const result = ['Keep value', 'Filter value'].filter(value => mockFilter(value))

    // The function was called two times

    // The result is ['Keep value']
  })
})
