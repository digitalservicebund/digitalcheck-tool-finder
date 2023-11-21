import { Routes, Route } from "react-router-dom";

import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import FeedbackBanner from "./components/FeedbackBanner";
import Breadcrumbs from "./components/Breadcrumbs";

import Info from "./routes/Info";
import Quiz from "./routes/Quiz";
import Result from "./routes/Result";

function App() {
  return (
    <body className="flex flex-col min-h-screen">
      {/*<CookieBanner hasTrackingConsent={hasTrackingConsent} content={cookieBannerContent} ip={ip} />*/}
      <PageHeader />
      <Breadcrumbs
        breadcrumbs={[
          { url: "/", title: "Visualisieren im Digitalcheck" },
          { url: "/", title: "Werkzeugfinder für Visualisierungen" },
          { url: "/", title: "Empfohlene Werkzeuge" },
        ]}
      />
      <main className="flex-grow">
        <Routes>
          <Route path={""} element={<Info />} />
          <Route path={"werkzeugfinder"} element={<Quiz />} />
          <Route path={"werkzeugfinder/ergebnis"} element={<Result />} />
        </Routes>
        <FeedbackBanner />
      </main>
      <Footer />
    </body>
  );
}

export default App;
