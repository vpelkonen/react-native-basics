export default (url, customHeaders = {}) => {
  const defaultHeaders = {
    Method: 'GET',
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
  // const headers = Object.assign({}, defaultHeaders, customHeaders)
  const headers = {
    ...defaultHeaders,
    ...customHeaders
  }
  return fetch(url, headers)
    .then((response) => {
      if (response.status >= 400) {
        // throw new Error(response.status)
        Promise.reject(null, response.status)
      }
      return response.json()
    })
    .catch((error, statusCode) => {
      // Do stuff with statusCode.
    })
}

// fetchGetJSON(url)
//  .then(() => {})
//  .catch(() => {})
