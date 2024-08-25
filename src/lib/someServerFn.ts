import 'server-only'

export const someServerFn = async () => {
  return {
    user: {
      collection: 'users',
      id: '123',
      email: 'test@test.com',
    },
  }
}
