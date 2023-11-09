import { z } from "zod";
import type { Renderer } from "marked";
import Container from "./Container";
import Image from "./Image";
import RichText from "./RichText";
import bmiLogo from "../../public/img/bmi-logo.png";

const LinkPropsSchema = z.object({
  url: z.string(),
  text: z.string(),
  openInNewTab: z.boolean().optional(),
});

type LinkProps = z.infer<typeof LinkPropsSchema>;

const paragraphs = [
  {
    markdown:
      "Ein Online Dienst der [DigitalService GmbH des Bundes](https://digitalservice.bund.de/)",
  },
  {
    markdown:
      "Im Auftrag des [Bundesministerium des Innern und für Heimat](https://www.bmi.bund.de/)",
  },
];
const links = [
  { url: "#", text: "Impressum" },
  { url: "#", text: "Datenschutzbestimmung" },
  { url: "#", text: "Cookie-Einstellungen" },
  { url: "#", text: "Barrierefreiheit" },
  { url: "#", text: "Open Source Code" },
];

export default function Footer() {
  const linksMiddleIndex = Math.ceil(links.length / 2);
  const linksFirstColumn: typeof links = links.slice(0, linksMiddleIndex);
  const linksSecondColumn: typeof links = links.slice(linksMiddleIndex);

  const renderLink = (link: LinkProps) => (
    <li key={link.url} className="leading-snug">
      <a
        href={link.url}
        className="text-link increase-tap-area"
        target={link.openInNewTab ? "_blank" : undefined}
        rel={link.openInNewTab ? "noreferrer" : undefined}
      >
        {link.text}
      </a>
    </li>
  );

  const renderLinks = (links: LinkProps[]) => (
    <ul className="list-none m-0 p-0 ds-stack-8" key={links[0]?.url}>
      {links.map(renderLink)}
    </ul>
  );

  const paragraphRenderer: Partial<Renderer> = {
    link(href, _, text) {
      return `<a class="text-link increase-tap-area whitespace-nowrap" href=${href} target="_blank" rel="noopener">${text}</a>`;
    },
    paragraph(text) {
      return `<p class="leading-snug">${text}</p>`;
    },
  };

  return (
    <footer className="text-base">
      <Container paddingTop="48">
        <div className="flex flex-wrap items-start justify-between gap-y-32">
          <div className="flex flex-col flex-col-reverse sm:flex-row gap-y-8 gap-x-16">
            <div>
              <Image
                url={bmiLogo}
                width={120}
                alternativeText="Logo des Bundesministerium des Innern und für Heimat"
              />
            </div>
            <div className="ds-stack-8">
              {paragraphs.map((paragraph) => (
                <div key={paragraph.markdown}>
                  <RichText {...paragraph} renderer={paragraphRenderer} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-32 gap-y-8">
            {renderLinks(linksFirstColumn)}
            {renderLinks(linksSecondColumn)}
          </div>
        </div>
      </Container>
    </footer>
  );
}
