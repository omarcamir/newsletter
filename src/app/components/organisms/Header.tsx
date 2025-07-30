import Logo from "../atoms/Logo";
import SearchPopup from "../molecules/SearchPopup";
import SocialMedia from "../molecules/SocialMedia";

const Header = () => {
  const today = new Date().toUTCString();
  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto py-2 flex justify-between">
          <p className="text-xs">{today}</p>
          <SocialMedia />
        </div>
      </div>
      <div className="!sticky top-0 bg-white shadow-sm">
        <div className="container mx-auto py-4 flex items-center justify-between gap-5">
          <Logo />
          <SearchPopup />
        </div>
      </div>
    </>
  );
};

export default Header;
