import Image from 'next/image'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea
          enim eveniet quam harum sequi, fugiat natus non nobis, obcaecati
          molestiae exercitationem voluptates ipsa qui necessitatibus, adipisci
          dolor fuga quisquam?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src='/brands.png'
            alt=''
            fill
            className={styles.brandsImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src='/hero.gif'
          alt=''
          fill
          unoptimized
          className={styles.heroImg}
        />
      </div>
    </div>
  )
}

export default Home
