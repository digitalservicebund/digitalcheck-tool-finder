import Container from "./Container";
import RichText from "./RichText";
import Background from "./Background";

const BetaBanner = () => {
  return (
    <Background backgroundColor="yellow" paddingTop="16" paddingBottom="16">
      <Container paddingTop="0" paddingBottom="0">
        <RichText
          markdown={`Der Werkzeugfinder befindet sich noch im Aufbau. Die Funktionalität kann zeitweise eingeschränkt sein.`}
        />
      </Container>
    </Background>
  );
};

export default BetaBanner;
