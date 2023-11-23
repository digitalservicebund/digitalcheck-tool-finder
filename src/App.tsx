import { Routes, Route } from "react-router-dom";

import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import FeedbackBanner from "./components/FeedbackBanner";
import Breadcrumbs, { BreadcrumbsProps } from "./components/Breadcrumbs";

import Info from "./routes/Info";
import Quiz from "./routes/Quiz";
import Result from "./routes/Result";

import { PATH_INFO, PATH_QUIZ, PATH_RESULT } from "./routes";
import { useState } from "react";
import { z } from "zod";

export const RoutesPropsSchema = z.array(
  z.object({
    url: z.string(),
    title: z.string(),
    element: z.custom<JSX.Element>(),
  }),
);

export type RoutesProps = z.infer<typeof RoutesPropsSchema>;

function getBreadcrumbs(routes: RoutesProps): BreadcrumbsProps {
  return {
    breadcrumbs: routes.map((route) => {
      return { url: route.url, title: route.title };
    }),
  };
}

function App() {
  const [ressort, setRessort] = useState("");

  const routes: RoutesProps = [
    {
      url: PATH_INFO,
      title: "Visualisieren im Digitalcheck",
      element: <Info />,
    },
    {
      url: PATH_QUIZ,
      title: "Werkzeugfinder für Visualisierungen",
      element: <Quiz ressort={ressort} setRessort={setRessort} />,
    },
    {
      url: PATH_RESULT,
      title: "Empfohlene Werkzeuge",
      element: <Result ressort={ressort} />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/*<CookieBanner hasTrackingConsent={hasTrackingConsent} content={cookieBannerContent} ip={ip} />*/}
      <PageHeader />
      <Breadcrumbs {...getBreadcrumbs(routes)} />
      <main className="flex-grow">
        <Routes>
          {routes.map((route) => {
            return (
              <Route path={route.url} element={route.element} key={route.url} />
            );
          })}
        </Routes>
        <FeedbackBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
