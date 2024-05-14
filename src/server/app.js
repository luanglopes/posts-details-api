import express from 'express'
import { getRouter } from './routes.js'

export function getApp() {
  const app = express()

  const router = getRouter()

  app.use(router)

  return app
}
