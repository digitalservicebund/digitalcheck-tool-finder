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
            text: "Es fehlt ein Werkzeug? Sie haben allgemeine Fragen oder Anmerkungen?",
          }}
          content={{
            markdown: `Dieser Dienst ist im Aufbau. Kontaktieren Sie uns über digitalcheck@digitalservice.bund.de oder  01 51/40 76 78 39, wenn Ihnen etwas fehlt, oder etwas nicht funktioniert. Ihr Feedback trägt dazu bei, Informationen und Gestaltung der Webseite für alle Nutzenden zu verbessern.`,
          }}
        ></Box>
                <Box
          heading={{
            tagName: "h2",
            look: "ds-label-01-bold",
            text: "Wir suchen Gesprächspartner!",
          }}
          content={{
            markdown: `Um diese Seite weiterzuentwickeln, suchen wir nach Personen, die uns in einem 45-minütigen Gespräch Feedback geben. Schreiben Sie uns gerne eine E-Mail und wir melden uns bei Ihnen: digitalcheck@digitalservice.bund.de`,
          }}
        ></Box>
      </Container>
    </Background>
  );
}
