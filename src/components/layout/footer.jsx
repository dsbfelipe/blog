import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <div className="relative mt-24 flex flex-col justify-between border-t border-gray-300 pt-16 font-outfit">
      <div className="z-10">
        <div className="mb-4">
          <div className="mb-16 flex flex-col text-right">
            <p className="mb-4 font-arnaiz text-6xl">BLOG</p>
            <p className="self-end text-2xl md:w-2/5">
              Mais um blog sobre programação... ouvi dizer que não tem o
              suficiente ainda
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-row gap-16 text-lg">
              <Link to="/">Início</Link>
              <Link to="/recursos">Recursos</Link>
              <Link to="/sobre">Sobre Mim</Link>
            </div>
            <p className="text-lg">
              E-mail para contato:{" "}
              <a href="mailto:dsbfelipe@outlook.com" className="underline">
                dsbfelipe@outlook.com
              </a>
            </p>
          </div>
        </div>
        <div className="mb-6 flex flex-col justify-between gap-4 border-t border-gray-300 pt-6 text-center text-lg md:flex-row md:gap-0 md:text-left">
          <p>
            © 2025 <span className="font-medium">dsbfelipe</span>. Todos os
            direitos reservados
          </p>
          <div className="flex justify-around gap-4">
            <FooterSocialsLink href="https://www.linkedin.com/in/dsbfelipe/">
              <LinkedinLogoIcon />
              LinkedIn
            </FooterSocialsLink>

            <p>•</p>

            <FooterSocialsLink href="https://www.linkedin.com/in/dsbfelipe/">
              <GithubLogoIcon />
              GitHub
            </FooterSocialsLink>
          </div>
        </div>
      </div>

      <p className="absolute -bottom-64 z-0 font-arnaiz text-[407px] text-gray-300 dark:text-gray-700">
        BLOG
      </p>
    </div>
  );
};

const FooterSocialsLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 underline"
    >
      {children}
    </a>
  );
};

export default Footer;
