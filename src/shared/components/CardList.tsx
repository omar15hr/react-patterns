const patterns = [
  {
    id: 1,
    name: "Container/Presentational",
    description:
      "Imponer la separación de preocupaciones separando la vista de la lógica de negocio.",
  },
  {
    id: 2,
    name: "HOC",
    description:
      "Transmita lógica reutilizable como accesorios a los componentes de toda su aplicación.",
  },
  {
    id: 3,
    name: "Render Props",
    description:
      "Pasar elementos JSX a componentes a través de propiedades.",
  },
  {
    id: 4,
    name: "Hooks",
    description:
      "Utilice funciones para reutilizar la lógica con estado entre múltiples componentes en toda la aplicación.",
  },
  {
    id: 5,
    name: "Compound",
    description:
      "Crear múltiples componentes que trabajen juntos para realizar una sola tarea.",
  }
];

export function CardList() {
  return (
    <>
      {patterns.map(({ id, name, description }) => (
        <div
          key={id}
          className="flex flex-col w-64 justify-center gap-2 border p-3 rounded-lg cursor-pointer transition-transform duration-600 hover:scale-105 shadow"
        >
          <img src="#" alt="" />
          <h1 className="text-lg font-bold text-blue-400">{name}</h1>
          <p className="text-sm">{description}</p>
        </div>
      ))}
    </>
  );
}
