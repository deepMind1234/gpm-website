import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="font-serif text-4xl lg:text-5xl font-light tracking-tight mb-8">
            Contact Us
          </h1>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-6">
                <div>
                  <h2 className="font-medium text-lg mb-2">Email</h2>
                  <p className="text-muted-foreground">info@goldenpalm.com</p>
                  <p className="text-muted-foreground text-sm">sales@goldenpalm.com</p>
                </div>

                <div>
                  <h2 className="font-medium text-lg mb-2">Phone</h2>
                  <p className="text-muted-foreground">+91 4252-252257</p>
                  <p className="text-muted-foreground">+91 7598120887</p>
                  <p className="text-muted-foreground">+91 9047017867</p>

                </div>

                <div>
                  <h2 className="font-medium text-lg mb-2">Business Hours</h2>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="font-medium text-lg mb-2">Address</h2>
                  <p className="text-muted-foreground">GOLDEN PALM MANUFACTURERS PVT. LTD.</p>
                  <p className="text-muted-foreground">KADATHUR ROAD, VAYALUR</p>
                  <p className="text-muted-foreground">MADATHUKULAM(POST),</p>
                  <p className="text-muted-foreground">UDUMALPET,TAMILNADU,</p>
                  <p className="text-muted-foreground">INDIA.</p>
                </div>

                <div>
                  <h2 className="font-medium text-lg mb-2">Inquiries</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident sunt in culpa qui officia deserunt mollit.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-border">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
