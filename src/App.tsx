import { Routes, Route } from "react-router-dom";

import Header from "./components/PageHeader";
import Footer from "./components/Footer";
import FeedbackBanner from "./components/FeedbackBanner";

import Home from "./routes/Home";

function App() {
  return (
    <body className="flex flex-col min-h-screen">
      {/*<CookieBanner hasTrackingConsent={hasTrackingConsent} content={cookieBannerContent} ip={ip} />*/}
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path={""} element={<Home />} />
        </Routes>
        <FeedbackBanner />
      </main>
      <Footer />
    </body>
  );
}

export default App;
