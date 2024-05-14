import { jsonApiHttpClient } from "../client.js";

export class JsonApiUserRepository {
  async getById(id) {
    const response = await jsonApiHttpClient.get(`/users/${id}`)

    const user = await response.json()

    return user
  }
}
