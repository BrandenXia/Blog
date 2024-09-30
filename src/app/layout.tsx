import "./globals.css";
import { JSXWrapper } from "@/types/jsx-wrapper";
import Providers from "@/components/providers";
import { Inter, JetBrains_Mono } from "next/font/google";
import config from "@data/config";

const { metadata } = config;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const Layout: JSXWrapper = ({ children }) => (
  <html lang="en">
    <body
      className={`${inter.variable} ${jetbrainsMono.variable} font-sans  antialiased`}
    >
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default Layout;
export { metadata };
