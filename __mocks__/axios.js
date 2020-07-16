// use jest.genMockFromModule to generate an automatic mock, 
// and overrides its default behavior.
const axios = jest.genMockFromModule("axios");

function get() {
  return Promise.resolve({ data: "Alex" });
}

function post() {
  return Promise.resolve({ data: "CREATED" });
}

axios.get = get;
axios.post = post;

export default axios;
