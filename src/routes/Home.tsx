import Container from "../components/Container";
import Background from "../components/Background";
import Header from "../components/Header";

function Home() {
  return (
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
  );
}

export default Home;
