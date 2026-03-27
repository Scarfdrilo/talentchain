import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TalentChain - Tu experiencia es tu moneda",
  description: "Conectamos estudiantes y devs con empresas. Cada práctica, proyecto y logro se convierte en credenciales verificables on-chain. Gana tokens por construir tu historial.",
  keywords: ["blockchain", "talento", "credenciales", "monad", "web3", "estudiantes", "empleos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
