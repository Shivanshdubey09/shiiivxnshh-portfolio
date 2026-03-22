import type { Metadata } from 'next';
import { Outfit, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit' 
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk' 
});
const jetBrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains-mono' 
});

export const metadata: Metadata = {
  title: 'Portfolio | Shivansh Dubey',
  description: 'A scrollytelling digital experience by a Creative Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans antialiased text-white bg-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  );
}
