import arrow from "../assets/arrow.png"; 

export default function Projects() {
  return (
    <>

      <section
        id="projects"
        className=" px-5 xs:px-10 sm:px-12 md:px-24 py-24 transform-none"
      >
        <div className="flex items-center gap-3 pb-10 pt-2.5">
          <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-200 font-inter">
            Some Things I've Built
          </h3>
          <div className="h-px flex-grow max-w-xs bg-blue-100 dark:bg-blue-900"></div>
        </div>
        <div>
          <div className="flex flex-col-reverse md:flex-row items-center md:gap-3 mb-20 relative shadow-lg border dark:border-none md:border-none md:shadow-none rounded overflow-hidden md:overflow-visible transform-non opacity-85">
            <div className="w-full md:w-2/3 lg:w-1/2 z-10 bg-slate-50 dark:bg-slate-900 dark:md:bg-transparent  md:bg-transparent py-5 md:mt-5">
              <h4 className="font-roboto text-xs pb-1 text-blue-500 px-4">
                Featured Project
              </h4>
              <a
                target="_blank"
                href="https://joinme-app.vercel.app"
                className="text-2xl px-4 text-slate-700 dark:text-slate-300 font-bold"
              >
                Join Me!
              </a>
              <div className="md:bg-blue-500 dark:md:bg-blue-900 md:my-5 text-slate-700 dark:text-slate-300 md:text-white dark:md:text-slate-100 p-4 rounded md:shadow-lg ">
                <p className=" pb-4">
                  This application provides a feature-rich communication
                  platform where users can register, invite friends, and engage
                  in{" "}
                  <span className="font-bold">
                    text chat, video chat, and group video chat.{" "}
                  </span>{" "}
                  It combines a user-friendly interface,{" "}
                  <span className="font-bold ">Real-time communication</span>{" "}
                  technologies, and robust backend functionality to create an
                  immersive and interactive experience.
                </p>
                <p className=" font-semibold pb-4 text-slate-950 dark:text-white">
                  {" "}
                  The Back-End of this application is hosted on a free server,
                  it takes about 20 seconds to respond to first request.
                </p>
                <div className="">
                  <h3 className="text-lg font-semibold">Demo Accounts</h3>
                  <ul>
                    <li>
                      <span className="font-medium">Email:</span> test2@test.com
                      &nbsp; <span className="font-medium">Pass:</span> test123
                    </li>
                    <li>
                      <span className="font-medium">Email:</span> test3@test.com
                      &nbsp; <span className="font-medium">Pass:</span> test123
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap text-xs rounded text-slate-600 dark:text-slate-400 gap-x-8 gap-y-4 font-roboto px-4">
                <span>React</span>
                <span>Redux</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>React Router Dom</span>
                <span>TailwindCSS</span>
                <span>Socket.io</span>
                <span>WebRTC</span>
                <span>HeadlessUI</span>
              </div>
              </div>
              </div>
              </div>
      </section>
    </>
  );
}
