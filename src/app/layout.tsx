import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '../components/header/Header';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={roboto.className}>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
