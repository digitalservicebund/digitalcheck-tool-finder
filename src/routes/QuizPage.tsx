import Background from "../components/Background";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import Container from "../components/Container";
import Header from "../components/Header";

import { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import BetaBanner from "../components/BetaBanner";
import Question from "../components/Question";
import { RadioOptionsProps } from "../components/RadioGroup";
import { SelectOptionsProps } from "../components/Select";
import { Entity } from "../models/Entity";
import { Reason } from "../models/Reason";
import { Ressort } from "../models/Ressort";
import { VisualisationObject } from "../models/VisualisationObject";
import {
  getAllObjects,
  getAllReasons,
  getAllRessorts,
} from "../persistance/repository";
import { trackSelection } from "../services/tracking";
import { PATH_RESULT } from "./";

export const QuizPagePropsSchema = z.object({
  ressort: z.custom<Ressort>(),
  setRessort: z.custom<Dispatch<SetStateAction<Ressort>>>(),
  object: z.custom<VisualisationObject>(),
  setObject: z.custom<Dispatch<SetStateAction<VisualisationObject>>>(),
  reason: z.custom<Reason>(),
  setReason: z.custom<Dispatch<SetStateAction<Reason>>>(),
});

export type QuizPageProps = z.infer<typeof QuizPagePropsSchema>;

function mapToSelectOptions(entities: Entity[]): SelectOptionsProps {
  return entities.map((entity) => {
    return {
      value: entity.id,
      text: entity.name,
    };
  });
}

function mapToRadioOptions<Type extends VisualisationObject | Reason>(
  entities: Type[],
): RadioOptionsProps {
  return entities.map((entity) => {
    const option = {
      value: entity.id,
      text: entity.name,
    };
    if (entity.description) {
      return {
        ...option,
        subText: entity.description,
      };
    }
    return option;
  });
}

function onChangeHandler<Type extends Entity>(
  selectedEntityId: string,
  setEntity: Dispatch<SetStateAction<Type>>,
  allEntities: Type[],
  defaultEntity: Type,
) {
  if (!selectedEntityId) {
    setEntity(defaultEntity);
    return;
  }
  const selectedEntity = allEntities.find((e) => e.id === selectedEntityId);
  if (!selectedEntity) {
    throw new Error("Could not find entity " + selectedEntityId);
  }
  setEntity(selectedEntity);
}

function QuizPage({
  ressort,
  setRessort,
  object,
  setObject,
  reason,
  setReason,
}: QuizPageProps) {
  const ressorts: Ressort[] = getAllRessorts();
  const objects: VisualisationObject[] = getAllObjects();
  const reasons: Reason[] = getAllReasons();

  const submitSelection = () => {
    trackSelection(ressort, object, reason);
  };

  const onChangeRessort = (ressortId: string) => {
    onChangeHandler(ressortId, setRessort, ressorts, new Ressort());
  };
  const onChangeObject = (objectId: string) => {
    onChangeHandler(objectId, setObject, objects, new VisualisationObject());
  };
  const onChangeReason = (reasonId: string) => {
    onChangeHandler(reasonId, setReason, reasons, new Reason());
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
      <div className={"pt-48 max-w-2xl m-auto"}>
        <Question
          heading={"In welchem Ressort arbeiten Sie?"}
          label={"1 von 3"}
          description={`Diese Information benötigen wir, da Sie nur auf die Werkzeuge aus Ihrem Haus zugreifen können.`}
          select={{
            name: "ressort",
            label: "Ressort",
            value: ressort.id,
            onChange: onChangeRessort,
            options: mapToSelectOptions(ressorts),
          }}
        />
        <Question
          heading={"Was möchten Sie darstellen?"}
          label={"2 von 3"}
          description={`Durch Ihre Antwort können wir die Art der Darstellung bestimmen. Diese gibt uns Rückschluss 
        auf das Werkzeug, in dem diese am Besten zu erstellen ist.`}
          radio={{
            name: "object",
            value: object.id,
            onChange: onChangeObject,
            options: mapToRadioOptions(objects),
          }}
        />
        <Question
          heading={"Was möchten Sie mit der Visualisierung erreichen?"}
          label={"3 von 3"}
          description={`Bei mehreren Gründen nennen Sie uns den wichtigsten.`}
          radio={{
            name: "reason",
            value: reason.id,
            onChange: onChangeReason,
            options: mapToRadioOptions(reasons),
          }}
        />
        <Container paddingTop="0" paddingBottom="48">
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
      </div>
    </>
  );
}

export default QuizPage;
