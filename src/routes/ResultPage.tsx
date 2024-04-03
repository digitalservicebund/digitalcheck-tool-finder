import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import Container from "../components/Container";
import FeedbackForm from "../components/FeedbackForm";
import Image from "../components/Image";
import Recommendation from "../components/Recommendation";
import RichText from "../components/RichText";
import type { Reason } from "../models/Reason";
import type { Ressort } from "../models/Ressort";
import type { VisualisationObject } from "../models/VisualisationObject";
import { findResultByObjectAndRessort } from "../persistance/repository";
import { getImageUrl } from "../services/getImageUrl";
import useTitle from "../services/useTitle";
import { PATH_QUIZ } from "./";

export type ResultPageProps = {
  ressort: Ressort | null;
  object: VisualisationObject | null;
  reason: Reason | null;
};

function ResultPage({ ressort, object, reason }: ResultPageProps) {
  useTitle("Empfohlenes Werkzeug");
  const navigate = useNavigate();

  useEffect(() => {
    if (!ressort || !object || !reason) {
      navigate(PATH_QUIZ); // needs to be called in useEffect
    }
  });

  if (!ressort || !object || !reason) {
    return null;
  }

  const result = findResultByObjectAndRessort(object, ressort);

  return result ? (
    <>
      <Container paddingTop="48" paddingBottom="24">
        <div className={"border-8 rounded-lg border-[#EBF3FD]"}>
          <Image
            url={getImageUrl(result.cluster.img.src)}
            alternativeText={result.cluster.img.alt}
            data-testid="cluster-img"
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
            <div>
              {result.recommendations.map((recommendation) => (
                <Recommendation
                  key={recommendation.fidelity.id}
                  clusterName={result.cluster.name}
                  recommendation={recommendation}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container paddingTop="24" paddingBottom="0">
        <RichText
          markdown={`Ressort: **${ressort.name}** 
              | Objekt der Darstellung: **${object.name}** 
              | Grund der Visualisierung: **${reason.name}**`}
        />
      </Container>
      <Container paddingTop="8" paddingBottom="48">
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
      <FeedbackForm />
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
