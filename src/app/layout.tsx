import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Layout/Header";
import { Menu } from "../components/Layout/Menu";
import { getAllProducts } from "../lib/api";
import ScrollToTop from "../components/parts/ScrollTop";

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
        <div className="flex flex-col items-center">
          <main className="w-full max-w-480 grid md:grid-cols-[minmax(auto,33rem)_minmax(32rem,1fr)] p-4">
            <section className="order-2 md:order-1">
              <Menu pageTitle="Clique na imagem para selecionar o modelo" models={allProducts} />
            </section>
            <section className="order-1 md:order-2 ">
              <ScrollToTop>
                {children}
              </ScrollToTop>
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
