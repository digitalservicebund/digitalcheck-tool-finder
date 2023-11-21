import Container from "../components/Container";
import Background from "../components/Background";
import Header from "../components/Header";
import Box from "../components/Box";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import RichText from "../components/RichText";

function Quiz() {
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
      <Container paddingTop="48" paddingBottom="48">
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "In welchem Ressort arbeiten Sie?",
          }}
          content={{
            markdown: `...`,
          }}
        ></Box>
      </Container>
      <Container paddingTop="0" paddingBottom="48">
        <ButtonContainer>
          <Button
            text={"Werkzeug suchen"}
            size={"large"}
            href={"werkzeugfinder/ergebnis"}
          />
        </ButtonContainer>
      </Container>
    </>
  );
}

export default Quiz;
