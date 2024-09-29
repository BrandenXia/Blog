import "./globals.css";
import { JSXWrapper } from "@/lib/typeUtils";
import Providers from "@/components/providers";
import { Inter } from "next/font/google";
import config from "@data/config";

const { metadata } = config;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const Layout: JSXWrapper = ({ children }) => (
  <html lang="en">
    <body className={`${inter.className} antialiased`}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default Layout;
export { metadata };
