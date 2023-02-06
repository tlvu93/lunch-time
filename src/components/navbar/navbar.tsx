import eggTimer from "../../assets/kitchen-timer.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex w-full h-16 justify-center items-center bg-slate-700 gap-4">
      <img src={eggTimer} alt="Logo" className="h-8" />

      <div className="text-white text-2xl font-bold">It's Lunchtime!</div>
    </div>
  );
};

export default Navbar;
