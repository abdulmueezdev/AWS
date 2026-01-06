import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
// import ThemeProvider
import { ThemeProvider } from "../hooks/useTheme";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AWS Cloud Club",
  description: "AWS Cloud Club Community Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
