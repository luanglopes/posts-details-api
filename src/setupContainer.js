import { InMemoryCacheProvider } from "./infra/InMemory/providers/CacheProvider.js";
import { JsonApiCommentsRepository } from "./infra/JsonApi/repositories/CommentsRepository.js";
import { JsonApiPostsRepository } from "./infra/JsonApi/repositories/PostsRepository.js";
import { JsonApiUserRepository } from "./infra/JsonApi/repositories/UserRepository.js";
import { Container } from "./lib/container.js";
import { GetUserService } from "./services/GetUser.js";
import { ListPostCommentsService } from "./services/ListPostComments.js";
import { ListPostsService } from "./services/ListPosts.js";

export function setupContainer() {
  Container.provide('userRepository', new JsonApiUserRepository())
  Container.provide('commentsRepository', new JsonApiCommentsRepository())
  Container.provide('postsRepository', new JsonApiPostsRepository())

  Container.provide('cacheProvider', new InMemoryCacheProvider())

  Container.provide('getUserService', new GetUserService(Container.resolve('cacheProvider'), Container.resolve('userRepository')))
  Container.provide('listPostCommentsService', new ListPostCommentsService(Container.resolve('commentsRepository')))
  Container.provide('listPostsService', new ListPostsService(
    Container.resolve('postsRepository'),
    Container.resolve('getUserService'),
    Container.resolve('listPostCommentsService')
  ))
}
