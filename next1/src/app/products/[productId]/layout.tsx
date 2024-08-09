export default function ProductDetailsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <>
        {children}
        <h2>Featured products</h2>
        <p>carousel here</p>
        </>
    )
  }