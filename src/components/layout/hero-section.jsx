import { useTheme } from "../../contexts/theme-provider";

const HeroSection = () => {
  const { darkMode } = useTheme();
  return (
    <>
      {darkMode ? (
        <SquareGrid url="svgs/square-grid-dark.svg" />
      ) : (
        <SquareGrid url="svgs/square-grid-light.svg" />
      )}
      <div className="mt-24 flex items-end justify-between border-t border-gray-300 pt-16">
        <p className="flex-1 font-arnaiz text-7xl">BEMVINDO</p>
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
      className={`mt-24 hidden h-128 w-full bg-contain bg-center bg-repeat md:block bg-[url(${url})]`}
    ></div>
  );
};

export default HeroSection;
