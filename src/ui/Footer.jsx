import { Link } from "./SocialLinks";

function Footer({ position }) {
  return (
    <footer
      className={`${
        position ? position : "absolute"
      } bottom-0 w-full z-30 p-4 text-center text-sm text-gray-400 backdrop-blur-sm bg-black/10 `}
    >
      <div className="flex justify-between w-1/2 items-centerms mx-auto">
        <p>&copy; 2025 Sanusi Olayinka | All Rights reserved</p>
        {/* http://wa.me/2348119760275 */}
        <Link />
      </div>
    </footer>
  );
}

export default Footer;
