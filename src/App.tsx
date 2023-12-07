import { Routes, Route } from "react-router-dom";

import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import FeedbackBanner from "./components/FeedbackBanner";
import Breadcrumbs, { BreadcrumbsProps } from "./components/Breadcrumbs";

import Info from "./routes/Info";
import Quiz, { QuizProps } from "./routes/Quiz";
import Result, { ResultProps } from "./routes/Result";
import Imprint from "./routes/Imprint";
import Flowchart from "./routes/Flowchart";

import {
  PATH_FLOWCHART,
  PATH_IMPRINT,
  PATH_INFO,
  PATH_QUIZ,
  PATH_RESULT,
} from "./routes";
import { z } from "zod";
import useStorage from "./services/useStorage";
import { Dispatch, SetStateAction } from "react";

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
  const [ressortId, setRessortId]: [string, Dispatch<SetStateAction<string>>] =
    useStorage("ressort", "");
  const [objectId, setObjectId]: [string, Dispatch<SetStateAction<string>>] =
    useStorage("object", "");
  const [reasonId, setReasonId]: [string, Dispatch<SetStateAction<string>>] =
    useStorage("reason", "");

  const quizProps: QuizProps = {
    ressortId: ressortId,
    setRessortId: setRessortId,
    objectId: objectId,
    setObjectId: setObjectId,
    reasonId: reasonId,
    setReasonId: setReasonId,
  };

  const resultProps: ResultProps = {
    ressortId: ressortId,
    objectId: objectId,
    reasonId: reasonId,
  };

  const routes: RoutesProps = [
    {
      url: PATH_INFO,
      title: "Startseite",
      element: <Info />,
    },
    {
      url: PATH_QUIZ,
      title: "Werkzeugfinder für Visualisierungen",
      element: <Quiz {...quizProps} />,
      parent: PATH_INFO,
    },
    {
      url: PATH_RESULT,
      title: "Empfohlenes Werkzeug",
      element: <Result {...resultProps} />,
      parent: PATH_QUIZ,
    },
    {
      url: PATH_FLOWCHART,
      title: "Flussdiagramm Anleitung",
      element: <Flowchart />,
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
