export class ListPostsHandler {
  constructor(listPostsService) {
    this.listPostsService = listPostsService
  }

  async handle(req, res) {
    try {

      const { start, size } = req.query

      const posts = await this.listPostsService.execute({ start, size })

      if (posts.length === 0) {
        res.status(404).json({ message: "No posts found for provided pagination" })

        return
      }

      res.json({ posts })
    } catch (error) {
      console.error("ListPostsHandler error", error)

      res.status(500).json({ message: "Internal server error" })
    }
  }
}
