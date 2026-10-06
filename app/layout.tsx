import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BENERIN — Panggil Teknisi, Beres.',
  description: 'Layanan teknisi rumah & elektronik on-demand.',
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="id"><body>{children}</body></html>;
}
