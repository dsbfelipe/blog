import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  MoonIcon,
  SunIcon,
  ListIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "../../contexts/theme-provider";

const Header = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <header className="glass fixed top-8 left-1/2 flex w-full max-w-[clamp(320px,80vw,430px)] -translate-x-1/2 items-center justify-between rounded-4xl px-8 py-1 md:max-w-[760px]">
      <Link to="/">
        <p className="font-wister-demo flex text-4xl">BNF!</p>
      </Link>

      <nav
        aria-label="Menu de navegação"
        className="font-outfit hidden gap-16 md:flex"
      >
        <Link to="/" className="hover:underline">
          Início
        </Link>
        <Link to="/resources" className="hover:underline">
          Recursos
        </Link>
        <Link to="/sobre" disabled className="cursor-not-allowed text-gray-300">
          Sobre mim
        </Link>
      </nav>

      <nav aria-label="Ações rápidas" className="items-center gap-4 md:flex">
        <HeaderButton
          onClick={toggleTheme}
          ariaLabel="Alternar entre modo claro e escuro"
        >
          {darkMode ? (
            <MoonIcon size={24} alt="Ícone em forma de lua" />
          ) : (
            <SunIcon size={24} alt="Ícone em forma de sol" />
          )}
        </HeaderButton>

        <p className="hidden md:block">•</p>

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

        <OpenSidebarButton />
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
        className="hover:bg-hover dark:hover:bg-dark-hover hidden cursor-pointer rounded-full bg-transparent p-2 md:block"
      >
        {children}
      </button>
    </a>
  );
};

const OpenSidebarButton = () => {
  return (
    <button className="flex cursor-pointer items-center md:hidden">
      <ListIcon
        size={24}
        alt="Ícone de menu, clique para abrir o barra lateral"
      />
    </button>
  );
};

export default Header;
