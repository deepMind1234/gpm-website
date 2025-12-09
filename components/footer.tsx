import Link from 'next/link'
import { categories } from '@/lib/categories'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-serif text-xl font-semibold tracking-tight">
                Golden Palm India
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for premium party and gift supplies.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link href={`/categories/${category.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 GoldenPalm India All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
