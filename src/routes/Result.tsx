import Container from "../components/Container";
import Background from "../components/Background";
import Header from "../components/Header";

function Result() {
  return (
    <>
      <Background backgroundColor="blue" paddingTop="48" paddingBottom="48">
        <Container paddingTop="0" paddingBottom="0">
          <Header
            heading={{
              tagName: "h1",
              look: "ds-heading-01-reg",
              text: "Im BMI nutzbar",
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
