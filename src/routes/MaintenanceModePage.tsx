import Background from "../components/Background";
import Box from "../components/Box";
import Container from "../components/Container";
import Header from "../components/Header";

function MaintenanceModePage() {
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
          ></Header>
        </Container>
      </Background>
      <Container paddingTop="48" paddingBottom="48">
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "Diese Seite ist momentan nicht verfügbar",
          }}
          content={{
            markdown: `Der Werkzeugfinder für Visualisierungen ist momentan leider nicht verfügbar. Wir hoffen, diesen Service ab Januar 2024 wieder für Sie anbieten zu können.`,
          }}
        ></Box>
      </Container>
    </>
  );
}

export default MaintenanceModePage;
