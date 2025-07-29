// app/layout.tsx
export const metadata = {
  title: '1118 Site',
  description: 'Website for 1118 Labs',
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
