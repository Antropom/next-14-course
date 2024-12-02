import PostCard from '@/components/postCard/PostCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

// Fetch data with API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: { evalidate: 3600 },
//   })

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return await res.json()
// }

export const metadata = {
  title: 'Blog page',
  description: 'Blog description',
}

const BlogPage = async () => {
  // Fetch data with API
  // const posts = await getData()

  // Fetch data without API
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div
          className={styles.post}
          key={post.id}
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage
