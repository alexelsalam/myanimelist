import Sosmed from "./Sosmed";

const Footer = () => {
  return (
    <section className="bg-[#073D37] h-auto mt-5">
      <div className="py-5 text-center text-white">
        <h2 className="text-lg font-bold lg:text-5xl">COMMUNITY.</h2>
        <p className="text-sm">
          Get involved in our community. Everyone is welcome!
        </p>
      </div>
      <Sosmed />
      <div className="py-5 text-center text-white">
        <p>© 2024 Alexelsalam</p>
      </div>
    </section>
  );
};
export default Footer;
