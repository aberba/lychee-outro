import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@app/StyledComponentsRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Outro",
  description: "Outro demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
