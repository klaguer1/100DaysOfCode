import header from "../assets/Header.jpeg";
import githubLogo from "../assets/github.png";
import linkedInLogo from "../assets/linkedin.png";
import resume from "../assets/KevinResume2024.pdf";
import arrow from "../assets/arrow.png";

export default function Hero() {
  return (
    <section className="justify-center flex h-[90vh] gap-5 mb-20 ">
      <div className="flex lg:h-[400px] lg:w-[400px] mx-0 my-auto md:h-[200px]  md:w-[200px] sm:h-[200px] sm:w-[200px]">
        <img className="rounded-[50%]" src={header} alt="profile picture"></img>
      </div>
      <div className="content-center self-center text-center gap-20 h-[80vh]">
        <p className="text-center font-semibold text-[1.75rem] ">Hello, I'm</p>
        <h1 className="text-center text-5xl">Kevin Laguerre</h1>
        <p className="text-3xl mt-3">Fullstack Developer</p>
        <div className="flex justify-center gap-4">
          <button
            className="font-semibold transition-all mt-4 p-4 rounded-3xl border-2 border-slate-800 border-solid hover:bg-slate-500 focus:outline-none focus:ring "
            onClick={() => window.open(resume)}
          >
            Resume
          </button>
          <button
            className="font-semibold transition-all mt-4 p-4 rounded-3xl border-2 border-slate-800 border-solid hover:bg-slate-500 focus:outline-none focus:ring "
            onClick={() => (location.href = "./#contact")}
          >
            Contact
          </button>
        </div>
        <div className="flex justify-center gap-4 my-1">
          <img
            src={linkedInLogo}
            alt="My LinkedIn Profile"
            className="cursor-pointer h-8"
            onClick={() => (location.href = "myLinkedIn")}
          />
          <img
            src={githubLogo}
            alt="Github Repo"
            className="cursor-pointer h-8"
            onClick={() => (location.href = "myGithub")}
          />
        </div>
      </div>
      <img
        className="absolute right-0 bottom-10 h-8 w-8"
        src={arrow}
        alt="Arrow-to-scroll-icon"
        onClick={() => (location.href = "./#about")}
      />
    </section>
  );
}
