import { Marked, type Renderer } from "marked";

export type RichTextProps = {
  markdown: string;
  className?: string;
};

const defaultRenderer: Partial<Renderer> = {
  link(href: string, title: string, text: string) {
    const cssClass = "text-link";
    if (href.includes("ext:")) {
      const newHref = href.replace("ext:", "");
      return `<a href="${newHref}" class="${cssClass}" target="_blank" rel="noopener">${text}</a>`;
    }
    return `<a href="${href}" class="${cssClass}">${text}</a>`;
  },
  paragraph(text: string) {
    return `<p class="text-lg">${text}</p>`;
  },
} as const;

const RichText = ({
  markdown,
  renderer,
  className,
  ...props
}: RichTextProps) => {
  const marked = new Marked({ renderer: renderer ?? defaultRenderer });
  const html = marked.parse(markdown);

  if (!html) return null;

  return (
    <div
      {...props}
      className={`rich-text ds-stack-8 ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default RichText;
