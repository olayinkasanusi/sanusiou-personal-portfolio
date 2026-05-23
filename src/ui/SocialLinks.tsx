import { Github, Linkedin } from "lucide-react";

interface SocialLinkProps {
  children: React.ReactNode;
  name: string;
  href: string;
}

function SocialLink({ children, name, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-slate-500 hover:text-blue-600 transition-colors"
    >
      {children}
      <span className="text-sm font-medium">{name}</span>
    </a>
  );
}

function SocialLinks() {
  return (
    <div>
      <div className="mt-12 pt-6 border-t border-slate-200 text-center">
        <p className="text-slate-500 mb-4 text-sm">Or find me on</p>
        <div className="flex justify-center space-x-6">
          <SocialLink name="Github" href="https://github.com/olayinkasanusi">
            <Github className="w-5 h-5 mr-2" />
          </SocialLink>
          <SocialLink
            name="LinkedIn"
            href="https://linkedin.com/in/sanusiolayinka"
          >
            <Linkedin className="w-5 h-5 mr-2" />
          </SocialLink>
        </div>
      </div>
    </div>
  );
}

export function Link() {
  return (
    <div className="flex justify-center space-x-6">
      <SocialLink name="Github" href="https://github.com/olayinkasanusi">
        <Github className="w-5 h-5 mr-2" />
      </SocialLink>
      <SocialLink name="LinkedIn" href="https://linkedin.com/in/sanusiolayinka">
        <Linkedin className="w-5 h-5 mr-2" />
      </SocialLink>
    </div>
  );
}

export default SocialLinks;
