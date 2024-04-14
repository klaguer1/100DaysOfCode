import arrow from "../assets/arrow.png";
import { FrontEnd } from "../data/skills";
import { BackEndAndCloud } from "../data/skills";

export default function () {
  return (
    <>
      <section className="text-center h-[100vh] relative" id="experience">
        <p>Explore My</p>
        <h1 className="font-semibold text-5xl">Experience/Skills</h1>
        <div className="section-container h-4/5">
          <div className="experience-details justify-center flex flex-col">
            <div className="flex my-32 gap-20 about-container justify-center text-center">
              <div className="details-container grid grid-cols-3 grid-flow-row items-center text-center p-5 bg-white rounded-3xl border-slate-700 border-solid border-2">
                <div className="w-full text-center col-span-3 mb-4">
                  <h2 className="text-2xl">Front End Skills </h2>
                </div>
                {FrontEnd.map((frontEndSkill, index) => (
                  <article key={index} className="mb-4 mx-4 text-center">
                    <img
                      className="mx-auto"
                      src={frontEndSkill.iconSrc}
                      alt={frontEndSkill.title}
                    />
                    <div className="mt-2 text-container">
                      <p>{frontEndSkill.title}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="details-container grid grid-cols-3 grid-flow-row items-center text-center p-5 bg-white rounded-3xl border-slate-700 border-solid border-2">
                <div className="w-full text-center col-span-3 mb-4">
                  <h2 className="text-2xl">Back End & Cloud Skills </h2>
                </div>
                {BackEndAndCloud.map((backEndSkill, index) => (
                  <article key={index} className="mb-4 mx-4 text-center">
                    <img
                      className="mx-auto"
                      src={backEndSkill.iconSrc}
                      alt={backEndSkill.title}
                    />
                    <div className="mt-2 text-container">
                      <p>{backEndSkill.title}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute right-0 bottom-10 h-8 w-8"
          src={arrow}
          alt="Arrow-to-scroll-icon"
          onClick={() => (location.href = "./#projects")}
        />
      </section>
    </>
  );
}
