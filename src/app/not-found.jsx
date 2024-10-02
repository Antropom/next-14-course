import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Sorry the page you are looking for is not found</p>
      <Link href='/'>Return Home</Link>
    </div>
  )
}

export default NotFound
