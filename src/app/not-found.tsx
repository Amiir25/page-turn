import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
        <p>The page you're looking for is not found</p>
        <Link href={"/"}>Back to Home</Link>
    </div>
  )
}

export default NotFound