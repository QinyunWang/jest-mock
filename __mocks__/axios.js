// use jest.genMockFromModule to generate an automatic mock, 
// and overrides its default behavior.
const axios = jest.genMockFromModule('axios');

function get() {
  // Implementation
}

function post() {
  // Implementation
}

axios.get = get;
axios.post = post;

export default axios;
