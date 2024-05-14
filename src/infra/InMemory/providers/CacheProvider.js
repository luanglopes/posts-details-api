const cache = {}

export class InMemoryCacheProvider {
  get(key) {
    return cache[key]
  }

  set(key, value) {
    cache[key] = value
  }
}
