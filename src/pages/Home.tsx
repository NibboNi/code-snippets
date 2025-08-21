import { useState } from 'react';
import { Link } from 'react-router';
import Icon from '@mdi/react';
import {
  mdiWhiteBalanceSunny,
  mdiMoonWaxingCrescent,
  mdiMonitor,
  mdiCellphone,
} from '@mdi/js';
import { useTheme } from '../hooks/useTheme';

function Home() {
  const [isMobile] = useState(window.matchMedia('(any-hover:none)').matches);
  const { theme, setTheme } = useTheme();

  return (
    <main className="mx-auto h-dvh flex flex-col justify-start items-center gap-5">
      <div className="py-10 px-5 max-w-7xl flex flex-col justify-center items-center gap-5">
        <header className="py-2.5 w-full">
          <h1 className="text-5xl text-center uppercase font-black">
            Code Snippets
          </h1>
        </header>
        <ul className="w-full">
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
      </div>
      <footer className="mt-auto p-8 w-full flex justify-center items-center gap-4 border-t border-t-zinc-500/25 rounded-t-3xl dark:border-t-zinc-500/35">
        <div
          className={`py-1 px-2 relative flex justify-center items-center gap-2.5 font-medium capitalize bg-zinc-50 border border-zinc-500/50 rounded-full overflow-hidden dark:bg-zinc-950
            before:absolute before:top-0  before:h-full before:w-1/2 before:bg-zinc-500/50 before:transition-all before:duration-300 before:ease-in-out
            ${
              theme === 'dark'
                ? 'before:left-1/2'
                : theme === 'light'
                ? 'before:left-0'
                : 'before:left-full before:opacity-0'
            }
            `}
        >
          <button
            onClick={() => setTheme('light')}
            type="button"
            className="text-black dark:text-white"
          >
            <Icon path={mdiWhiteBalanceSunny} size={1} />
          </button>
          <button
            onClick={() => setTheme('dark')}
            type="button"
            className="text-black dark:text-white"
          >
            <Icon path={mdiMoonWaxingCrescent} size={1} />
          </button>
        </div>
        <button
          onClick={() => setTheme('system')}
          className={`py-1 px-2 relative font-medium capitalize text-black bg-zinc-50 border border-zinc-500/50 rounded-full overflow-hidden dark:text-white dark:bg-zinc-950
            before:absolute before:top-0 before:left-0 before:h-full before:w-full before:transition-colors before:duration-300 before:ease-in-out
            ${theme === 'system' ? 'before:bg-zinc-500/50' : ''}`}
        >
          <Icon path={isMobile ? mdiCellphone : mdiMonitor} size={1} />
        </button>
      </footer>
    </main>
  );
}

export default Home;
