import Background from "./Background";
import Box from "./Box";
import Container from "./Container";

export default function FeedbackBanner() {
  return (
    <Background backgroundColor="midBlue" paddingTop="32" paddingBottom="40">
      <Container paddingTop="0" paddingBottom="0">
        <Box
          heading={{
            tagName: "h2",
            look: "ds-label-01-bold",
            text: "Haben Sie Fragen oder Anmerkungen?",
          }}
          content={{
            markdown: `Diese Seite ist im Aufbau. Kontaktieren Sie uns über digitalcheck@digitalservice.bund.de
              wenn Ihnen etwas fehlt, oder etwas nicht funktioniert. Ihr Feedback trägt dazu bei, 
              Informationen und Gestaltung der Webseite für alle Nutzenden zu verbessern.`,
          }}
        ></Box>
      </Container>
    </Background>
  );
}
