import Logo from "../atoms/Logo";
import SocialMedia from "../molecules/SocialMedia";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-gray-900 ">
        <div className=" container mx-auto text-white py-10">
          <Logo />
          <div className="mt-4">
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white">
        <div className="py-2 flex items-center gap-5 justify-center">
          <p className="text-sm">Omar Samir &copy; {year}</p>
          <span>|</span>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
