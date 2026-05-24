import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dzul Imamul Hakim | Master Barber",
  description:
    "Gentleman's Grooming, Potongan Elegan untuk Pria Modern. Booking via WhatsApp.",
  openGraph: {
    title: "Dzul Imamul Hakim | Master Barber",
    description:
      "Gentleman's Grooming, Potongan Elegan untuk Pria Modern. Booking via WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
