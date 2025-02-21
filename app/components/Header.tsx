import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full shadow-md z-10">
      <div className="flex flex-wrap justify-center md:justify-between items-center max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold w-full md:w-auto">To The New</div>
        <nav className="flex flex-wrap justify-center space-x-4 mt-2 md:mt-0 w-full md:w-auto">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
