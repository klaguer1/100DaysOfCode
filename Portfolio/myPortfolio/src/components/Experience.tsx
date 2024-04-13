import lifestyle from "../assets/lifestyle.png";
import experience from "../assets/experience.png";
import arrow from "../assets/arrow.png";

export default function () {
  return (
    <>
      <section className="text-center relative" id="experience">
        <p>Explore My </p>
        <h1 className="font-semibold text-5xl">Experience/Skills</h1>
        <div className="section-container h-4/5">
          <div className="experience-details justify-center flex flex-col">
            <div className="flex my-32 gap-20 about-container justify-center text-center">
              <div className="details-container flex flex-col items-center text-center p-5 bg-white rounded-3xl border-slate-700 border-solid border-2"></div>
              <div className="details-container flex flex-col items-center text-center p-5 bg-white rounded-3xl border-slate-700 border-solid border-2"></div>
            </div>
          </div>
        </div>
        <img
          className="absolute right-0 bottom-10 h-12 w-12"
          src={arrow}
          alt="Arrow-to-scroll-icon"
          onClick={() => (location.href = "./#projects")}
        />
      </section>
    </>
  );
}
