import Container from "../components/Container";
import Background from "../components/Background";
import Header from "../components/Header";
import { z } from "zod";

export const ResultPropsSchema = z.object({
  ressort: z.string(),
});

type ResultProps = z.infer<typeof ResultPropsSchema>;

function Result({ ressort }: ResultProps) {
  return (
    <>
      <Background backgroundColor="blue" paddingTop="48" paddingBottom="48">
        <Container paddingTop="0" paddingBottom="0">
          <Header
            heading={{
              tagName: "h1",
              look: "ds-heading-01-reg",
              text: `Im ${ressort} nutzbar`,
            }}
            content={{
              markdown: `Diese Werkzeuge sind im BMI verfügbar. Die Empfehlung erfolgt nach Ihren getätigten Eingaben.`,
            }}
          ></Header>
        </Container>
      </Background>
    </>
  );
}

export default Result;
