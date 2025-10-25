import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

const routes = [
  { path: "/", label: "Início" },
  { path: "/resources", label: "Recursos" },
  { path: "/sobre", label: "Sobre Mim" },
];

const links = [
  {
    href: "https://www.linkedin.com/in/dsbfelipe/",
    label: "LinkedIn",
    icon: <LinkedinLogoIcon />,
  },
  {
    href: "https://github.com/dsbfelipe",
    label: "GitHub",
    icon: <GithubLogoIcon />,
  },
];

const Footer = () => {
  return (
    <div className="font-outfit glass mt-24 mb-4 flex flex-col justify-between px-16 py-8 pt-12">
      <div className="z-10">
        <div className="mb-4">
          <BrandSection />
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
            <Routes />
            <Contact />
          </div>
        </div>
        <div className="mb-6 flex flex-col-reverse justify-between gap-6 border-t border-gray-300 pt-6 text-center text-lg md:flex-row md:gap-0 md:text-left dark:border-gray-700">
          <p>
            © 2025 <span className="font-medium">dsbfelipe</span>. Todos os
            direitos reservados
          </p>
          <Links />
        </div>
      </div>
    </div>
  );
};

const SocialsLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 underline"
  >
    {children}
  </a>
);

const BrandSection = () => (
  <div className="mb-16 flex flex-col text-right">
    <p className="font-wister-demo mb-4 text-7xl">BNF!</p>
    <p className="self-end text-2xl md:w-3/5 lg:w-2/5">
      Mais um blog sobre programação... ouvi dizer que não tem o suficiente
      ainda
    </p>
  </div>
);

const Routes = () => {
  return (
    <div className="flex flex-row gap-16 text-lg">
      {routes.map((link) => (
        <Link key={link.path} to={link.path}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

const Contact = () => (
  <p className="text-lg">
    E-mail para contato:{" "}
    <a href="mailto:dsbfelipe@outlook.com" className="underline">
      dsbfelipe@outlook.com
    </a>
  </p>
);

const Links = () => (
  <div className="flex justify-around gap-4">
    {links.map((link) => (
      <SocialsLink key={link.href} href={link.href}>
        {link.icon}
        {link.label}
      </SocialsLink>
    ))}
  </div>
);

export default Footer;
