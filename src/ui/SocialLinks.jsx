import GitHubIcon from "./GithubIcon";
import LinkedInIcon from "./LinkedInIcon";

function SocialLink({ children, name, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
    >
      {children}
      <span className="text-sm font-medium">{name}</span>
    </a>
  );
}

function SocialLinks() {
  return (
    <div>
      <div className="mt-12 pt-6 border-t border-gray-800 text-center">
        <p className="text-gray-400 mb-4 text-sm">Or find me on</p>
        <div className="flex justify-center space-x-6">
          <SocialLink name="Github" href="https://github.com/olayinkasanusi">
            <GitHubIcon className="w-5 h-5 mr-2 outline-0" />
          </SocialLink>
          <SocialLink
            name="LinkedIn"
            href="https://linkedin.com/in/sanusiolayinka"
          >
            <LinkedInIcon className="w-5 h-5 mr-2 outline-0" />
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
        <GitHubIcon className="w-5 h-5 mr-2 outline-0" />
      </SocialLink>
      <SocialLink name="LinkedIn" href="https://linkedin.com/in/sanusiolayinka">
        <LinkedInIcon className="w-5 h-5 mr-2 outline-0" />
      </SocialLink>
    </div>
  );
}

export default SocialLinks;
