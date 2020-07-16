function verifyUsername(username) {
  return 'mockedUserName'
}

function verifyPassword(password) {
  return password.length > 10
}

export { verifyUsername, verifyPassword }