import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/sidebar";
import Projects from "./pages/projects";
import Commissions from "./pages/commissions";
import ContactMe from "./pages/contact-me";
import AboutMe from "./pages/about-me";
import { Gallery } from "./components/gallery";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/scroll-to-top";
import LoadingSpinner from "./components/loading-spinner";
import CVPage from "./pages/cv-page";
import {
  attestationPhotosMetadata,
  gfhPhotosMetadata,
  hiddenflowsPhotosMetadata,
  homePhotosMetadata,
  mampPhotosMetadata,
  ncsiPhotosMetadata,
  nppPhotosMetadata,
  ottodailyPhotosMetadata,
  resalePhotosMetadata,
  tearSheetPhotosMetadata,
  yoursinarmsPhotosMetadata,
} from "./data";
import Multimedia from "./pages/multimedia";
import Footer from "./components/footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="w-full md:w-1/4">
          <SideBar />
        </div>
        <div className="flex flex-col w-full md:w-3/4 h-full">
          <ScrollToTop />
          <main className="flex flex-col flex-grow justify-between">
            <Routes>
              <Route
                path="/"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={homePhotosMetadata}
                      category="home"
                      alt="home"
                    />
                  </AnimatePresence>
                }
              />
              <Route
                path="/home"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={homePhotosMetadata}
                      category="home"
                      alt="Home"
                    />
                  </AnimatePresence>
                }
              />
              <Route path="/commissions" element={<Commissions />} />
              <Route
                path="/tearsheet"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={tearSheetPhotosMetadata}
                      category="ts"
                      alt="Tear Sheet"
                      title="Press news, articles, and client’s work."
                    />
                  </AnimatePresence>
                }
              />
              <Route path="/multimedia" element={<Multimedia />} />
              <Route
                path="/commissions/gun-for-hire"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={gfhPhotosMetadata}
                      title="Gun For Hire"
                      essay="Gun for hire: Nigeria security fears spark boom in private protection -Many guards for wealthy and middle-class people are hired police
In October 2021, I documented the private security landscape in Lagos for the Financial Times. The article sheds light on the prevalence of private security services in Nigeria, with an estimated 40% of the country's police officers working for these firms. The demand for such services has surged in response to the worsening security situation across the nation.
Here is the link to the article:Gun for hire."
                      category="gfh"
                      alt="Gun For Hire"
                      backButton
                    />
                  </AnimatePresence>
                }
              />
              <Route
                path="/commissions/new-culture-studios-ibadan"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={ncsiPhotosMetadata}
                      title="New Culture Studios Ibadan"
                      essay="Demas Nwoko’s ever‑evolving arts and culture centre in Ibadan, Nigeria. Photographs for the Architectural Review #February 2024 #repair issue.
The first parts of the complex were built in 1967 and remain in evolution today. In the 1980s, a golden generation of Nigerian writers – including Wole Soyinka, Chinua Achebe and Mabel Segun – would meet in its entrance hall. Today, Nwoko’s son Rufus lives in the former offices of his father’s arts practice, directing theatre shows that draw crowds far larger than the site‘s theatre was designed for.
Purchase Architectural Review February issue about Repairhere:or view online imageshere."
                      category="ncsi"
                      alt="New Culture Studios Ibadan"
                      backButton
                    />
                  </AnimatePresence>
                }
              />
              <Route
                path="/commissions/nigerian-policing-programme"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={nppPhotosMetadata}
                      title="Nigerian Policing Programme"
                      essay="I worked on an assignment for Tetra Tech International Development, contributing to the Nigerian Policing Programme. This program is designed to enhance the delivery of policing services in Nigeria, extending its impact beyond just the Nigerian Police Force. Our mission encompassed collaboration with a broad spectrum of institutions, administrative functions, community groups, and security actors who collectively shape the national security environment in Nigeria.
Learn more about the programme and its impact: Nigerian Policing Programme"
                      category="npp"
                      alt="Nigerian Policing Programme"
                      backButton
                    />
                  </AnimatePresence>
                }
              />
              <Route
                path="/commissions/hidden-flows"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={hiddenflowsPhotosMetadata}
                      title="Hidden Flows"
                      essay='Hidden Flows is an exhibition that aims to shed light on the often unseen dynamics of resources, infrastructure, and services in African cities. Through the lens of urban metabolism, we explore how resources flow within these cities, providing valuable insights for decision-makers and policy development. Unlike traditional research that relies on extensive quantitative data, we focus on the unique challenges faced in African contexts, where resources follow decentralized systems and involve informal networks.
