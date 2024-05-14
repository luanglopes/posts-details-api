export class ListPostsService {
  constructor(postsRepository, getUserService, listPostCommentsService) {
    this.postsRepository = postsRepository
    this.getUserService = getUserService
    this.listPostCommentsService = listPostCommentsService
  }

  async execute({ start, size }) {
    const posts = await this.postsRepository.list({ pagination: { offset: start, limit: size } })

    const detailedPosts = await Promise.all(posts.map(async post => {
      const [user, comments] = await Promise.all([
        this.getUserService.execute(post.userId),
        this.listPostCommentsService.execute(post.id)
      ])

      return {
        ...post,
        user,
        comments,
      }
    }))

    return detailedPosts
  }
}
