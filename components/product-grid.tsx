import Link from 'next/link'
import { productsData } from '@/lib/products-data'

export function ProductGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-tight mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Our most popular selections
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden bg-card border border-border mb-4 group-hover:border-foreground transition-colors">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="font-medium text-base">{product.name}</h3>
                <p className="text-sm font-light">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
