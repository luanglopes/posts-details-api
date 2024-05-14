export class GetUserService {
  constructor(cacheProvider, usersRepository) {
    this.cacheProvider = cacheProvider
    this.usersRepository = usersRepository
  }

  async execute(userId) {
    const userCacheKey = `user:${userId}`

    let user = await this.cacheProvider.get(userCacheKey)

    if (user) {
      return user
    }

    user = await this.usersRepository.getById(userId)

    if (user) {
      await this.cacheProvider.set(userCacheKey, user)
    }

    return user
  }
}
