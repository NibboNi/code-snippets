import { Link } from 'react-router';
import { Footer } from '../components/Footer';

function Home() {
  return (
    <main className="h-dvh flex flex-col justify-start items-center gap-10">
      <header className="pt-10 w-full">
        <h1 className="text-5xl text-center uppercase font-black">
          Code Snippets
        </h1>
      </header>
      <ul className="h-full w-full overflow-y-auto">
        <li className="py-2 flex justify-center items-center">
          <Link
            to="/php"
            className="text-center text-3xl uppercase font-medium border border-transparent transition-all duration-300 ease-in-out hover:font-bold hover:scale-110"
          >
            PHP
          </Link>
        </li>
        <li className="py-2 flex justify-center items-center">
          <Link
            to="/sql"
            className="text-center text-3xl uppercase font-medium border border-transparent transition-all duration-300 ease-in-out hover:font-bold hover:scale-110"
          >
            sql
          </Link>
        </li>
      </ul>
      <Footer />
    </main>
  );
}

export default Home;
