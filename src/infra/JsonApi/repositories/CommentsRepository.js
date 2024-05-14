import { jsonApiHttpClient } from "../client.js";

export class JsonApiCommentsRepository {
  async listByPostId(postId) {
    const response = await jsonApiHttpClient.get(`/posts/${postId}/comments`)

    const comments = await response.json()

    return comments
  }
}
