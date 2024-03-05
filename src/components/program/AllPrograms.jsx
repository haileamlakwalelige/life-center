import React from "react";
import backgroundStyle1 from "../../assets/kids.jpg";
import backgroundStyle2 from "../../assets/gal4.jpg";
import backgroundStyle3 from "../../assets/blog1.jpg";
import backgroundStyle4 from "../../assets/news.jpg";
import backgroundStyle5 from "../../assets/women.jpg";
import backgroundStyle6 from "../../assets/gal11.jpg";

const AllPrograms = () => {
  return (
    <div className="py-10 mt-20">
      <div className="flex justify-center items-center min-h-[40vh]">
        <p className="mont text-6xl font-extrabold text-slate-800">Programs</p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-[70vh]">
          <div className="flex flex-col justify-center items-start  gap-5 m-2 lg:m-10 px-2 lg:px-10">
            <p className="text-primary text-2xl font-semibold text-center">
              Orphans and Vulnerable Children (OVC) Support Program
            </p>
            <p className="text-start text-slate-800 ">
              "Bright Futures Initiative": This program encompasses a range of
              holistic support services tailored to the unique needs of orphaned
              and vulnerable children. <br /> <br /> Through the Bright Futures
              Initiative, Life Center provides comprehensive care packages that
              include access to education, health services, nutritional support,
              and mentorship. By addressing the multifaceted challenges faced by
              OVCs, the initiative aims to nurture their potential, instill
              confidence, and empower them to overcome adversity and thrive in
              their communities.
            </p>
          </div>
          <div>
            <img
              src={backgroundStyle1}
              alt=""
              className="lg:min-h-[70vh] min-w-full hidden md:flex"
            />
          </div>
        </div>

        {/* Element 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-[70vh]">
          <div>
            <img
              src={backgroundStyle2}
              alt=""
              className="lg:min-h-[70vh] min-w-full hidden md:flex"
            />
          </div>
          <div className="flex flex-col justify-center items-start  gap-5 m-2 lg:m-10 px-2 lg:px-10">
            <p className="text-primary text-2xl font-semibold text-center">
              Widows&apos; Empowerment Program
            </p>
            <p className="text-start text-slate-800 ">
              "Women's Resilience Network": The Women's Resilience Network is a
              cornerstone program of Life Center, dedicated to empowering widows
              with the skills, resources, and support networks needed to rebuild
              their lives and achieve economic independence. <br /> <br />{" "}
              Through a series of workshops, training sessions, and networking
              events, the program equips widows with practical skills in
              entrepreneurship, financial management, and vocational training.
              Additionally, the Women's Resilience Network provides access to
              microloan programs and business incubation support, enabling
              widows to start or expand their own businesses and secure a
              sustainable livelihood for themselves and their families.
            </p>
          </div>
        </div>

        {/* Element 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-[70vh]">
          <div className="flex flex-col justify-center items-start  gap-5 m-2 lg:m-10 px-2 lg:px-10">
            <p className="text-primary text-2xl font-semibold text-center">
              Community Development Initiatives
            </p>
            <p className="text-start text-slate-800 ">
              "Prosperity Partnerships": Life Center's Community Development
              Initiatives are grounded in the principle of collective action and
              collaboration. Through Prosperity Partnerships, the organization
              works hand in hand with local businesses, government agencies, and
              community leaders to implement a wide range of projects aimed at
              enhancing the socio-economic fabric of the communities it serves.{" "}
              <br />
              <br /> These initiatives may include infrastructure development
              projects, job training programs, microenterprise opportunities,
              and capacity-building initiatives. By fostering partnerships and
              leveraging resources, Prosperity Partnerships seek to catalyze
              sustainable development, promote inclusive growth, and improve the
              overall quality of life for residents in target areas.
            </p>
          </div>
          <div>
            <img
              src={backgroundStyle3}
              alt=""
              className="lg:min-h-[70vh] min-w-full hidden md:flex"
            />
          </div>
        </div>

        {/* Element 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-[70vh]">
          <div>
            <img
              src={backgroundStyle4}
              alt=""
              className="lg:min-h-[70vh] min-w-full hidden md:flex"
            />
          </div>
          <div className="flex flex-col justify-center items-start  gap-5 m-2 lg:m-10 px-2 lg:px-10">
            <p className="text-primary text-2xl font-semibold text-center">
              Education Enhancement Program
            </p>
            <p className="text-start text-slate-800 ">
              "Scholar Success Initiative": The Scholar Success Initiative is a
              comprehensive educational support program designed to empower
              disadvantaged youth with the tools, resources, and opportunities
              needed to excel academically and realize their full potential.
              <br />
              <br /> Through the Scholar Success Initiative, Life Center
              provides a range of services, including scholarships, tutoring
              programs, extracurricular activities, and educational enrichment
              opportunities. By addressing barriers to education and promoting
              academic excellence, the initiative aims to equip students with
              the knowledge, skills, and confidence they need to succeed in
              school and beyond.
            </p>
          </div>
        </div>

        {/* Element 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-[70vh]">
          <div className="flex flex-col justify-center items-start  gap-5 m-2 lg:m-10 px-2 lg:px-10">
            <p className="text-primary text-2xl font-semibold text-center">
              Psychological Support Services
            </p>
            <p className="text-start text-slate-800 ">
              "Healing Hearts Program": The Healing Hearts Program is a
              compassionate and trauma-informed initiative aimed at providing
              emotional support, counseling, and psychosocial services to
              individuals and families affected by trauma, loss, or adversity.{" "}
              <br />
              <br /> Through the Healing Hearts Program, Life Center offers a
              safe and supportive environment where individuals can access a
              range of therapeutic interventions, including individual
              counseling sessions, group therapy, art therapy workshops, and
              mindfulness exercises. By promoting healing, resilience, and
              emotional well-being, the program empowers participants to cope
              with life's challenges, build meaningful connections, and navigate
              their journey towards healing and recovery
            </p>
          </div>
          <div>
            <img
              src={backgroundStyle5}
              alt=""
              className="lg:min-h-[70vh] min-w-full hidden md:flex"
            />
          </div>
        </div>

        {/* Element 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-[70vh]">
          <div>
            <img
              src={backgroundStyle6}
              alt=""
              className="lg:min-h-[70vh] min-w-full hidden md:flex"
            />
          </div>
          <div className="flex flex-col justify-center items-start  gap-5 m-2 lg:m-10 px-2 lg:px-10">
            <p className="text-primary text-2xl font-semibold text-center">
              Livelihood Development Projects
            </p>
            <p className="text-start text-slate-800 ">
              "Entrepreneurial Empowerment Initiative": The Entrepreneurial
              Empowerment Initiative is a dynamic and innovative program aimed
              at fostering economic empowerment, self-reliance, and
              entrepreneurship among marginalized individuals and communities.
              Through the initiative, Life Center provides a comprehensive suite
              of support services, including business skills training, access to
              microfinance loans, market access programs, and business
              incubation support. <br />
              <br /> By equipping participants with the knowledge, resources,
              and mentorship needed to start or expand their own businesses, the
              initiative empowers individuals to generate sustainable income,
              create employment opportunities, and achieve financial
              independence. Through the Entrepreneurial Empowerment Initiative,
              Life Center is helping to unlock the potential of entrepreneurs,
              drive economic growth, and create pathways out of poverty for
              individuals and communities across Ethiopia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPrograms;
