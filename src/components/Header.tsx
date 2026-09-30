import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between px-20 py-4 border-b border-gray-600'>
        {/* Logo */}
        <h1 className='text-3xl font-semibold'>PageTurn</h1>

        {/* Nav links */}
        <nav className='flex items-center gap-4 text-xl'>
            <Link href={'/'}>Home</Link>
            <Link href={'/books'}>Books</Link>
            <Link href={'/about'}>About</Link>
        </nav>
    </header>
  )
}

export default Header