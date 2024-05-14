const container = {}

export class Container {
  static resolve(providerName) {
    return container[providerName]
  }

  static provide(providerName, provider) {
    container[providerName] = provider
  }
}
