import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";

const products = [
  {
    id: 1,
    name: "Official T-Shirt",
    price: "KSh 1,500",
    description: "Premium cotton t-shirt with Kabila La Vijana logo",
  },
  {
    id: 2,
    name: "Cap",
    price: "KSh 800",
    description: "Embroidered cap with official branding",
  },
  {
    id: 3,
    name: "Hoodie",
    price: "KSh 3,000",
    description: "Warm hoodie perfect for all seasons",
  },
  {
    id: 4,
    name: "Wristband",
    price: "KSh 200",
    description: "Show your support with our official wristband",
  },
  {
    id: 5,
    name: "Membership Card",
    price: "KSh 500",
    description: "Official membership card with unique ID",
  },
  {
    id: 6,
    name: "Sticker Pack",
    price: "KSh 300",
    description: "Set of 5 premium vinyl stickers",
  },
];

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop | Kabila La Vijana</title>
        <meta name="description" content="Shop official Kabila La Vijana merchandise and show your support for youth empowerment in Kenya." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
            <div className="wave-decoration opacity-50" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Official Merchandise
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Support the movement with our official merchandise
                </p>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group card-gradient rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <img src={logo} alt={product.name} className="h-32 w-32 object-contain opacity-50 group-hover:opacity-70 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-primary text-xl">{product.price}</span>
                        <Button variant="hero" size="sm" className="gap-2">
                          <ShoppingCart className="h-4 w-4" /> Add
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Shop;