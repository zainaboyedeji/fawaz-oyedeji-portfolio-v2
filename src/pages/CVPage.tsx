import { Link } from "react-router-dom";

function CVPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mt-28 h-screen">
        <div className="w-full md:w-3/5 flex flex-col justify-center text-sm md:text-base overflow-y-auto mt-28">
          <div>
            <h6 className="mb-5 text-3xl">Education</h6>
            <p>
              2023, Photojournalism and Documentary Photography, Market Photo
              Workshop, Newtown, Johannesburg.
            </p>
            <p>
              2021, Bachelor of Arts & Education, Specialisation: History
              Education, University of Lagos, Nigeria
            </p>
            <p>
              2017, National Diploma, Specialisation: Mass Communication, Yaba
              College of Technology, Nigeria
            </p>
          </div>

          <div className="mt-5">
            <h6 className="mb-5 text-3xl">Photography Grants</h6>
            <p>2023, Prince Claus Seed Awards - Recipient</p>
            <p>2021, Daniele Tamagni Grant — Recipient</p>
            <p>
              2020, Bronx Documentary Center/Darryl Chappell Grant — Recipient
            </p>
            <p>
              2020, Prince Claus/Open Society Foundation Mobility Fund -
              Recipient
            </p>
            <p>2019, W. Eugene Smith Memorial Fund Student Grant — Recipient</p>
          </div>

          <div className="mt-5">
            <h6 className="mb-5 text-3xl">Commissions/Publications</h6>
            <p>
              2023, Photo Reportage in Maiduguri - Arete / UN World Food
              Programme
            </p>
            <p>
              2021, Gun for Hire: Nigeria security fears spark boom in private
              protection - Financial Times.
            </p>
            <p>
              2020, #EndSARS is a rare moment of class solidarity in Nigeria -
              Sahelien
            </p>
            <p>2020, Photo Narration in Oyo - ICLEI Africa’s RISE Africa</p>
            <p>
              2020, Photo Reportage in Lagos - Coffey. International
              Development, Ltd
            </p>
            <p>2020, Yours In Arms - No Wahala Magazine</p>
            <p>2024, Photo Reportage in Lagos - Agence France-Presse (AFP)</p>
            <p>
              2024, Revisit: New Culture Studios in Oyo - The Architectural
              Review
            </p>
          </div>

          <div className="mt-5">
            <h6 className="mb-5 text-3xl">Group Exhibitions</h6>
            <p>2023, StoryMi - Naija In Lights, Lagos, Nigeria</p>
            <p>2022, Photoville, New York.</p>
            <p>
              2022, World Press/Everyday Projects Exhibition, Oldenburg, Germany
            </p>
            <p>2021, HPR 2022 Public Space Exhibition, Hamburg, Germany</p>
            <p>2020, Hidden Flows Exhibition by ICLEI Africa</p>
            <p>
              2019, Kigali Centre For Photography/VII Exhibition, Kigali, Rwanda
            </p>
            <p>
              2018, African Artist’s Foundation - Canon Alumni Exhibition,
              Lagos, Nigeria
            </p>
          </div>

          <Link to="/" className="mt-5 mb-5 font-bold underline text-xl">
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}

export default CVPage;
