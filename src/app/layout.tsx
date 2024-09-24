import "./globals.css";
import { JSXWrapper } from "@/lib/typeUtils";
import Providers from "@/components/providers";
import { Inter } from "next/font/google";

export { metadata } from "@data/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const Layout: JSXWrapper = ({ children }) => (
  <html lang="en">
    <body className={`${inter.className} antialiased`}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default Layout;
