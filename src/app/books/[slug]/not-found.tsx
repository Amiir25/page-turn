import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
        <p>The book you're looking for is not found</p>
        <Link href={"/books"}>Back to Book List</Link>
    </div>
  )
}

export default NotFound