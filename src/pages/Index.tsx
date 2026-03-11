import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Training from "@/components/Training";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>Alliance Aesthetic - medycyna estetyczna i makijaż permanentny</title>
        <meta
          name="description"
          content="Subtelna estetyka, widoczne efekty. PMU brwi i ust, modelowanie ust, biostymulatory, BTX, Morpheus8 i mezoterapia w Gdańsku."
        />
        <meta
          name="keywords"
          content="medycyna estetyczna, makijaż permanentny, modelowanie ust, biostymulatory, Morpheus8, mezoterapia, Alliance Aesthetic"
        />
        <meta
          property="og:title"
          content="Alliance Aesthetic - subtelna estetyka, widoczne efekty"
        />
        <meta
          property="og:description"
          content="Medycyna estetyczna i PMU w dopracowanym, kameralnym klimacie. Zarezerwuj wizytę w Booksy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <link rel="canonical" href="https://allianceaesthetic.pl" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        <main>
          <Hero />
          <WhyUs />
          <Services />
          <Pricing />
          <About />
          <Training />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
