import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/goldenpalm-logo.png"
                alt="GoldenPalm Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-tight leading-tight">
                  GOLDEN PALM INDIA
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wider">
                  EST. 2009
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors">
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-56 rounded-md border border-border bg-popover p-2 shadow-md">
                  <div className="flex flex-col gap-1">
                    {['Paper Plates', 'Cake Boxes', 'Gift Wrapping Paper', 'Gift Tissue Paper', 'Crinkle Cut Paper'].map((category) => (
                      <Link
                        key={category}
                        href={`/categories/${category.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-3 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
