import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Guess",
  description: "A Wordle-like game with AI integration. Guess the word in 6 tries or less.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
