import { Outlet, NavLink } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Snippets() {
  return (
    <main className="h-dvh w-full flex flex-col justify-start items-start gap-5">
      <Header />
      <div className="mx-auto p-5 h-full w-full max-w-7xl flex items-start gap-5 overflow-y-auto">
        <div className="w-full">
          <Outlet />
        </div>
        <nav
          className="py-5 px-10 hidden sticky top-0 shrink-0 flex-col items-end gap-2.5 bg-zinc-50 border border-zinc-500/50 rounded-2xl transition-all duration-150 ease-in-out 
          lg:flex
        dark:bg-zinc-950"
        >
          <NavLink
            to="/php"
            className={({ isActive }) =>
              `text-lg uppercase font-light
              hover:opacity-100
              ${isActive ? 'opacity-100' : 'opacity-80'}
              `
            }
          >
            php
          </NavLink>
          <NavLink
            to="/sql"
            className={({ isActive }) =>
              `text-lg uppercase font-light 
              hover:opacity-100
              ${isActive ? 'opacity-100' : 'opacity-80'}
              `
            }
          >
            sql
          </NavLink>
        </nav>
      </div>
      <Footer />
    </main>
  );
}

export default Snippets;
