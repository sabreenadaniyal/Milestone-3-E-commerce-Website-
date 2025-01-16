import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
    <header className="text-gray-600 bg-gray-950 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href="/" className="mr-5 hover:text-red-900">HOME</Link>
      <Link href="/products" className="mr-5 hover:text-red-900">PRODUCTS</Link>
      <Link href="/GetConnected" className="mr-5 hover:text-red-900">GET CONNECTED</Link>
      <Link href="/AboutUs" className="hover:text-red-900">ABOUTus</Link>
    </nav>
    
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <Image
        src="/images/logo.gif"
        alt="logo"
        width={200}
        height={200}
        className="w-14 h-14 text-white p-2 bg-red-100 rounded-full"
      />
      <span className="ml-3 text-xl text-white">SD FASHIONs</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Sign Up
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</header>

    </>
  );
}