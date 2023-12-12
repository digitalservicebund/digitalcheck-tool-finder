import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import flowchartImage from "../../resources/img/notations/flowchart.png";
import adonisImage from "../../resources/img/tools/adonis.png";
import paperImage from "../../resources/img/tools/paper.png";
import Background from "../components/Background";
import BetaBanner from "../components/BetaBanner";
import Box from "../components/Box";
import BoxWithImage, { BoxWithImageProps } from "../components/BoxWithImage";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import Container from "../components/Container";
import Header from "../components/Header";
import Image from "../components/Image";
import RichText from "../components/RichText";
import { Reason } from "../models/Reason";
import { Ressort } from "../models/Ressort";
import { VisualisationObject } from "../models/VisualisationObject";
import { findResultByObjectAndRessort } from "../persistance/repository";
import { PATH_FLOWCHART, PATH_QUIZ } from "./";

const tools: BoxWithImageProps[] = [
  {
    label: "Für den schnellen Start",
    heading: {
      tagName: "h3",
      look: "ds-heading-03-bold",
      text: `Stift und Papier`,
    },
    content: {
      markdown: `Mit Stift und Papier lässt sich ein perfekter Aufschlag eines Flussdiagramms abbilden. 
                  Das ist häufig **schneller, um erste Gedanken zu skizzieren**, als in einem digitalen Werkzeug zu arbeiten.`,
    },
    image: {
      url: paperImage,
      alternativeText: `Foto von einer Person, die mit schwarzem Stift eine Zeichnung 
                  auf ein weißes Papier zeichnet.`,
    },
  },
  {
    label: "Eine digitale Version",
    heading: {
      tagName: "h3",
      look: "ds-heading-03-bold",
      text: `Adonis`,
    },
    content: {
      markdown: `Eine digitales Flussdiagramm können Sie erstellen, wenn Sie remote mit anderen 
              zusammenarbeiten oder bereits eine grobe Idee für eine Visualisierung haben 
              (bspw. durch vorherige Skizzen auf Papier).
              
https://www.boc-group.com/de/adonis/#features
                `,
    },
    image: {
      url: adonisImage,
      alternativeText: `Bildschirmaufnahme von der Software Adonis, die ein Flussdiagramm zeigt.`,
    },
  },
];

export const ResultPagePropsSchema = z.object({
  ressort: z.custom<Ressort>(),
  object: z.custom<VisualisationObject>(),
  reason: z.custom<Reason>(),
});

export type ResultPageProps = z.infer<typeof ResultPagePropsSchema>;

function ResultPage({ ressort, object, reason }: ResultPageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!ressort.id || !object.id || !reason.id) {
      navigate(PATH_QUIZ);
    }
  });

  if (ressort.id && object.id && reason.id) {
    const result = findResultByObjectAndRessort(object, ressort);
    console.log("Cluster: " + result.cluster.name);
    console.log("Notations: " + result.notations.map((n) => n.name).toString());
    console.log("Tools: " + result.tools.map((t) => t.name).toString());
  }

  const renderTool = (tool: BoxWithImageProps, index: number) => (
    <div
      key={`tool-${index}`}
      className={
        "p-24 border border-gray-400 border-b-0 last:border-b last:rounded-bl last:rounded-br first:rounded-tl first:rounded-tr"
      }
    >
      <BoxWithImage {...tool} />
    </div>
  );

  return (
    <>
      <Background backgroundColor="blue" paddingTop="48" paddingBottom="40">
        <Container paddingTop="0" paddingBottom="0">
          <Header
            heading={{
              tagName: "h1",
              look: "ds-heading-01-reg",
              text: `Empfohlenes Werkzeug`,
            }}
            content={{
              markdown: `Die Empfehlung erfolgt nach Ihren getätigten Eingaben. Weiter unten können Sie Ihre Eingaben ändern.`,
            }}
          ></Header>
        </Container>
      </Background>
      <BetaBanner />
      <Container paddingTop="48" paddingBottom="40">
        <div className={"border border-8 rounded-lg border-[#EBF3FD]"}>
          <Image
            url={flowchartImage}
            alternativeText="Darstellung eines vereinfachten Flussdiagramms ohne Text"
          />
          <div className={"p-24 pt-16"}>
            <div className={"p-24 pb-32"}>
              <Box
                content={{
                  markdown: `Unsere Empfehlung:`,
                }}
              ></Box>
              <Box
                heading={{
                  tagName: "h1",
                  look: "ds-heading-02-reg",
                  text: `Das Flussdiagramm`,
                }}
                content={{
                  markdown: `
Ein Flussdiagramm ist eine Art von Diagramm, das einen Prozess oder Arbeitsablauf visuell erklärt. 
    Unter Verwendung standardisierter Symbole und Definitionen beschreiben diese visuell die 
    verschiedenen Schritte und Entscheidungen eines Prozesses. So wird der Fluss, den ein 
    Prozess durchläuft abgebildet.`,
                }}
                buttons={[
                  {
                    id: "result-page-flowchart-button",
                    text: "Flussdiagramm Anleitung",
                    href: PATH_FLOWCHART,
                    size: "small",
                    look: "tertiary",
                  },
                ]}
              ></Box>
            </div>
            <div>{tools.map(renderTool)}</div>
          </div>
        </div>
      </Container>
      {ressort && object && reason && (
        <Container paddingTop="0" paddingBottom="10">
          <RichText
            markdown={`Ressort: **${ressort.name}** 
            | Object der Darstellung: **${object.name}** 
            | Grund der Visualisierung: **${reason.name}**`}
          />
        </Container>
      )}
      <Container paddingTop="0" paddingBottom="48">
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
    </>
  );
}

export default ResultPage;
