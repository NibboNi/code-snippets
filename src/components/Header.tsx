import { useState } from 'react';
import { Link, NavLink } from 'react-router';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mx-auto py-10 px-5 w-full max-w-7xl relative flex justify-between items-center border-b border-b-zinc-500/50">
      <h1 className="text-5xl font-semibold">
        <Link to="/">Snippets</Link>
      </h1>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col gap-1 z-50 lg:hidden"
      >
        <span className="h-0.5 w-5 bg-black dark:bg-white"></span>
        <span className="h-0.5 w-5 bg-black dark:bg-white"></span>
        <span className="h-0.5 w-5 bg-black dark:bg-white"></span>
      </button>
      <nav
        className={`pt-16 pb-5 absolute top-9 flex flex-col items-end gap-5 bg-zinc-50 border  rounded-2xl overflow-hidden z-40 transition-all duration-150 ease-in-out 
            lg:hidden
            dark:bg-zinc-950 
            ${
              isOpen
                ? 'px-5 w-auto min-w-44 max-w-3xs right-0.5 border-zinc-500/50'
                : 'px-0 w-0 right-0 border-transparent'
            }
            `}
      >
        <NavLink
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
    </header>
  );
}

export default Header;
