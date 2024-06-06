import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-lg font-bold">My Blog</a>
        </Link>
        <div>
          <Link href="/" legacyBehavior><a className="text-sm p-2 hover:bg-blue-800 rounded">Home</a></Link>
          <Link href="/blog" legacyBehavior><a className="text-sm p-2 hover:bg-blue-800 rounded">Blog</a></Link>
          <Link href="/about" legacyBehavior><a className="text-sm p-2 hover:bg-blue-800 rounded">About</a></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
