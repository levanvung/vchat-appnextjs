import './global.css';

export const metadata = {
  title: 'VChat App',
  description: 'A Next.js VChat Application',
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
