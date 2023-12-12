import Link from "next/link";
import { SocialLink } from "../social-link/social-link";
import { Button } from "../ui/button";

export const Contact = () => {
  return (
    <div className="flex w-fit gap-4 rounded-full bg-accent pr-6">
      <Button asChild className="rounded-l-full bg-muted">
        <Link href="mailto:saulramos378@gmail.com">Contact me</Link>
      </Button>
      <SocialLink variant="github" />
      <SocialLink variant="linkedin" />
      <SocialLink variant="email" />
    </div>
  );
};
