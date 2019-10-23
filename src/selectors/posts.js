

export default (posts, { text, sortBy }) => {
  return posts.filter((post) => {
    const textMatch = post.title.toLowerCase().includes(text.toLowerCase())
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'name') {
      return a.title < b.title  ? -1 : 1;
    }
  })

}