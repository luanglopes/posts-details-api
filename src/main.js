import { createServer } from 'node:http'

import { getApp } from "./server/app.js";
import { setupContainer } from "./setupContainer.js";

setupContainer()

const app = getApp()

const server = createServer(app)

server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000')
})
