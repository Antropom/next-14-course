import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/PostUser'
import { Suspense } from 'react'
import { getPost } from '@/lib/data'

// Fetch data with API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return await res.json()
// }

const SinglePostPage = async ({ params }) => {
  const { slug } = params

  // const post = await getData(slug)

  // Fetch data without API
  const post = await getPost(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/28651765/pexels-photo-28651765/free-photo-of-fleur-de-nenuphar-sereine-sur-un-lac-paisible.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='image'
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src='https://images.pexels.com/photos/28651765/pexels-photo-28651765/free-photo-of-fleur-de-nenuphar-sereine-sur-un-lac-paisible.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='image'
            height={50}
            width={50}
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage
