import Container from "../components/Container";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";

import { PATH_RESULT } from "./";
import Question from "../components/Question";
import { z } from "zod";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { trackSelection } from "../services/tracking";
import {
  findAllObjects,
  findAllReasons,
  findAllRessorts,
} from "../persistance/repository";
import { Ressort } from "../persistance/models/Ressort";
import { VisualisationObject } from "../persistance/models/VisualisationObject";
import { Reason } from "../persistance/models/Reason";
import { Entity } from "../persistance/models/Entity";
import BetaBanner from "../components/BetaBanner";

export const QuizPropsSchema = z.object({
  ressortId: z.string(),
  setRessortId: z.custom<Dispatch<SetStateAction<string>>>(),
  objectId: z.string(),
  setObjectId: z.custom<Dispatch<SetStateAction<string>>>(),
  reasonId: z.string(),
  setReasonId: z.custom<Dispatch<SetStateAction<string>>>(),
});

export type QuizProps = z.infer<typeof QuizPropsSchema>;

function mapToOptions(entities: Entity[]) {
  return entities.map((element) => {
    return {
      value: element.id,
      text: element.name,
    };
  });
}

function Quiz({
  ressortId,
  setRessortId,
  objectId,
  setObjectId,
  reasonId,
  setReasonId,
}: QuizProps) {
  const initialStateRessorts: Ressort[] = [];
  const [ressorts, setRessorts]: [
    Ressort[],
    Dispatch<SetStateAction<Ressort[]>>,
  ] = useState(initialStateRessorts);
  const initialStateObjects: VisualisationObject[] = [];
  const [objects, setObjects]: [
    VisualisationObject[],
    Dispatch<SetStateAction<VisualisationObject[]>>,
  ] = useState(initialStateObjects);
  const initialStateReasons: Reason[] = [];
  const [reasons, setReasons]: [Reason[], Dispatch<SetStateAction<Reason[]>>] =
    useState(initialStateReasons);

  useEffect(() => {
    const getData = async () => {
      setRessorts(await findAllRessorts());
      setObjects((await findAllObjects()).sort((a, b) => a.order - b.order));
      setReasons((await findAllReasons()).sort((a, b) => a.order - b.order));
    };
    getData();
  }, []);

  const submitSelection = () => {
    trackSelection(ressortId, objectId, reasonId);
  };

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
      <BetaBanner />
      <Question
        heading={"In welchem Ressort arbeiten Sie?"}
        description={`Diese Information benötigen wir, da Sie nur auf die Werkzeuge aus Ihrem Haus zugreifen können.`}
        select={{
          name: "ressort",
          label: "Ressort",
          value: ressortId,
          onChange: setRessortId,
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
          value: objectId,
          onChange: setObjectId,
          options: mapToOptions(objects),
        }}
      />
      <Question
        heading={"Was möchten Sie mit der Visualisierung erreichen?"}
        description={`Bei mehreren Gründen nennen Sie uns den wichtigsten.`}
        select={{
          name: "reason",
          label: "Grund der Visualisierung",
          value: reasonId,
          onChange: setReasonId,
          options: mapToOptions(reasons),
        }}
      />
      <Container paddingTop="48" paddingBottom="48">
        <ButtonContainer>
          <Button
            text={"Werkzeug suchen"}
            size={"large"}
            href={PATH_RESULT}
            id={"quiz-find-tool"}
            onClickCallback={submitSelection}
          />
        </ButtonContainer>
      </Container>
    </>
  );
}

export default Quiz;
