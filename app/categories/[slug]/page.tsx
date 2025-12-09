import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getCategoryBySlug } from '@/lib/categories'
import { getProductsByCategory } from '@/lib/products-data'

// Placeholder images for procedural generation if no specific product image exists
const PLACEHOLDER_IMAGES = [
    '/paper-plates-black-and-white.jpg',
    '/cake-boxes-black-and-white.jpg',
    '/gift-wrapping-paper-black-and-white.jpg',
    '/gift-tissue-paper-black-and-white.jpg',
    '/crinkle-cut-paper-black-and-white.jpg',
]

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const category = getCategoryBySlug(slug)

    if (!category) {
        notFound()
    }

    // Get real products for this category
    const products = getProductsByCategory(category.name)

    // If we don't have enough real products to fill a grid, let's generate some procedural ones
    // to demonstrate the "procedurally generated" requirement.
    // In a real app, we'd just show the real products.
    // Here we'll mix real products with some generated ones to ensure we have tiles.
    const proceduralProducts = Array.from({ length: 8 }).map((_, i) => ({
        id: `generated-${slug}-${i}`,
        name: `${category.name} Item ${i + 1}`,
        category: category.name,
        description: 'Procedurally generated item',
        image: PLACEHOLDER_IMAGES[i % PLACEHOLDER_IMAGES.length],
    }))

    const displayProducts = products.length > 0 ? products : proceduralProducts

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
                    <div className="mb-12 text-center">
                        <h1 className="font-serif text-4xl lg:text-5xl font-light tracking-tight mb-4">
                            {category.name}
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our collection of premium {category.name.toLowerCase()}.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayProducts.map((product) => (
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
                                    <p className="text-sm font-light truncate">{product.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
