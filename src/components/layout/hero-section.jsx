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
      <div className="mt-24 flex flex-col justify-between md:flex-row md:items-center md:gap-8">
        <p
          aria-label="Bem-vindo"
          className="font-wister-demo mb-8 flex-1 text-5xl md:mb-0 md:text-8xl"
        >
          BEMVINDO
        </p>
        <p className="font-outfit flex-1 text-2xl">
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
      className="w-full bg-contain bg-center bg-repeat pt-36 pb-16 md:block md:pb-96"
      style={{ backgroundImage: `url(${url})` }}
    >
      <p className="font-wister-demo mb-4 text-center text-7xl md:mb-0 md:text-[clamp(16px,10vw,128px)]">
        BLOG NOT FOUND!
      </p>
    </div>
  );
};

export default HeroSection;
