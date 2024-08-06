export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2 className="text-3xl text-center mt-8 font-bold">inner layout item</h2>
      {children}
    </>
  );
}
