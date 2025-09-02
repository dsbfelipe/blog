import { useTheme } from "../../contexts/theme-provider";

const HeroSection = () => {
  const { darkMode } = useTheme();
  return (
    <>
      {darkMode ? (
        <SquareGrid url="/svgs/square-grid-dark.svg" />
      ) : (
        <SquareGrid url="/svgs/square-grid-light.svg" />
      )}
      <div className="mt-24 flex flex-col justify-between border-gray-300 md:flex-row md:items-end md:border-t md:pt-16 dark:border-gray-700">
        <p
          aria-label="Bem-vindo"
          className="mb-8 flex-1 font-arnaiz text-5xl md:mb-0 md:text-7xl"
        >
          BEMVINDO
        </p>
        <p className="flex-1 font-outfit text-2xl">
          Oi, meu nome é felipe e fiz esse blog pra registrar minha jornada de
          aprendizado na programação.
        </p>
      </div>
    </>
  );
};

const SquareGrid = ({ url }) => {
  return (
    <div
      className={`mt-24 h-80 w-full bg-contain bg-center bg-repeat md:block md:h-128 bg-[url(${url})]`}
    ></div>
  );
};

export default HeroSection;
