import getUser from '../index'

describe('mock function', () => {
  it('should return user info', async () => {
    expect(await getUser(1)).toEqual('mock king')
  })
})
