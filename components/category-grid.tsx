import Link from 'next/link'
import { categories } from '@/lib/categories'

export function CategoryGrid() {
  return (
    <section className="border-b border-border py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-tight mb-4">
            Explore by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse our carefully organized collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden bg-card border border-border hover:border-foreground transition-colors"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-6 border-t border-border">
                <h3 className="font-medium text-lg mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
