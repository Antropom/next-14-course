import styles from './postUser.module.css'
import { getUser } from '@/lib/data'

// Fetch data with API
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: 'no-store' }
//   )

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return await res.json()
// }

const PostUser = async ({ userId }) => {
  // Fetch data with API
  // const user = await getData(userId)

  // Fetch data without API
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  )
}

export default PostUser
