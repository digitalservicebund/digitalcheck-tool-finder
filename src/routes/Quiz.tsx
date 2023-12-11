import Container from "../components/Container";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";

import { PATH_RESULT } from "./";
import Question from "../components/Question";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";
import { trackSelection } from "../services/tracking";
import {
  findAllObjects,
  findAllReasons,
  findAllRessorts,
} from "../persistance/repository";
import { Ressort } from "../models/Ressort";
import { VisualisationObject } from "../models/VisualisationObject";
import { Reason } from "../models/Reason";
import { Entity } from "../models/Entity";
import BetaBanner from "../components/BetaBanner";
import { OptionsProps } from "../components/Select";

export const QuizPropsSchema = z.object({
  ressort: z.custom<Ressort>(),
  setRessort: z.custom<Dispatch<SetStateAction<Ressort>>>(),
  object: z.custom<VisualisationObject>(),
  setObject: z.custom<Dispatch<SetStateAction<VisualisationObject>>>(),
  reason: z.custom<Reason>(),
  setReason: z.custom<Dispatch<SetStateAction<Reason>>>(),
});

export type QuizProps = z.infer<typeof QuizPropsSchema>;

function mapToOptions(entities: Entity[]): OptionsProps {
  return entities.map((element) => {
    return {
      value: element.id,
      text: element.name,
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
  const ressorts: Ressort[] = findAllRessorts();
  const objects: VisualisationObject[] = findAllObjects();
  const reasons: Reason[] = findAllReasons();

  const submitSelection = () => {
    trackSelection(ressort, object, reason);
  };

  const onChangeRessort = (ressortId: string) => {
    const selectedRessort = ressorts.find((r) => r.id === ressortId);
    if (!selectedRessort) {
      throw new Error("Could not find ressort " + ressortId);
    }
    setRessort(selectedRessort);
  };
  const onChangeObject = (objectId: string) => {
    const selectedObject = objects.find((o) => o.id === objectId);
    if (!selectedObject) {
      throw new Error("Could not find object " + objectId);
    }
    setObject(selectedObject);
  };
  const onChangeReason = (reasonId: string) => {
    const selectedReason = reasons.find((r) => r.id === reasonId);
    if (!selectedReason) {
      throw new Error("Could not find reason " + reasonId);
    }
    setReason(selectedReason);
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
          value: ressort.id,
          onChange: onChangeRessort,
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
          value: object.id,
          onChange: onChangeObject,
          options: mapToOptions(objects),
        }}
      />
      <Question
        heading={"Was möchten Sie mit der Visualisierung erreichen?"}
        description={`Bei mehreren Gründen nennen Sie uns den wichtigsten.`}
        select={{
          name: "reason",
          label: "Grund der Visualisierung",
          value: reason.id,
          onChange: onChangeReason,
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
