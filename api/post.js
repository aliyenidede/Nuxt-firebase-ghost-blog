import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'https://muhammet-ali-yenidede.ghost.io',
  key: 'c9ca592e9fdff674b2df25e66e',
  version: 'v2'
})

export async function getPosts () {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags,authors'
    })
    .catch((err) => {
      console.log(err)
    })
}
