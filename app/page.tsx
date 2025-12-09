import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { CategoryGrid } from '@/components/category-grid'
import { ProductGrid } from '@/components/product-grid'
import { Footer } from '@/components/footer'

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <Footer />
    </div>
  )
}
