import Link, { LinkProps } from "next/link";
import { FC, HTMLAttributes } from "react";
import { IconContext } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

interface SocialLinkProps {
  variant: "github" | "linkedin" | "email";
}

export const SocialLink: FC<SocialLinkProps> = ({ variant }) => {
  const socials = {
    github: <GitHubLink />,
    linkedin: <LinkedInLink />,
    email: <EmailLink />,
  };

  return (
    <IconContext.Provider value={{ className: "text-white text-2xl" }}>
      {socials[variant]}
    </IconContext.Provider>
  );
};

const GitHubLink = () => {
  return (
    <LinkWrapper href="https://github.com/saulprl">
      <FaGithub />
    </LinkWrapper>
  );
};

const LinkedInLink = () => {
  return (
    <LinkWrapper href="https://www.linkedin.com/in/sa%C3%BAl-ramos-labor%C3%ADn-82b8291a1/">
      <FaLinkedinIn />
    </LinkWrapper>
  );
};

const EmailLink = () => {
  return (
    <LinkWrapper href="mailto:saulramos378@gmail.com">
      <FaEnvelope />
    </LinkWrapper>
  );
};

const LinkWrapper: FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  href,
  ...props
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-md bg-muted p-2"
      {...props}
    />
  );
};
