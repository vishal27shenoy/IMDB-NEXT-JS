import Header from "@/component/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/component/Navbar";
import Searchbox from "@/component/Searchbox";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>IMDB</title>
        <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
      </head>

      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <Searchbox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
