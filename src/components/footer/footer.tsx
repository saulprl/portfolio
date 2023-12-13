import Link from "next/link";
import { Title } from "../title/title";
import { Contact } from "../contact/contact";

export const Footer = () => {
  return (
    <footer className="w-full bg-muted">
      <div className="flex w-full flex-col gap-4 px-2 py-8 font-sans text-white md:mx-auto md:max-w-5xl">
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-2">
            <p className="text-gray-300">Navigation</p>
            <Link
              href="/"
              className="transition-all hover:font-bold hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#"
              className="transition-all hover:font-bold hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="https://drive.google.com/file/d/177wVaIZpe7ojKyPYmQnEvYB5lCeacisj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:font-bold hover:text-primary"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-end gap-2">
          <Contact className="bg-secondary" />
          <Title />
        </div>
      </div>
    </footer>
  );
};
