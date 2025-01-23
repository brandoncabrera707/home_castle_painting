import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (    
   <>
      <div id="navBarDiv" className="flex flex-row sticky p-2 top-0 bg-navbarActive text-white font-bold text-xl">
        <div id="logoDiv" className="flex flex-row justify-start">
          <button>Home Castle Painting</button>
        </div>
        <div id="linksDiv" className="flex flex-row flex-grow justify-end space-x-4">
              <div className="hover:bg-navbarHover cursor-pointer">
                <Link href="/" className="block px-6 py-4">Home</Link>
              </div>
              <div className="hover:bg-navbarHover cursor-pointer">
                <Link href="/Gallery" className="block px-6 py-4">Gallery</Link>
              </div>
              <div className="hover:bg-navbarHover cursor-pointer">
                <Link href="/Estimate" className="block px-6 py-4">Free Estimate</Link>
              </div>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );
}
