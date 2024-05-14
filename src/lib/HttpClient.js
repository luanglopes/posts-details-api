export class HttpClient {
  #baseUrl = ""
  #defaultHeaders = {}

  constructor(baseUrl = "", defaultHeaders = {}) {
    this.#baseUrl = baseUrl
    this.#defaultHeaders = defaultHeaders
  }

  async #makeRequest(url, { method, body, headers }) {
    let options = {
      method,
      body,
      headers: {
        ...headers,
        ...this.#defaultHeaders,
      },
    }

    const fullUrl = `${this.#baseUrl}${url}`

    const response = await fetch(fullUrl, {
      ...options
    });

    if (!response.ok) {
      throw new Error("Request error", { cause: response });
    }

    return response;
  }

  async get(url, headers = {}) {
    return this.#makeRequest(url, { method: "GET", headers })
  }

  async put(url, body, headers = {}) {
    return this.#makeRequest(url, { method: "PUT", body, headers})
  }

  async post(url, body, headers = {}) {
    return this.#makeRequest(url, { method: "POST", body, headers})
  }

  async delete(url, headers = {}) {
    return this.#makeRequest(url, { method: "DELETE", headers})
  }
}
