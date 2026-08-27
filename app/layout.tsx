import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Logo Makers Pro",
  description: "Professional Logo Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${archivoBlack.variable} font-sans antialiased`}>
        <Cursor />
        <Navbar />
        {children}
              <Footer/>

      </body>
    </html>
  );
}