import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'De Ming Liang | Portfolio',
  description: 'Engineering, creativity, and movement portfolio for De Ming Liang.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
