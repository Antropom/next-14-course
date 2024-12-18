import Image from 'next/image'
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact page',
  description: 'Contact description',
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src='/contact.png'
          alt='Contact image'
          fill
        />
      </div>
      <div className={styles.formContainer}>
        <form
          action=''
          className={styles.form}
        >
          <input
            type='text'
            placeholder='Name and Surname'
          />
          <input
            type='text'
            placeholder='Email address'
          />
          <input
            type='text'
            placeholder='Phone number (optional)'
          />
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Message'
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
