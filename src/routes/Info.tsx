import Container from "../components/Container";
import Background from "../components/Background";
import Header from "../components/Header";
import Box from "../components/Box";

import { PATH_QUIZ } from "./";

function Info() {
  return (
    <>
      <Background backgroundColor="blue" paddingTop="48" paddingBottom="48">
        <Container paddingTop="0" paddingBottom="0">
          <Header
            heading={{
              tagName: "h1",
              look: "ds-heading-01-reg",
              text: "Visualisieren im Digitalcheck",
            }}
            content={{
              markdown: `Sie können die Auswirkungen der Regelung für Betroffene* und die Umsetzung durch die Akteure 
              des Vollzugs einfacher verstehen, wenn Sie den Vollzug skizzieren – Zusammenhänge werden sichtbar und 
              Sie können Möglichkeiten der Digitalisierung in der Umsetzung identifizieren. Beginnen Sie die Arbeit 
              mit der Visualisierung vor der ersten Textarbeit, um Aspekte der Digitaltauglichkeit frühzeitig zu 
              erkennen und bei der Verschriftlichung Ihrer Regelung berücksichtigen zu können.`,
            }}
          ></Header>
        </Container>
      </Background>
      <Container paddingTop="48" paddingBottom="48">
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "In welchem Programm visualisieren?",
          }}
          content={{
            markdown: `Es existieren eine Vielzahl von Programmen, in denen Visualisierungen angefertigt werden kann. 
            Je nach Detailgrad oder Verwendung kann sich die Auswahl dabei verändern. Zudem ist der Katalog an 
            verfügbaren Werkzeugen von Ressort zu Ressort unterschiedlich. Hier können Sie das Werkzeug finden, 
            das für die Visualisierung in Ihrem Regelungsvorhaben das richtige ist.`,
          }}
          buttons={[
            {
              text: "Werkzeug finden",
              href: PATH_QUIZ,
              size: "large",
            },
          ]}
        ></Box>
      </Container>
      <Container paddingTop="0" paddingBottom="48">
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "Wobei helfen Ihnen Visualisierungen?",
          }}
          content={{
            markdown: `Die Visualisierung hilft Ihnen, komplexe Sachverhalte zu strukturieren und dadurch schneller 
            und intuitiver erfassbar zu machen. Beim Erstellen der Visualisierung setzen Sie sich bereits mit 
            digitalen Möglichkeiten und neu entstehenden Lösungsräumen auseinander. Digitale Möglichkeiten 
            schaffen und erfordern andere Prozesse und Wirklogiken, die sich gut visuell abbilden 
            lassen (z. B. Zusammenfassung von Schritten durch Automatisierung, Datenabgleich, Entscheidungslogiken). 
            Eine Visualisierung hilft Ihnen Logikbrüche, Medienbrüche, Inkonsistenzen, offene Verfahrensenden, 
            Schleifen, uneinheitliche Rechtsbegriffe und mögliche zu vermeidende Schriftformerfordernisse zu erkennen.`,
          }}
        ></Box>
      </Container>
    </>
  );
}

export default Info;
