import { jsonApiHttpClient } from "../client.js";

export class JsonApiPostsRepository {
  async list({ pagination: { offset = 0, limit } = {} } = {}) {
    const response = await jsonApiHttpClient.get('/posts')

    const posts = await response.json()

    const paginatedPosts = posts.slice(offset, offset + limit)

    return paginatedPosts
  }
}
