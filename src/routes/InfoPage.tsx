import Background from "../components/Background";
import Box from "../components/Box";
import Container from "../components/Container";
import Header from "../components/Header";

import BetaBanner from "../components/BetaBanner";
import LinkListBox from "../components/LinkListBox";
import { PATH_QUIZ } from "./";

function InfoPage() {
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
          <div className={"pt-24"}></div>
          <LinkListBox
            identifier={"info-header-toc"}
            heading={{
              tagName: "h2",
              look: "ds-label-02-bold",
              text: "Inhalt",
            }}
            links={[
              { text: "In welchem Programm visualisieren?", url: "#" },
              { text: "Wobei helfen Ihnen Visualisierungen?", url: "#" },
            ]}
          />
        </Container>
      </Background>
      <BetaBanner />
      <Container paddingTop="48" paddingBottom="48">
        <Box
          identifier={"info-section-which-tool"}
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "In welchem Programm visualisieren?",
          }}
          content={{
            markdown: `Es existiert eine Vielzahl von Programmen, in denen Visualisierungen angefertigt werden können. 
            Je nach Detailgrad oder Verwendung kann sich die Auswahl dabei verändern. Zudem ist der Katalog an 
            verfügbaren Werkzeugen von Ressort zu Ressort unterschiedlich. Hier können Sie das Werkzeug finden, 
            das für die Visualisierung in Ihrem Regelungsvorhaben das richtige ist.`,
          }}
          buttons={[
            {
              id: "info-page-find-tool-button",
              text: "Werkzeug finden",
              href: PATH_QUIZ,
              size: "large",
            },
          ]}
        ></Box>
      </Container>
      <Container paddingTop="0" paddingBottom="48">
        <Box
          identifier={"info-section-why-visualisation"}
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "Wobei helfen Ihnen Visualisierungen?",
          }}
          content={{
            markdown: `Die Visualisierung hilft Ihnen, komplexe Sachverhalte zu strukturieren und dadurch schneller 
            und intuitiver erfassbar zu machen. 
- Beim Erstellen der Visualisierung setzen Sie sich bereits mit digitalen Möglichkeiten und neu 
entstehenden Lösungsräumen auseinander. 
- Digitale Möglichkeiten schaffen und erfordern andere Prozesse und Wirklogiken, die sich gut visuell abbilden 
lassen (z. B. Zusammenfassung von Schritten durch Automatisierung, Datenabgleich, Entscheidungslogiken). 
- Eine Visualisierung hilft Ihnen Logikbrüche, Medienbrüche, Inkonsistenzen, offene Verfahrensenden, 
Schleifen, uneinheitliche Rechtsbegriffe und mögliche zu vermeidende Schriftformerfordernisse zu erkennen.`,
          }}
        ></Box>
      </Container>
      <Container
        paddingTop="0"
        paddingBottom="48"
        additionalClassNames={"flex"}
      >
        <Box
          additionalClassNames={"pr-20"}
          heading={{
            tagName: "h3",
            look: "ds-heading-03-bold",
            text: "Die Darstellungen helfen auch bei Verständnis und Umsetzung im Vollzug",
          }}
          content={{
            markdown: `Personen, die Ihre Regelung digital umsetzen (z. B. Programmiererinnen und Programmierer), 
          denken in Prozessen, Strukturen, Systemen und Zusammenhängen. Mit einer Visualisierung können Sie 
          diesen beim Verstehen und Übersetzen Ihrer Regelung helfen und so eine bessere Umsetzung ermöglichen. 
          Darüber hinaus kann Ihre Visualisierung – schon einfache Scans oder Fotos von Skizzen – 
          Ihren Kolleginnen und Kollegen sowie dem NKR das Verständnis erleichtern.`,
          }}
        ></Box>
        <Background backgroundColor="midBlue" paddingTop="0" paddingBottom="0">
          <Box
            additionalClassNames={"p-20"}
            heading={{
              tagName: "h3",
              look: "ds-heading-03-bold",
              text: "Tipp: Schaffen Sie ein gemeinsames Verständnis",
            }}
            content={{
              markdown: `Tipp: Schaffen Sie ein gemeinsames Verständnis Visualisieren Sie gemeinsam mit 
          Kolleginnen und Kollegen aus Ihrem Referat, anderen Abteilungen, anderen Expertinnen und 
          Experten oder Akteuren des Vollzugs, um schnell ein gemeinsames Verständnis von der 
          Regelung und den Umsetzungsmöglichkeiten zu schaffen. Die Diskussion auf gleicher 
          Grundlage ist häufig ebenso wertvoll wie die entstandene Visualisierung selbst.`,
            }}
          ></Box>
        </Background>
      </Container>
    </>
  );
}

export default InfoPage;
