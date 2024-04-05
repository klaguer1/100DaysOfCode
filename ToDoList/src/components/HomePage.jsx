import noProjectImage from "../assets/no-projects.png";

export default function HomePage({ displayHomePage, setDisplayHomePage }) {
  const showHomePage = () => {
    console.log("true");
    setDisplayHomePage(false);
  };

  return displayHomePage ? (
    <>
      <div className="mt-48 text-center w-2/3 ">
        <img
          className="w-16 h-16 object-contain mx-auto"
          src={noProjectImage}
          alt="No Projects"
        />
        <h1> No Projects </h1>
        <button
          onClick={showHomePage}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Create New Project
        </button>
      </div>
    </>
  ) : null;
}
