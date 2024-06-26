import { Nunito } from "next/font/google";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Ads from "@/components/Ads";
import Prices from "@/components/Prices";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TripPlanner from "@/components/TripPlanner";
import Head from "next/head";
import Demo from "@/components/Demo";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TripPlanss - Plan a trip with multiple destinations</title>
      </Head>
      <main
        className={`${nunito.className} flex flex-col min-h-screen mx-auto`}
      >
        <Navbar />
        <Main />
        <Ads />
        <Demo />
        <TripPlanner />
        <Prices />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
