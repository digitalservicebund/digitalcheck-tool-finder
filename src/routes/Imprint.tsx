import Background from "../components/Background";
import Box from "../components/Box";
import Container from "../components/Container";
import Header from "../components/Header";

function Imprint() {
  return (
    <>
      <Background backgroundColor="blue" paddingTop="48" paddingBottom="48">
        <Container paddingTop="0" paddingBottom="0">
          <Header
            heading={{
              tagName: "h1",
              look: "ds-heading-01-reg",
              text: "Impressum",
            }}
          ></Header>
        </Container>
      </Background>
      <Container paddingTop="48" paddingBottom="48">
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "Angaben gemäß § 5 TMG",
          }}
          content={{
            markdown: `
DigitalService GmbH des Bundes
Prinzessinnenstraße 8-14  
10969 Berlin  
Deutschland  
                        
Vertreten durch die Geschäftsführung:   
Frau Christina Lang  
Frau Anja Theurer  
            
Alleingesellschafterin: Bundesrepublik Deutschland, vertreten durch das 
Bundesministerium des Innern und für Heimat  

Handelsregister-Nummer: HRB 212879 B  
Registergericht: Berlin Charlottenburg  
Umsatzsteueridentifikationsnummer: DE327075535  
            `,
          }}
        ></Box>
        <div className={"pb-48"}></div>
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "Kontakt",
          }}
          content={{
            markdown: `E-Mail: digitalcheck@digitalservice.bund.de`,
          }}
        ></Box>
        <div className={"pb-48"}></div>
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "Informationspflichten gemäß Art. 14 ODR-VO, § 36 VSBG",
          }}
          content={{
            markdown: `
Die Europäische Kommission stellt eine Plattform zur 
Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.

Im Falle von Problemen bitten wir unsere Nutzer:innen, sich über die 
angegebenen Kontaktdaten direkt an uns zu wenden.

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren 
vor einer Verbraucherschlichtungsstelle teilzunehmen.
            `,
          }}
        ></Box>
        <div className={"pb-48"}></div>
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "Haftung für Inhalte",
          }}
          content={{
            markdown: `
Als Diensteanbieter im Sinne von § 2 Nr. 1 TMG sind wir gemäß § 7 Abs. 1 TMG 
für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
Wir sind nach §§ 8 bis 10 TMG jedoch nicht verpflichtet, übermittelte oder gespeicherte 
fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
rechtswidrige Tätigkeit hinweisen.

Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach 
den allgemeinen Gesetzen bleiben hiervon unberührt. Eine dahingehende Haftung ist 
jedoch erst ab dem Zeitpunkt möglich, in dem wir Kenntnis von einer konkreten 
Rechtsverletzung erlangen. Sollten solche Rechtsverletzungen bekannt werden, 
werden wir die entsprechenden Inhalte umgehend entfernen.
            `,
          }}
        ></Box>
        <div className={"pb-48"}></div>
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "Haftung für Verweise und Links",
          }}
          content={{
            markdown: `
Unser Angebot enthält Links zu externen Websites Dritter, 
auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese 
fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
Verlinkung nicht erkennbar.

Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne 
konkrete Anhaltspunkte einer Rechtsverletzung nicht mit zumutbarem Aufwand möglich. 
Sollten Rechtsverletzungen auf verlinkten, externen Seiten bekannt werden, 
werden wir die entsprechenden Links umgehend entfernen.
            `,
          }}
        ></Box>
        <div className={"pb-48"}></div>
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "Urheberrecht",
          }}
          content={{
            markdown: `
Die durch uns erstellten Inhalte und Werke auf diesen Seiten unterliegen 
dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung 
und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
der schriftlichen Zustimmung der jeweiligen Autor:in bzw. Ersteller:in. 
Downloads und Kopien dieser Seite sind nur für den privaten, nicht 
kommerziellen Gebrauch gestattet.
            
Soweit die Inhalte auf dieser Seite nicht von uns erstellt wurden, werden die
Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
gekennzeichnet. Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, 
bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
werden wir derartige Inhalte umgehend entfernen.
            `,
          }}
        ></Box>
        <div className={"pb-48"}></div>
        <Box
          heading={{
            tagName: "h2",
            look: "ds-heading-02-reg",
            text: "Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV",
          }}
          content={{
            markdown: `DigitalService GmbH des Bundes  
Frau Christina Lang  
Prinzessinnenstraße 8-14  
10969 Berlin
             `,
          }}
        ></Box>
      </Container>
    </>
  );
}

export default Imprint;
