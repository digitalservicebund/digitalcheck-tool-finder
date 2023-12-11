import { Link } from "react-router-dom";
import bundLogo from "../../resources/img/bund-logo.png";
import Image from "./Image";

export default function Header() {
  return (
    <header className="py-20 px-16">
      <Link
        to="/"
        className="ds-label-01-bold no-underline hover:underline mr-8 text-black focus:outline active:underline active:decoration-4"
        aria-label="Werkzeugfinder - Zurück zur Startseite"
      >
        <Image
          url={bundLogo}
          width={54}
          alternativeText="Logo des Bundesministerium des Innern und für Heimat"
        />
      </Link>
    </header>
  );
}
