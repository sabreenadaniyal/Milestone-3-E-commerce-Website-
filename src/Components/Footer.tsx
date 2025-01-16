import Image from "next/image"

export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font bg-gray-950 mt-5">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/images/logo.gif"
              alt="logo"
              width={200}
              height={200}
              className="w-14 h-14 text-white p-2 rounded-full"
            />
            <span className="ml-3 text-xl text-gray-500">SD FASHIONs</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 All right Reserved —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1 hover:text-red-800"
              rel="noopener noreferrer"
              target="_blank">
              @SabreenaDaniyal
            </a>
          </p>

        </div>
      </footer>

    </>
  );
}