import { Link } from "./SocialLinks";

function Footer({ position }) {
  return (
    <footer
      className={`${
        position ? position : "absolute"
      } bottom-0 w-full z-30 sm:p-4 py-2 text-center text-sm text-gray-400 backdrop-blur-sm bg-black/10 `}
    >
      <div className="flex justify-between md:w-3/5 w-full items-center mx-auto flex-col sm:flex-row gap-3">
        <p>&copy; 2025 Sanusi Olayinka | All Rights reserved</p>
        {/* http://wa.me/2348119760275 */}
        <Link />
      </div>
    </footer>
  );
}

export default Footer;
