import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Container } from "@/components/ui/Container";
import { ToastProvider } from "@/components/hooks/useToast";

export const meta = {
  title: "@SébastienMnd - Portfolio",
  description: "@SébastienMnd - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`antialiased flex flex-col min-h-screen bg-neutral-200`}>
        <ToastProvider>
          <Header />
          <main className="bg-neutral-100 flex-grow">
            <Container className="flex flex-col gap-12">{children}</Container>
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