The images featured in the exhibition have been captured under the commission from ICLEI Local Government For Sustainability.
To experience the "Hidden Flows" exhibition and gain a deeper understanding of the intricate resource dynamics in African cities, visit the following link: Hidden Flows Exhibition.'
                      category="hiddenflows"
                      alt="Hidden Flows"
                      backButton
                    />
                  </AnimatePresence>
                }
              />
              <Route path="/my-cv" element={<CVPage />} />
              <Route path="/contact-me" element={<ContactMe />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/projects/mo-advert-mo-power"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={mampPhotosMetadata}
                      title="Mo Advert Mo Power"
                      essay='Every four years, when elections are approaching, thousands and thousands of party-political posters start to invade our cityscape. This has become almost a campaign weapon for parties" rivalries over urban space and for politicians to demonstrate their power and demarcate their territories. It is a visual performance of power.
In this work, I delve into the role of political posters in everyday party politicking in Nigeria, where they have become an almost normal or naturalized habitual repertoire of political action.
Printing in Nigeria is a growing industry that is becoming increasingly important to political culture. It is worth millions, despite still using artisanal methods in most places.  Posters, banners, and billboards are never big enough for politicians to impregnate our minds with their electoral ambition. Campaign after campaign, the posters are twice as large, twice as tall, and always more dominant than the previous one.
The candidates want to convince voters that they would be the best choice to run their life, through portraits that mimic historical and reassuring political leaders, either smiling or with emotionless faces. For the few months of the campaign, they are everywhere, on every corner, every street or bridge, and major road. We, as citizens, experience the hyper-visibility of politics before the images tarnish and the promises fade.'
                      category="mamp"
                      alt="Mo Advert Mo Power"
                      backButton
                    />
                  </AnimatePresence>
                }
              />
              <Route
                path="/projects/attestation"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={attestationPhotosMetadata}
                      title="Attestation"
                      essay="‘Attestation’ reflects on the legacy of the #EndSARS movement, which emerged in 2020 as a response to years of political corruption, human rights violations, and brutality by the Nigerian Police, particularly the Special Anti-Robbery Squad (SARS). Young Nigerians, determined to reform the policing system, organized a series of peaceful nationwide protests, demanding change. Although the movement began with hope, it tragically descended into violence as security forces, primarily the police, used live ammunition and tear gas against protesters, resulting in at least 56 deaths, 12 of whom were killed on October 20, 2020, alone.
In an attempt to symbolize the passage of time, I revisited public spaces from pivotal moments of the #EndSARS demonstrations, juxtaposing them with present-day Lagos in 2024. Although this comparison barely reflects Nigeria’s ongoing fight for justice and better living standards, it offers a glimpse into the physical and symbolic changes, hinting at the layers of struggle and adaptation that have unfolded since the 2020 movement."
                      category="attestation"
                      alt="Attestation"
                      backButton
                    />
                  </AnimatePresence>
                }
              />
              <Route
                path="/projects/yours-in-arms"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={yoursinarmsPhotosMetadata}
                      title="Yours In Arms"
                      essay='"Yours In Arms" highlights how surrounding circumstances have shaped the day-to-day struggles and resilience of students preserving the history of a civilian-run infantry in Nigeria.
The establishment of paramilitary in institutions dates back to the Nigerian Second Republic[1976] under a militia regime headed by General Olusegun Obasanjo as a prospect to coax moreeducated fellows into the armed forces, soldiers would regularly come to inculcate military trainingin drills and parades, self-defense, physical fitness, first aid, citizenship, and leadership. Culturally,since its establishment, the program has been responsible for breeding a relative number ofcivilian youths dispersed throughout the nation, attached to a grass-rooted political scheme like this.
In modern times, the degree of pressure from being both CADET and STUDENT is considered anexhausting task.At Yaba College Of Technology alone, out of over 16,000 student enrolment,statistics show that approximately only 0.2% of this population usually makes the brave decisionand chose to combine this extracurricular activity with school work and personal life.
"2018"'
                      category="yia"
                      alt="Yours In Arms"
                      backButton
                    />
                  </AnimatePresence>
                }
              />
              <Route
                path="/projects/resale"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={resalePhotosMetadata}
                      title="Resale"
                      essay="It is common for Western charities to collect used clothes and ship them to Africa as aid. But these goods, discarded by well-intentioned Americans and Europeans, are rarely given as charity; instead, the donations are mostly sold to exporters who make huge profits selling second-hand goods in markets all over the continent. While some African countries have banned the importation of thrift clothes in a bid to protect local clothing and textile industries, in Nigeria the second-hand clothing industry – worth an estimated 148USD$ million – is booming.
Nigeria’s growing resale market can be traced back to the 1950s and 1960s. Then, Okrika, Rivers State, was the only port where used clothes from Europe could come through. Na mumu dey go boutique loosely translates to “only fools shop at boutiques.” These words are the chorus to a bustling market in Yaba, Lagos, Nigeria, sung by sellers of Okrika (second-hand clothing). Moreso, these words are a perception that much of the general populace holds regarding pre-owned pieces. Recent figures from the UN show that an estimated 80% of Africans wear secondhand clothing.
With the undeniable effects of fast fashion on global warming, it has become paramount to engage the masses about employing sustainable homegrown solutions to bypass the challenges of cloth production through a medium they can easily understand. It is my goal, not only to highlight the immense environmental complexities associated with the second-hand clothing industry but also the unique ecosystem involved with such a sector of the economy through the eyes of these traders."
                      category="resale"
                      alt="Resale"
                      backButton
                    />
                  </AnimatePresence>
                }
              />
              <Route
                path="/projects/otto-daily"
                element={
                  <AnimatePresence mode="wait">
                    <Gallery
                      photos={ottodailyPhotosMetadata}
                      title="Otto Daily"
                      essay='"Otto Daily" explores the complexities around how historical patterns like migration and religion, have reconfigured the identity of the indigenous Otto community in Lagos, Nigeria.
Otto is located in the south of Oyingbo, Lagos. Prior to the sixteenth century a number of Awori,the southernmost of the Yoruba speaking people dispersed from Isheri, a village twelve miles upthe Ogun River, seeking refuge from conflict. A group of them settled in modern-day Lagos. Therethey established three main settlements, Iddo, Lagos Island, and Otto. Overtime, Iddo and LagosIsland both expanded into a major international metropolitan trading centers.
However, the Otto settlement still retains much of its and communal identity and domestic form of trade. This settlement has a tradition of origin that has been kept alive till today. Although mainly occupied by Yorubas, their customs and traditions have been redefined with distinct customsthrough the influx of people from neighboring states and the Nigerian hinterland.
"2018"'
                      category="od"
                      alt="Otto Daily"
                      backButton
                    />
                  </AnimatePresence>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
