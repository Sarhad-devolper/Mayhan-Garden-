import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Shop } from "@/components/shop";
import { Highlights } from "@/components/highlights";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Shop />
        <Highlights />
        <About />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
}
