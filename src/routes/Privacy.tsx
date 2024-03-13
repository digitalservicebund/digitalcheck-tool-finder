import Background from "../components/Background";
import Box from "../components/Box";
import Container from "../components/Container";
import Header from "../components/Header";
import useTitle from "../services/useTitle";

function Privacy() {
  useTitle("Datenschutzerklärung");

  return (
    <>
      <Background backgroundColor="blue" paddingTop="48" paddingBottom="48">
        <Container paddingTop="0" paddingBottom="0">
          <Header
            heading={{
              tagName: "h1",
              text: "Datenschutzerklärung",
            }}
          ></Header>
        </Container>
      </Background>
      <Container paddingTop="48" paddingBottom="48">
        <Box
          content={{
            markdown: `
`,
          }}
        ></Box>
      </Container>
    </>
  );
}

export default Privacy;
