import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

// Icon imports
import MapleLeafIcon from "/public/leaf.png"
import DownloadIcon from "/public/download.svg"
import ShoppingBagIcon from "/public/shoppingbag.svg"
import SearchIcon from "/public/search.svg"
import GlobeIcon from "/public/globe.svg"
//import DownloadIcon from "/public/download.svg"
// import ShoppingBagIcon from "/public/shopping-bag.svg"
// import SearchIcon from "/public/search.svg"
// import GlobeIcon from "/public/globe.svg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={MapleLeafIcon || "/leaf.svg"}
              alt="Maple Leaf"
              width={32}
              height={32}
              className="text-red-500"
            />
            <span className="text-2xl font-bold">Canify</span>
          </Link>
          <div className="space-x-4">
            <Link href="#features" className="hover:text-red-500 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="hover:text-red-500 transition-colors">
              How It Works
            </Link>
            <Link href="#about" className="hover:text-red-500 transition-colors">
              About
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Discover Canadian-Made Products</h1>
          <p className="text-xl mb-8">Shop local, support Canadian businesses, and find quality products with Canify</p>
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
            <Image src={DownloadIcon || "/placeholder.svg"} alt="Download" width={20} height={20} className="mr-2" />
            Add to Chrome
          </Button>
        </section>

        <section id="features" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Image
                  src={ShoppingBagIcon || "/placeholder.svg"}
                  alt="Shopping Bag"
                  width={48}
                  height={48}
                  className="text-red-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Canadian Product Finder</h3>
                <p>Easily identify and shop for Canadian-made products while browsing online.</p>
              </div>
              <div className="text-center">
                <Image
                  src={SearchIcon || "/placeholder.svg"}
                  alt="Search"
                  width={48}
                  height={48}
                  className="text-red-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
                <p>Use our intelligent search to find specific Canadian products across multiple retailers.</p>
              </div>
              <div className="text-center">
                <Image
                  src={GlobeIcon || "/placeholder.svg"}
                  alt="Globe"
                  width={48}
                  height={48}
                  className="text-red-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Local Business Support</h3>
                <p>Discover and support local Canadian businesses in your area.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ol className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      1
                    </span>
                    <span>Install the Canify Chrome extension</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      2
                    </span>
                    <span>Browse your favorite online stores</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      3
                    </span>
                    <span>Click on the Canify icon for more details</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      4
                    </span>
                    <span>Canify ranks and lists Canadian-made products</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      5
                    </span>
                    <span>Shop confidently, knowing you're supporting Canadian businesses</span>
                  </li>
                </ol>
              </div>
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Canify Chrome Extension Demo"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">About Canify</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Canify was born out of a passion for supporting Canadian businesses and promoting locally-made products.
              Our mission is to make it easier for consumers to identify and purchase Canadian-made goods, fostering
              economic growth and sustainability within our communities.
            </p>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
              Contact Us
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Image
              src={MapleLeafIcon || "/placeholder.svg"}
              alt="Maple Leaf"
              width={24}
              height={24}
              className="text-red-500"
            />
            <Image
              src={MapleLeafIcon || "/placeholder.svg"}
              alt="Maple Leaf"
              width={24}
              height={24}
              className="text-red-500"
            />
            <Image
              src={MapleLeafIcon || "/placeholder.svg"}
              alt="Maple Leaf"
              width={24}
              height={24}
              className="text-red-500"
            />
          </div>
          <p>&copy; 2025 Canify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

