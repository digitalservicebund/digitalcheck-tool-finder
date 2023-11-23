import Container from "../components/Container";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import RichText from "../components/RichText";
import { OptionsProps } from "../components/Select";

import { PATH_RESULT } from "./";
import Question from "../components/Question";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";

export const QuizPropsSchema = z.object({
  ressort: z.string(),
  setRessort: z.custom<Dispatch<SetStateAction<string>>>(),
});

type QuizProps = z.infer<typeof QuizPropsSchema>;

function Quiz({ ressort, setRessort }: QuizProps) {
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
  const ressortOptions: OptionsProps = ressorts.map((element) => {
    return {
      value: element,
      text: element,
    };
  });
  const objectOptions: OptionsProps = [
    { value: "interaction", text: "Interaktion von Akteuren" },
    { value: "dataflows", text: "Datenflüsse" },
    { value: "decision", text: "Entscheidungslogiken" },
    { value: "process", text: "Prozesse (zeitliche Abfolgen)" },
    { value: "unknown", text: "Weiß ich nicht" },
    { value: "other", text: "Anderes" },
  ];
  const reasonOptions: OptionsProps = [
    { value: "understanding", text: "Gemeinsames Verständnis aufbauen" },
    { value: "ideas", text: "Ideen austauschen" },
    { value: "dependencies", text: "Abhängigkeiten strukturieren" },
    { value: "logic", text: "Logikbrüche erkennen" },
    { value: "digital", text: "Digitaltauglichkeit erkennen" },
    { value: "media", text: "Medienbrüche erkennen" },
    { value: "unknown", text: "Weiß ich nicht" },
    { value: "other", text: "Anderes" },
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
          options: ressortOptions,
        }}
      />
      <Question
        heading={"Was möchten Sie darstellen?"}
        description={`Durch Ihre Antwort können wir die Art der Darstellung bestimmen. Diese gibt uns Rückschluss 
        auf das Werkzeug, in dem diese am Besten zu erstellen ist.`}
        select={{
          name: "object",
          label: "Objekt der Darstellung",
          options: objectOptions,
        }}
      />
      <Question
        heading={"Was möchten Sie mit der Visualisierung erreichen?"}
        description={`Bei mehreren Gründen nennen Sie uns den wichtigsten.`}
        select={{
          name: "reason",
          label: "Grund der Visualisierung",
          options: reasonOptions,
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
