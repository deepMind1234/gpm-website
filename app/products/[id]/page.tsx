import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getProductById, productsData } from '@/lib/products-data'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <p>Product not found</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to catalog
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="aspect-square relative overflow-hidden bg-card border border-border">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h1 className="font-serif text-4xl lg:text-5xl font-light tracking-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <h2 className="font-medium text-lg mb-6">Specifications</h2>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Color</p>
                    <p className="font-medium">{product.color}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Pack Size</p>
                    <p className="font-medium">{product.packSize}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Dimensions</p>
                    <p className="font-medium">{product.dimensions}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">GSM</p>
                    <p className="font-medium">{product.gsm}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h2 className="font-medium text-lg mb-4">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-block bg-foreground text-background px-8 py-3 hover:bg-foreground/90 transition-colors"
                >
                  Contact Us for Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
