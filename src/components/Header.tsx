import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export function Header() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 text-center mt-10">
      <h1 className="text-4xl font-montserrat">Patrones de Diseño en React</h1>
      <h4 className="text-slate-500">
        Aprende los patrones más utilizados en React para crear componentes
        reutilizables, mantenibles y escalables con ejemplos prácticos.
      </h4>

      <div className="flex gap-2 mt-4">
        <Button>Github</Button>
        <ModeToggle />
      </div>
    </section>
  );
}
