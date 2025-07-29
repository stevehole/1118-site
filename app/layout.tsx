// app/layout.tsx
import './globals.css';

export const metadata = {
  title: '1118 Site',
  description: 'Built with Next.js 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

