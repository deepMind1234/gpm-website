import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="font-serif text-4xl lg:text-5xl font-light tracking-tight mb-8">
            About Us
          </h1>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde 
              omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            
            <p>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
              voluptatem sequi nesciunt.
            </p>

            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
              dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
              exercitationem ullam corporis suscipit laboriosam.
            </p>

            <div className="pt-8 mt-8 border-t border-border">
              <h2 className="font-serif text-2xl font-light tracking-tight mb-4 text-foreground">
                Our Commitment
              </h2>
              <p>
                Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit 
                qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
                dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et 
                iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
