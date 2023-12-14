import { Route, Routes } from "react-router-dom";

import Breadcrumbs, { BreadcrumbsProps } from "./components/Breadcrumbs";
import FeedbackBanner from "./components/FeedbackBanner";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";

import Flowchart from "./routes/Flowchart";
import Imprint from "./routes/Imprint";
import InfoPage from "./routes/InfoPage";
import QuizPage, { QuizPageProps } from "./routes/QuizPage";
import ResultPage, { ResultPageProps } from "./routes/ResultPage";

import { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import ScrollToTop from "./components/ScrollToTop";
import { Reason } from "./models/Reason";
import { Ressort } from "./models/Ressort";
import { VisualisationObject } from "./models/VisualisationObject";
import {
  PATH_DECISIONTREE,
  PATH_DIAGRAM,
  PATH_FLOWCHART,
  PATH_IMPRINT,
  PATH_INFO,
  PATH_QUIZ,
  PATH_RESULT,
} from "./routes";
import DecisionTree from "./routes/DecisionTree";
import Diagram from "./routes/Diagram";
import useStorage from "./services/useStorage";

export const RoutesPropsSchema = z.array(
  z.object({
    url: z.string(),
    title: z.string(),
    parent: z.string().optional(),
    element: z.custom<JSX.Element>(),
  }),
);

export type RoutesProps = z.infer<typeof RoutesPropsSchema>;

function getBreadcrumbs(routes: RoutesProps): BreadcrumbsProps {
  return {
    breadcrumbs: routes.map((route) => {
      return { url: route.url, title: route.title, parent: route.parent };
    }),
  };
}

function App() {
  const [ressort, setRessort]: [Ressort, Dispatch<SetStateAction<Ressort>>] =
    useStorage("ressort", new Ressort());
  const [object, setObject]: [
    VisualisationObject,
    Dispatch<SetStateAction<VisualisationObject>>,
  ] = useStorage("object", new VisualisationObject());
  const [reason, setReason]: [Reason, Dispatch<SetStateAction<Reason>>] =
    useStorage("reason", new Reason());

  const quizProps: QuizPageProps = {
    ressort: ressort,
    setRessort: setRessort,
    object: object,
    setObject: setObject,
    reason: reason,
    setReason: setReason,
  };

  const resultProps: ResultPageProps = {
    ressort: ressort,
    object: object,
    reason: reason,
  };

  const routes: RoutesProps = [
    {
      url: PATH_INFO,
      title: "Startseite",
      element: <InfoPage />,
    },
    {
      url: PATH_QUIZ,
      title: "Werkzeugfinder für Visualisierungen",
      element: <QuizPage {...quizProps} />,
      parent: PATH_INFO,
    },
    {
      url: PATH_RESULT,
      title: "Empfohlenes Werkzeug",
      element: <ResultPage {...resultProps} />,
      parent: PATH_QUIZ,
    },
    {
      url: PATH_FLOWCHART,
      title: "Flussdiagramm Anleitung",
      element: <Flowchart />,
      parent: PATH_INFO,
    },
    {
      url: PATH_DIAGRAM,
      title: "Schaubild Anleitung",
      element: <Diagram />,
      parent: PATH_INFO,
    },
    {
      url: PATH_DECISIONTREE,
      title: "Entscheidungsbaum Anleitung",
      element: <DecisionTree />,
      parent: PATH_INFO,
    },
    {
      url: PATH_IMPRINT,
      title: "Impressum",
      element: <Imprint />,
      parent: PATH_INFO,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <PageHeader />
      <Breadcrumbs {...getBreadcrumbs(routes)} />
      <main className={"flex-grow flex flex-col"}>
        <div className={"flex-grow"}>
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  path={route.url}
                  element={route.element}
                  key={route.url}
                />
              );
            })}
          </Routes>
        </div>
        <FeedbackBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
