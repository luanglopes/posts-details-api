import { Router } from 'express'

import { ListPostsHandler } from './handlers/ListPosts.js'
import { Container } from '../lib/container.js'

export function getRouter() {
  const appRouter = Router()

  const listPostsHandler = new ListPostsHandler(Container.resolve('listPostsService'))

  appRouter.get('/posts', listPostsHandler.handle.bind(listPostsHandler))

  return appRouter
}
