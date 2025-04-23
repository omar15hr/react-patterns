import { CardList } from "@/components/CardList";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <main className="max-w-4xl flex flex-col items-center justify-center p-4 mx-auto gap-10">
        <Header />
        <CardList />
      </main>
    </ThemeProvider>
  );
}

export default Home;
