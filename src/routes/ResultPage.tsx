import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Recommendation } from "src/models/Result";
import Box from "../components/Box";
import BoxWithImage from "../components/BoxWithImage";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import Container from "../components/Container";
import Image from "../components/Image";
import RichText from "../components/RichText";
import type { Reason } from "../models/Reason";
import type { Ressort } from "../models/Ressort";
import type { VisualisationObject } from "../models/VisualisationObject";
import { findResultByObjectAndRessort } from "../persistance/repository";
import useTitle from "../services/useTitle";
import { PATH_QUIZ } from "./";

export type ResultPageProps = {
  ressort: Ressort | null;
  object: VisualisationObject | null;
  reason: Reason | null;
};

function getImageUrl(src: string) {
  return new URL(`../../resources/img/${src}`, import.meta.url).href;
}

function ResultPage({ ressort, object, reason }: ResultPageProps) {
  useTitle("Empfohlenes Werkzeug");
  const navigate = useNavigate();

  useEffect(() => {
    if (!ressort?.id || !object?.id || !reason?.id) {
      navigate(PATH_QUIZ);
    }
  });

  if (!ressort?.id || !object?.id || !reason?.id) {
    return null;
  }

  const result = findResultByObjectAndRessort(object, ressort);

  const renderRecommendation = (recommendation: Recommendation) => {
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
  };

  return result ? (
    <>
      <Container paddingTop="48" paddingBottom="0">
        <span className="sr-only">Zeige Empfehlung für:</span>
        <RichText
          markdown={`Ressort: **${ressort.name}** 
              | Objekt der Darstellung: **${object.name}** 
              | Grund der Visualisierung: **${reason.name}**`}
        />
      </Container>
      <Container paddingTop="8" paddingBottom="0">
        <ButtonContainer>
          <Button
            id={"result-change-selection"}
            text={"Eingaben ändern"}
            size={"small"}
            look={"tertiary"}
            href={PATH_QUIZ}
          />
        </ButtonContainer>
      </Container>
      <Container paddingTop="48" paddingBottom="40">
        <div className={"border-8 rounded-lg border-[#EBF3FD]"}>
          <Image
            url={getImageUrl(result.cluster.img.src)}
            alternativeText={result.cluster.img.alt}
          />
          <div className={"p-24 pt-16"}>
            <div className={"p-24 pb-32"}>
              <p>Wir empfehlen Ihnen eine Visualisierung als:</p>
              <Box
                heading={{
                  tagName: "h2",
                  text: result.cluster.name,
                }}
                content={{
                  markdown: result.cluster.description,
                }}
                buttons={[
                  {
                    id: "result-page-cluster-guide-button",
                    text: `${result.cluster.name} Anleitung`,
                    href: `/${result.cluster.id}`,
                    size: "small",
                    look: "tertiary",
                  },
                ]}
              ></Box>
            </div>
            <div>{result.recommendations.map(renderRecommendation)}</div>
          </div>
        </div>
      </Container>
    </>
  ) : (
    <Container paddingTop="48" paddingBottom="48">
      <Box
        identifier={"info-section-why-visualisation"}
        heading={{
          tagName: "h2",
          text: "Es ist ein Fehler aufgetreten.",
        }}
        content={{
          markdown: `Es tut uns Leid! Aus unbekannten Gründen ist ein Fehler aufgetreten. 
                    Bitte versuchen sie Es erneut.`,
        }}
        buttons={[
          {
            id: "result-error-page-back-button",
            text: "Zurück",
            href: PATH_QUIZ,
          },
        ]}
      ></Box>
    </Container>
  );
}
export default ResultPage;
