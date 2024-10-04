import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src='https://images.pexels.com/photos/28651765/pexels-photo-28651765/free-photo-of-fleur-de-nenuphar-sereine-sur-un-lac-paisible.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='image'
            height={50}
            width={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          eos. Quia quo fugit, vero voluptatum saepe excepturi ipsum asperiores
          ducimus illum architecto, repudiandae alias iste. Eius autem hic
          nesciunt suscipit.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
