export class ListPostCommentsService {
  constructor(commentsRepository) {
    this.commentsRepository = commentsRepository
  }

  async execute(postId) {
    const comments = await this.commentsRepository.listByPostId(postId)

    return comments
  }
}
