import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Layout/Header";
import { Menu } from "../components/Layout/Menu";
import { getAllProducts } from "../lib/api";
import ScrollToTop from "../components/parts/ScrollTop";
import { CallToAction } from "../components/ui/CallToAction";
import { WhatsApp } from "../components/parts/WhatsAppIcon";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Tec: Como comprar a Porta de Giro Montare",
  description: "Referência para composição dos kits para comprar a Porta de Giro Montare, da Tec.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const allProducts = getAllProducts()

  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} antialiased`}>
        <Header title="Como comprar a Porta de Giro Montare" />
        <main className="flex flex-col items-center">
          <div className="w-full max-w-480 grid md:grid-cols-[minmax(auto,33rem)_minmax(32rem,1fr)] p-4">

            <section className="order-3 md:order-1">
              <Menu pageTitle="Clique na imagem para selecionar o modelo" models={allProducts} />
            </section>

            <section className="order-1 md:order-2">
              <ScrollToTop>
                {children}
              </ScrollToTop>
            </section>

            <section className="order-2 p-4 md:order-3 md:col-span-2 flex justify-center">
              <CallToAction
                text="Entre em contato com nossa equipe de vendas"
                link="https://wa.me/5511932735689?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Encontrei%20a%20empresa%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20porta%20de%20giro"
                icon={<WhatsApp />}
                isExternal
              />
            </section>

          </div>
        </main>
      </body>
    </html >
  );
}
