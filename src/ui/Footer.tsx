import { Link } from "./SocialLinks";

interface FooterProps {
  position?: string;
}

function Footer({ position }: FooterProps) {
  return (
    <footer
      className={`
        ${position === "fixed" ? "fixed bottom-0 left-0" : "relative"} 
        w-full z-30 py-6 text-center text-xs text-slate-500 bg-white/70 border-t border-slate-100 backdrop-blur-xs
      `}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 gap-3">
        <p>&copy; {new Date().getFullYear()} Sanusi Olayinka Uthman. All rights reserved.</p>
        <Link />
      </div>
    </footer>
  );
}

export default Footer;
