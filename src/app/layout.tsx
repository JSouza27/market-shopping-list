import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boilerplate NextJS',
  description: 'Boilerplate usando React, Typescript, Tailwind e NextJS'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        suppressHydrationWarning={true}
        className="bg-white_bis flex flex-col items-center p-6"
      >
        {children}
      </body>
    </html>
  );
}
