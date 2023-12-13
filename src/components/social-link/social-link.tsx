import Link, { LinkProps } from "next/link";
import { FC, HTMLAttributes } from "react";
import { IconContext } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { Button } from "../ui/button";

interface SocialLinkProps {
  variant: string;
}

export const SocialLink: FC<SocialLinkProps> = ({ variant }) => {
  const socials: Record<SocialLinkProps["variant"], JSX.Element> = {
    github: <GitHubLink />,
    linkedin: <LinkedInLink />,
    email: <EmailLink />,
  };

  if (!socials[variant]) return null;

  return socials[variant];
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
    <Button
      asChild
      className="rounded-none bg-muted text-sm sm:text-lg md:text-xl"
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" {...props} />
    </Button>
  );
};
