import Container from "../components/Container";
import Background from "../components/Background";
import Header from "../components/Header";
import { z } from "zod";
import ButtonContainer from "../components/ButtonContainer";
import Button from "../components/Button";
import { PATH_QUIZ } from "./index";
import RichText from "../components/RichText";
import Box from "../components/Box";

export const ResultPropsSchema = z.object({
  ressort: z.string(),
  object: z.string(),
  reason: z.string(),
});

export type ResultProps = z.infer<typeof ResultPropsSchema>;

function Result({ ressort, object, reason }: ResultProps) {
  return (
    <>
      <Background backgroundColor="blue" paddingTop="48" paddingBottom="48">
        <Container paddingTop="0" paddingBottom="0">
          <Header
            heading={{
              tagName: "h1",
              look: "ds-heading-01-reg",
              text: `Empfohlenes Werkzeug`,
            }}
            content={{
              markdown: `Die Empfehlung erfolgt nach Ihren getätigten Eingaben.`,
            }}
          ></Header>
        </Container>
      </Background>
      <Container paddingTop="48" paddingBottom="0">
        <Box
          heading={{
            tagName: "h1",
            look: "ds-heading-02-reg",
            text: `Achtung`,
          }}
          content={{
            markdown: `
Diese Seite befindet sich noch in der Entwicklung. Bald können Sie hier Werkzeuge sehen, 
die wir Ihnen anhand der getätigten Eingaben empfehlen können.`,
          }}
        ></Box>
      </Container>
      <Container paddingTop="48" paddingBottom="0">
        <RichText
          markdown={`Ressort: **${ressort}** 
        | Object der Darstellung: **${object}** 
        | Grund der Visualisierung: **${reason}**`}
        />
      </Container>
      <Container paddingTop="10" paddingBottom="48">
        <ButtonContainer>
          <Button
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

export default Result;
