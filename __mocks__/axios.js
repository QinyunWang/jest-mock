// use jest.genMockFromModule to generate an automatic mock, 
// and overrides its default behavior.
const axios = jest.genMockFromModule('axios');

function get() {
  return Promise.resolve({ data: "mock king" });
}

axios.get = get

export default axios;
