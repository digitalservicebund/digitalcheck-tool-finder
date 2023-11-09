import Image from "./Image";
import bundLogo from "../../public/img/bund-logo.png";

export default function Header() {
  return (
    <header className="py-20 px-16">
      <a
        href="/"
        className="ds-label-01-bold no-underline hover:underline mr-8 text-black focus:outline active:underline active:decoration-4"
        aria-label="Werkzeugfinder - Zurück zur Startseite"
      >
        <Image
          url={bundLogo}
          width={54}
          alternativeText="Logo des Bundesministerium des Innern und für Heimat"
        />
      </a>
    </header>
  );
}
