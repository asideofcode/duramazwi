export default function CompactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 pb-16 min-h-screen">
      {children}
    </main>
  );
}
