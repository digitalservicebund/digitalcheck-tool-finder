import { Routes, Route } from "react-router-dom";

import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import FeedbackBanner from "./components/FeedbackBanner";
import Breadcrumbs from "./components/Breadcrumbs";

import Info from "./routes/Info";
import Quiz from "./routes/Quiz";
import Result from "./routes/Result";

import { PATH_INFO, PATH_QUIZ, PATH_RESULT } from "./routes";
import { useState } from "react";

function App() {
  const [ressort, setRessort] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/*<CookieBanner hasTrackingConsent={hasTrackingConsent} content={cookieBannerContent} ip={ip} />*/}
      <PageHeader />
      <Breadcrumbs
        breadcrumbs={[
          { url: PATH_INFO, title: "Visualisieren im Digitalcheck" },
          { url: PATH_QUIZ, title: "Werkzeugfinder für Visualisierungen" },
          { url: PATH_RESULT, title: "Empfohlene Werkzeuge" },
        ]}
      />
      <main className="flex-grow">
        <Routes>
          <Route path={PATH_INFO} element={<Info />} />
          <Route
            path={PATH_QUIZ}
            element={<Quiz ressort={ressort} setRessort={setRessort} />}
          />
          <Route path={PATH_RESULT} element={<Result ressort={ressort} />} />
        </Routes>
        <FeedbackBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
