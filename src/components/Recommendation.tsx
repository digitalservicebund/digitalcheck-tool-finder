import { Recommendation } from "src/models/Result";
import { getImageUrl } from "../services/getImageUrl";
import BoxWithImage from "./BoxWithImage";

export interface RecommendationProps {
  recommendation: Recommendation;
}

export default function renderRecommendation({
  recommendation,
}: RecommendationProps) {
  const fidelity = recommendation.fidelity;
  const tool = recommendation.primaryTool;

  return (
    <div
      key={`tool-${tool.id}`}
      className={
        "p-24 border border-gray-400 border-b-0 last:border-b last:rounded-bl last:rounded-br first:rounded-tl first:rounded-tr"
      }
    >
      <BoxWithImage
        {...{
          label: fidelity.name,
          heading: {
            tagName: "h3",
            text: tool.name,
          },
          content: {
            markdown: `${tool.description}
              ${tool.link ? "\n\n" + tool.link : ""}
              ${tool.access ? "\n\n" + tool.access : ""}`,
          },
          image: tool.img.src
            ? {
                url: getImageUrl(tool.img.src),
                alternativeText: tool.img.alt,
              }
            : undefined,
        }}
      />
    </div>
  );
}
