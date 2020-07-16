import { forEach, calculate, userProfile } from '../index'
import { getUserEmail } from '../module'

jest.mock('../module')

describe('mock function', () => {
  it('should call mock function', () => {
    const mockCallback = jest.fn((x) => x * 2)
    forEach([0, 1], mockCallback)

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2)

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0)

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1)

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(0)
  })
  
  it('should use .mock property to assert', () => {
    const mockOperation = jest.fn((x, y) => x + y)
    calculate(1, 2, mockOperation)
    calculate(10, 20, mockOperation)
    
    // Times the function was called 
    expect(mockOperation.mock.calls.length).toBe(2)

    // The first arg of the first call to the function
    expect(mockOperation.mock.calls[0][0]).toBe(1);

    // The second arg of the first call to the function
    expect(mockOperation.mock.calls[0][1]).toBe(2);

    // The return value of the first call to the function
    expect(mockOperation.mock.results[1].value).toBe(30);

    // This function was instantiated exactly twice
    expect(mockOperation.mock.instances.length).toBe(2);
  })

  it('should mock return value', () => {
    const mockFilter = jest.fn()

    // add name here to replace 'jest.fn()'
    mockFilter.mockName('filter')
    mockFilter.mockReturnValueOnce(true).mockReturnValueOnce(false)

    const result = ['Keep value', 'Filter value'].filter(value => mockFilter(value))

    expect(mockFilter).toHaveBeenCalledTimes(2)
    expect(result).toEqual(['Keep value'])
  })

  it('should return user profile', () => {
    getUserEmail.mockReturnValue('mockUser@thoughtworks.com')
    const result = userProfile('Donald')

    expect(result).toEqual({name: 'Donald', email: 'mockUser@thoughtworks.com'})
  })
})
