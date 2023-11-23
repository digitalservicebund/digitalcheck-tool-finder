import Container from "../components/Container";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import RichText from "../components/RichText";

import { PATH_RESULT } from "./";
import Question from "../components/Question";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";

export const QuizPropsSchema = z.object({
  ressort: z.string(),
  setRessort: z.custom<Dispatch<SetStateAction<string>>>(),
  object: z.string(),
  setObject: z.custom<Dispatch<SetStateAction<string>>>(),
  reason: z.string(),
  setReason: z.custom<Dispatch<SetStateAction<string>>>(),
});

export type QuizProps = z.infer<typeof QuizPropsSchema>;

function mapToOptions(ressorts: string[]) {
  return ressorts.map((element) => {
    return {
      value: element,
      text: element,
    };
  });
}

function Quiz({
  ressort,
  setRessort,
  object,
  setObject,
  reason,
  setReason,
}: QuizProps) {
  const ressorts: string[] = [
    "BMWK",
    "BMF",
    "BMI",
    "AA",
    "BMJ",
    "BMAS",
    "BMVg",
    "BMEL",
    "BMFSFJ",
    "BMG",
    "BMDV",
    "BMUV",
    "BMBF",
    "BMZ",
    "BMWSB",
  ];
  const objects: string[] = [
    "Interaktion von Akteuren",
    "Datenflüsse",
    "Entscheidungslogiken",
    "Prozesse (zeitliche Abfolgen)",
    "Weiß ich nicht",
    "Anderes",
  ];
  const reasons: string[] = [
    "Gemeinsames Verständnis aufbauen",
    "Ideen austauschen",
    "Abhängigkeiten strukturieren",
    "Logikbrüche erkennen",
    "Digitaltauglichkeit erkennen",
    "Medienbrüche erkennen",
    "Weiß ich nicht",
    "Anderes",
  ];

  return (
    <>
      <Background backgroundColor="blue" paddingTop="48" paddingBottom="48">
        <Container paddingTop="0" paddingBottom="0">
          <Header
            heading={{
              tagName: "h1",
              look: "ds-heading-01-reg",
              text: "Werkzeugfinder für Visualisierungen",
            }}
            content={{
              markdown: `Hier erfahren Sie, welche Art der Visualisierung und welches Werkzeug für Ihr Bedürfnis das 
              richtige ist. Beantworten Sie uns drei Fragen und wir schlagen Ihnen das passende Werkzeug vor.`,
            }}
          ></Header>
        </Container>
      </Background>
      <Background backgroundColor="yellow" paddingTop="16" paddingBottom="16">
        <Container paddingTop="0" paddingBottom="0">
          <RichText
            markdown={`Der Werkzeugfinder kann genutzt werden, wenn Sie im Kontext des Digitalcheck 
          eine Visualisierung erstellen möchten.`}
          />
        </Container>
      </Background>
      <Question
        heading={"In welchem Ressort arbeiten Sie?"}
        description={`Diese Information benötigen wir, da Sie nur auf die Werkzeuge aus Ihrem Haus zugreifen können.`}
        select={{
          name: "ressort",
          label: "Ressort",
          value: ressort,
          onChange: setRessort,
          options: mapToOptions(ressorts),
        }}
      />
      <Question
        heading={"Was möchten Sie darstellen?"}
        description={`Durch Ihre Antwort können wir die Art der Darstellung bestimmen. Diese gibt uns Rückschluss 
        auf das Werkzeug, in dem diese am Besten zu erstellen ist.`}
        select={{
          name: "object",
          label: "Objekt der Darstellung",
          value: object,
          onChange: setObject,
          options: mapToOptions(objects),
        }}
      />
      <Question
        heading={"Was möchten Sie mit der Visualisierung erreichen?"}
        description={`Bei mehreren Gründen nennen Sie uns den wichtigsten.`}
        select={{
          name: "reason",
          label: "Grund der Visualisierung",
          value: reason,
          onChange: setReason,
          options: mapToOptions(reasons),
        }}
      />
      <Container paddingTop="48" paddingBottom="48">
        <ButtonContainer>
          <Button text={"Werkzeug suchen"} size={"large"} href={PATH_RESULT} />
        </ButtonContainer>
      </Container>
    </>
  );
}

export default Quiz;
