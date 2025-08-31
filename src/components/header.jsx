import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  MoonIcon,
  SunIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "../contexts/theme-provider";

const Header = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <header className="flex h-12 w-full items-center justify-between pt-4">
      <Link to="/">
        <p className="flex font-arnaiz text-4xl">BLOG</p>
      </Link>

      <nav className="flex gap-24 font-outfit" aria-label="Menu de navegação">
        <Link to="/">Início</Link>
        <Link>Recursos</Link>
        <Link disabled className="cursor-not-allowed text-slate-300">
          Sobre mim
        </Link>
      </nav>

      <nav aria-label="Outras redes" className="flex items-center gap-4">
        <DarkModeButton
          toggleTheme={toggleTheme}
          ariaLabel="Alternar modo escuro"
        >
          {darkMode ? <MoonIcon size={24} /> : <SunIcon size={24} />}
        </DarkModeButton>

        <p>•</p>

        <HeaderButton ariaLabel="Acessar LinkedIn">
          <LinkedinLogoIcon size={24} alt="Logo do LinkedIn" />
        </HeaderButton>
        <HeaderButton ariaLabel="Acessar GitHub">
          <GithubLogoIcon size={24} alt="Logo do GitHub" />
        </HeaderButton>
      </nav>
    </header>
  );
};

const HeaderButton = ({ children, ariaLabel }) => {
  return (
    <button
      aria-label={ariaLabel}
      className="cursor-pointer rounded-md bg-transparent px-2 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {children}
    </button>
  );
};

const DarkModeButton = ({ children, ariaLabel, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label={ariaLabel}
      className="cursor-pointer rounded-md bg-transparent px-2 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {children}
    </button>
  );
};

export default Header;
