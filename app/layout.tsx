import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "As Guerreiras - Ilha Diana",
  description: "Descubra a deliciosa culinária da Ilha Diana com pratos frescos e uma vista incrível do rio. Faça sua reserva online e aproveite uma experiência gastronômica única em um ambiente familiar e aconchegante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased selection:bg-amber-500 selection:text-slate-950">
        <div className="flex flex-col min-h-screen bg-white text-slate-800">

          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />

        </div>
      </body>
    </html>
  );
}
