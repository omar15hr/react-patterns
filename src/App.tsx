import { CardList } from "./shared/components/CardList";
import { ModeToggle } from "./components/mode-toggle";
import Navbar from "./shared/components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <main className="max-w-4xl flex flex-col items-center justify-center p-4 mx-auto gap-10">
        <section className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-4xl font-montserrat">
            Patrones de Diseño en React
          </h1>
          <h4 className="text-slate-500">
            Aprende los patrones más utilizados en React para crear componentes
            reutilizables, mantenibles y escalables con ejemplos prácticos.
          </h4>

          <div className="flex gap-2 mt-4">
            <Button>Github</Button>
            <ModeToggle />
          </div>
        </section>

        <section className="flex flex-wrap gap-5 justify-center">
          <CardList />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
