import Link from 'next/link'
import styles from './links.module.css'
import NavLink from './navlink/NavLink'

const Links = () => {
  const links = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ]

  // TEMPORARY
  const session = true
  const isAdmin = true

  return (
    <div className={styles.links}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          item={link}
        />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: 'Login', path: '/login' }} />
      )}
    </div>
  )
}

export default Links