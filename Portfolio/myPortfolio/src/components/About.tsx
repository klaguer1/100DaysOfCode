import lifestyle from "../assets/lifestyle.png";
import experience from "../assets/experience.png";
import arrow from "../assets/arrow.png";

export default function () {
  return (
    <>
      <section className="text-center h-[100vh] relative" id="about">
        <p>Get to Know More </p>
        <h1 className="font-semibold text-5xl">About Me</h1>
        <div className="section-container h-4/5">
          <div>
            <img></img>
          </div>
          <div className="about-details justify-center flex flex-col">
            <div className="flex my-32 gap-20 about-container justify-center text-center">
              <div className="details-container flex flex-col items-center text-center p-5 bg-white rounded-3xl border-slate-700 border-solid border-2">
                <img
                  className="w-24 h-24 mx-auto my-2"
                  src={experience}
                  alt="experience-icon"
                ></img>

                <h3 className="font-semibold">Experience</h3>
                <p className="pl-20 pr-20">
                  6+ Years <br />
                  Full Stack <br />
                  Developmenet
                </p>
              </div>
              <div className="details-container flex flex-col items-center text-center p-5 bg-white rounded-3xl border-slate-700 border-solid border-2">
                <img
                  className="w-24 h-24 my-2"
                  src={lifestyle}
                  alt="lifestyle-icon"
                />

                <h3 className="font-semibold">Hobbies</h3>
                <p className="pl-24 pr-24">
                  Anime <br />
                  Gaming <br />
                  Boxing
                </p>
              </div>
            </div>
            <div className="text-container text-2xl">
              <p>
                I have a deep passion for collaborating with clients to design,
                build, deploy, and maintain systems that empower them to
                overcome business challenges. With over six years of experience
                working with both client-facing and internal clients, I thrive
                on adapting to new tech stacks and bringing innovative solutions
                to the table. My interest extends beyond coding and technology
                to focus on the impactful problems they can solve. I prioritize
                creating scalable, efficient, and sustainable solutions as I
                embark on my next set of challenges.
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute right-0 bottom-5 h-8 w-8"
          src={arrow}
          alt="Arrow-to-scroll-icon"
          onClick={() => (location.href = "./#experience")}
        />
      </section>
    </>
  );
}
