import Header from "./components/PageHeader";
import Footer from "./components/Footer";
import FeedbackBanner from "./components/FeedbackBanner";

function App() {
  return (
    <>
      <body className="flex flex-col min-h-screen">
        {/*<CookieBanner hasTrackingConsent={hasTrackingConsent} content={cookieBannerContent} ip={ip} />*/}
        <Header />
        <main className="flex-grow">
          {/*<Outlet />*/}
          <FeedbackBanner />
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App;
