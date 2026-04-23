import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIOLA.AR — Vestite Piola®",
  description: "Ropa exclusiva importada directo a Argentina. Bape, Supreme, Nike, The North Face, Corteiz, Hellstar, Sp5der, Balenciaga y más. Todo original, al dólar blue del día.",
  keywords: ["streetwear", "argentina", "hype", "clothing", "piola", "bape", "supreme", "nike", "north face"],
  openGraph: {
    title: "PIOLA.AR — Vestite Piola®",
    description: "Ropa exclusiva importada directo a Argentina.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Hanken+Grotesk:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
