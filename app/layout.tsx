import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lokesh Portfolio — Digital Engineering',
  description: 'P. Lokesh — a cinematic digital portfolio for a web developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
