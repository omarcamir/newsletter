import Logo from "../atoms/Logo";
import SocialMedia from "../molecules/SocialMedia";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto bg-gray-900 text-white py-10">
        <Logo />
        <div className="mt-4">
          <SocialMedia />
        </div>
      </div>
      <div className="bg-gray-700 text-white">
        <div className="container mx-auto py-2 flex items-center gap-5 justify-center">
          <p className="text-sm">Omar Samir &copy; {year}</p>
          <span>|</span>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
