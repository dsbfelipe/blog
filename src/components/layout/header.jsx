import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  MoonIcon,
  SunIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "../../contexts/theme-provider";

const Header = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <header className="flex h-12 w-full items-center justify-center pt-8 md:justify-between">
      <Link to="/">
        <p className="flex font-arnaiz text-4xl">BLOG</p>
      </Link>

      <nav
        aria-label="Menu de navegação"
        className="hidden gap-24 font-outfit md:flex"
      >
        <Link to="/" className="hover:underline">
          Início
        </Link>
        <Link to="/recursos" className="hover:underline">
          Recursos
        </Link>
        <Link to="/sobre" disabled className="cursor-not-allowed text-gray-300">
          Sobre mim
        </Link>
      </nav>

      <nav
        aria-label="Ações rápidas"
        className="hidden items-center gap-4 md:flex"
      >
        <HeaderButton
          onClick={toggleTheme}
          ariaLabel="Alternar entre modo claro e escuro"
        >
          {darkMode ? <MoonIcon size={24} /> : <SunIcon size={24} />}
        </HeaderButton>

        <p>•</p>

        <HeaderButton
          href={"https://www.linkedin.com/in/dsbfelipe/"}
          ariaLabel="Acessar meu perfil no LinkedIn"
        >
          <LinkedinLogoIcon size={24} alt="Logo do LinkedIn" />
        </HeaderButton>

        <HeaderButton
          href={"https://github.com/dsbfelipe"}
          ariaLabel="Acessar meu perfil no GitHub"
        >
          <GithubLogoIcon size={24} alt="Logo do GitHub" />
        </HeaderButton>
      </nav>
    </header>
  );
};

const HeaderButton = ({ children, ariaLabel, href, onClick }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button
        onClick={onClick}
        aria-label={ariaLabel}
        className="cursor-pointer rounded-md bg-transparent p-2 hover:bg-gray-100 dark:hover:bg-gray-900"
      >
        {children}
      </button>
    </a>
  );
};

export default Header;
