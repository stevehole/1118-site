// app/layout.tsx
import './globals.css';

export const metadata = {
  title: '1118',
  description: '1118 Labs marketing site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
