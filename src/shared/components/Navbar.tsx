export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-2">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <img src="../../public/assets/react.svg" alt="" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-montserrat">
              React Patterns
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
