import { getUserEmail } from './module'

export function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

export function calculate(x, y, operation) {
  return operation(x, y)
}

export const userProfile = (user) => ({
  name: user,
  email: getUserEmail(user)
})
